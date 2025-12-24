
import React, { useState, useRef } from 'react';
import { GoogleGenAI, Modality, LiveServerMessage } from '@google/genai';
import { motion, AnimatePresence } from 'framer-motion';
import { encodeAudio, decodeAudio, decodeAudioData } from '../services/geminiService';

const AiConsultant: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [status, setStatus] = useState('Consult Our AI Architect');
  const [transcription, setTranscription] = useState<string[]>([]);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const outAudioContextRef = useRef<AudioContext | null>(null);
  const sessionPromiseRef = useRef<Promise<any> | null>(null);
  const nextStartTimeRef = useRef(0);
  const sourcesRef = useRef(new Set<AudioBufferSourceNode>());
  const streamRef = useRef<MediaStream | null>(null);

  const stopSession = () => {
    if (streamRef.current) streamRef.current.getTracks().forEach(track => track.stop());
    if (audioContextRef.current) audioContextRef.current.close();
    if (outAudioContextRef.current) outAudioContextRef.current.close();
    setIsActive(false);
    setStatus('Ready for next session');
    sessionPromiseRef.current = null;
  };

  const startSession = async () => {
    setIsActive(true);
    setStatus('Connecting to AI Core...');
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const inputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      const outputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      audioContextRef.current = inputCtx;
      outAudioContextRef.current = outputCtx;
      
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-09-2025',
        callbacks: {
          onopen: () => {
            setStatus('Active: AI Architect Listening');
            const source = inputCtx.createMediaStreamSource(stream);
            const scriptProcessor = inputCtx.createScriptProcessor(4096, 1, 1);
            
            scriptProcessor.onaudioprocess = (event) => {
              const inputData = event.inputBuffer.getChannelData(0);
              const int16 = new Int16Array(inputData.length);
              for (let i = 0; i < inputData.length; i++) int16[i] = inputData[i] * 32768;
              const pcmBase64 = encodeAudio(new Uint8Array(int16.buffer));
              sessionPromise.then(session => session.sendRealtimeInput({
                media: { data: pcmBase64, mimeType: 'audio/pcm;rate=16000' }
              }));
            };
            source.connect(scriptProcessor);
            scriptProcessor.connect(inputCtx.destination);
          },
          onmessage: async (message: LiveServerMessage) => {
            const base64Audio = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (base64Audio) {
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, outputCtx.currentTime);
              const audioBuffer = await decodeAudioData(decodeAudio(base64Audio), outputCtx, 24000, 1);
              const source = outputCtx.createBufferSource();
              source.buffer = audioBuffer;
              source.connect(outputCtx.destination);
              source.addEventListener('ended', () => sourcesRef.current.delete(source));
              source.start(nextStartTimeRef.current);
              nextStartTimeRef.current += audioBuffer.duration;
              sourcesRef.current.add(source);
            }
            if (message.serverContent?.interrupted) {
              sourcesRef.current.forEach(s => s.stop());
              sourcesRef.current.clear();
              nextStartTimeRef.current = 0;
            }
            if (message.serverContent?.outputTranscription) {
              const text = message.serverContent.outputTranscription.text;
              setTranscription(prev => [...prev.slice(-3), `Architect: ${text}`]);
            }
          },
          onerror: (e) => {
            console.error(e);
            stopSession();
          }
        },
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } } },
          systemInstruction: 'You are the Focalgrid Systems Solutions Architect. You help enterprise clients brainstorm high-level software, AI, and digital transformation strategies. Be professional, innovative, and concise.',
          outputAudioTranscription: {}
        }
      });
      sessionPromiseRef.current = sessionPromise;
    } catch (err) {
      console.error(err);
      setIsActive(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Real-Time <span className="text-gradient">AI Strategy</span> Consultation
          </h2>
          <p className="text-xl text-slate-400 mb-8 leading-relaxed">
            Experience the future of consulting. Talk directly to our proprietary AI Architect to brainstorm your next enterprise-scale project.
          </p>
          <div className="flex items-center space-x-4 mb-12">
            <div className="flex -space-x-2">
              {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-focalNavy bg-slate-800"></div>)}
            </div>
            <span className="text-sm text-slate-500">Joined by 50+ Engineers Globally</span>
          </div>
          
          <button
            onClick={isActive ? stopSession : startSession}
            className={`flex items-center space-x-4 px-8 py-5 rounded-2xl transition-all font-bold ${isActive ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-focalTeal hover:bg-focalCyan text-white shadow-xl shadow-teal-900/30'}`}
          >
            <i className={`fas ${isActive ? 'fa-stop' : 'fa-microphone-alt'} text-xl`}></i>
            <span>{isActive ? 'End Consultation' : 'Start AI Consultation'}</span>
          </button>
        </div>

        <div className="relative">
          <div className="bg-slate-900/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 shadow-2xl overflow-hidden min-h-[400px] flex flex-col justify-between">
            {/* Visualizer Effect */}
            <div className="flex items-center justify-center space-x-2 h-20 mb-10">
              {[...Array(isActive ? 12 : 5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={isActive ? { height: [10, 40, 10] } : { height: 4 }}
                  transition={{ repeat: Infinity, duration: 0.5 + Math.random(), ease: "easeInOut" }}
                  className="w-1.5 bg-focalTeal rounded-full"
                />
              ))}
            </div>

            <div className="flex-1 space-y-6">
              <div className="flex items-center space-x-3 text-slate-500 mb-4">
                <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-green-500' : 'bg-slate-700'}`}></div>
                <span className="text-xs font-bold uppercase tracking-widest">{status}</span>
              </div>

              <AnimatePresence>
                {transcription.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-4 bg-white/5 rounded-2xl border border-white/5 text-slate-300 text-sm italic"
                  >
                    {line}
                  </motion.div>
                ))}
                {transcription.length === 0 && (
                  <div className="text-slate-600 italic text-center py-10">
                    "Describe your technical challenge..."
                  </div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-600 font-bold uppercase tracking-widest">
              <span>FOCALGRID AI CORE V2.5</span>
              <span>PCM 24KHZ | LOW LATENCY</span>
            </div>
          </div>
          <div className="absolute -inset-10 bg-focalTeal/10 blur-[100px] -z-10 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default AiConsultant;
