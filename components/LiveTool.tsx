
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Modality, LiveServerMessage } from '@google/genai';
import { encodeAudio, decodeAudio, decodeAudioData } from '../services/geminiService';

const LiveTool: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [status, setStatus] = useState('Ready to brainstorm');
  const [transcription, setTranscription] = useState<string[]>([]);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const outAudioContextRef = useRef<AudioContext | null>(null);
  const sessionPromiseRef = useRef<Promise<any> | null>(null);
  const nextStartTimeRef = useRef(0);
  const sourcesRef = useRef(new Set<AudioBufferSourceNode>());
  const streamRef = useRef<MediaStream | null>(null);

  const stopSession = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
    if (audioContextRef.current) audioContextRef.current.close();
    if (outAudioContextRef.current) outAudioContextRef.current.close();
    
    setIsActive(false);
    setStatus('Session ended');
    sessionPromiseRef.current = null;
  };

  const startSession = async () => {
    setIsActive(true);
    setStatus('Initializing session...');
    
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
            setStatus('Live: Listening...');
            const source = inputCtx.createMediaStreamSource(stream);
            const scriptProcessor = inputCtx.createScriptProcessor(4096, 1, 1);
            
            scriptProcessor.onaudioprocess = (event) => {
              const inputData = event.inputBuffer.getChannelData(0);
              const l = inputData.length;
              const int16 = new Int16Array(l);
              for (let i = 0; i < l; i++) {
                int16[i] = inputData[i] * 32768;
              }
              const pcmBase64 = encodeAudio(new Uint8Array(int16.buffer));
              
              sessionPromise.then((session) => {
                session.sendRealtimeInput({
                  media: { data: pcmBase64, mimeType: 'audio/pcm;rate=16000' }
                });
              });
            };
            
            source.connect(scriptProcessor);
            scriptProcessor.connect(inputCtx.destination);
          },
          onmessage: async (message: LiveServerMessage) => {
            const base64Audio = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (base64Audio) {
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, outputCtx.currentTime);
              const audioBuffer = await decodeAudioData(
                decodeAudio(base64Audio),
                outputCtx,
                24000,
                1
              );
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
              setTranscription(prev => [...prev.slice(-4), `AI: ${text}`]);
            }
          },
          onerror: (e) => {
            console.error('Live API Error:', e);
            setStatus('Error occurred');
            stopSession();
          },
          onclose: () => {
            setStatus('Connection closed');
            setIsActive(false);
          }
        },
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } }
          },
          systemInstruction: 'You are an expert software architect and product strategist. Help the user brainstorm upgrades for their application. Be concise, creative, and technical.',
          outputAudioTranscription: {}
        }
      });

      sessionPromiseRef.current = sessionPromise;

    } catch (err) {
      console.error(err);
      setStatus('Failed to start session');
      setIsActive(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto h-full flex flex-col items-center justify-center space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-black text-white tracking-tight">Live Strategy Brainstorm</h2>
        <p className="text-slate-400 text-lg">Talk to Gemini in real-time about your app architecture and feature roadmap.</p>
      </div>

      <div className="relative">
        {/* Pulsing rings when active */}
        {isActive && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-64 h-64 bg-blue-500/20 rounded-full animate-ping"></div>
            <div className="absolute w-48 h-48 bg-indigo-500/30 rounded-full animate-pulse"></div>
          </div>
        )}

        <button
          onClick={isActive ? stopSession : startSession}
          className={`relative z-10 w-40 h-40 rounded-full flex flex-col items-center justify-center transition-all duration-500 shadow-2xl ${
            isActive 
              ? 'bg-red-500 hover:bg-red-600 shadow-red-900/40 scale-110' 
              : 'bg-blue-600 hover:bg-blue-500 shadow-blue-900/40'
          }`}
        >
          <i className={`fas ${isActive ? 'fa-stop' : 'fa-microphone'} text-4xl mb-2 text-white`}></i>
          <span className="text-xs font-bold uppercase tracking-widest text-white">
            {isActive ? 'Stop' : 'Start'}
          </span>
        </button>
      </div>

      <div className="w-full max-w-2xl bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-green-500 animate-pulse' : 'bg-slate-600'}`}></div>
            <span className="text-sm font-semibold text-slate-300 uppercase tracking-widest">{status}</span>
          </div>
          {isActive && <span className="text-xs text-blue-400 font-mono">24kbps PCM stream</span>}
        </div>

        <div className="space-y-4 min-h-[160px] flex flex-col justify-end">
          {transcription.length === 0 ? (
            <p className="text-slate-500 italic text-center py-8">
              Transcript will appear here as you speak...
            </p>
          ) : (
            transcription.map((line, idx) => (
              <div 
                key={idx} 
                className={`p-3 rounded-xl text-sm ${
                  line.startsWith('AI:') 
                    ? 'bg-indigo-600/10 text-indigo-300 border-l-2 border-indigo-500' 
                    : 'text-slate-400'
                }`}
              >
                {line}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveTool;
