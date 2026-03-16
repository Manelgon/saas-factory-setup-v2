import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const glass = {
  base: 'bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl',
  card: 'bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl overflow-hidden',
  button: 'bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2 text-white font-medium transition-all duration-300 active:scale-95',
  input: 'bg-white/5 hover:bg-white/10 focus:bg-white/10 backdrop-blur-md border border-white/10 focus:border-white/30 rounded-xl px-4 py-2 text-white outline-none transition-all duration-300',
  modal: 'bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-8',
}
