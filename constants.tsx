
import { Mood, Persona } from './types';

export const PRESET_PERSONAS: Persona[] = [
  { name: 'Sarah', role: 'Executive Recruiter', mood: 'Formal', gender: 'Female', language: 'English' },
  { name: 'David', role: 'Angel Investor', mood: 'Challenging', gender: 'Male', language: 'English' },
  { name: 'Alex', role: 'Supportive Coworker', mood: 'Friendly', gender: 'Male', language: 'English' },
  { name: 'Dr. Miller', role: 'Strict Academic Supervisor', mood: 'Strict', gender: 'Female', language: 'English' },
  { name: 'The Audience', role: 'Keynote Presentation Crowd', mood: 'Encouraging', gender: 'Female', language: 'English' },
];

export const MOODS: Mood[] = ['Formal', 'Friendly', 'Strict', 'Encouraging', 'Challenging'];

export const VOICE_MAP = {
  Male: 'Fenrir',
  Female: 'Kore',
};

export const COMMON_LANGUAGES = [
  'English',
  'Spanish',
  'French',
  'German',
  'Mandarin',
  'Japanese',
  'Korean',
  'Hindi',
  'Arabic',
  'Portuguese',
  'Russian',
  'Italian'
];

/**
 * Safely retrieves the API Key.
 * Priority:
 * 1. Hardcoded Llama Key (Primary/Default)
 * 2. Environment Variables (Fallback for Gemini)
 */
export const getSystemApiKey = (): string | undefined => {
  // 1. Primary: Use the Llama API Key provided as default
  const llamaKey = "llx-bGdgnc2PcIRx8rtLjSLmBegWRHPkubIFGYIEwC9VVsSaK9Gl";
  if (llamaKey) return llamaKey;

  // 2. Fallback: Try Standard Environment Variables (Gemini)
  let envKey: string | undefined;

  // Try Vite (import.meta.env)
  try {
    // @ts-ignore
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      // @ts-ignore
      const val = import.meta.env.VITE_API_KEY || import.meta.env.API_KEY;
      if (val) envKey = val;
    }
  } catch (e) {
    // Ignore ReferenceErrors
  }

  // Try Standard Process Env
  if (!envKey) {
    try {
      if (typeof process !== 'undefined' && process.env) {
        const val = process.env.API_KEY || 
              process.env.REACT_APP_API_KEY || 
              process.env.NEXT_PUBLIC_API_KEY ||
              process.env.VITE_API_KEY;
        if (val) envKey = val;
      }
    } catch (e) {
      // Ignore errors
    }
  }
  
  return envKey;
};
