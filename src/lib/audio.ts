let context: AudioContext | null = null;

export function soundEnabled() {
  return typeof window !== 'undefined' && localStorage.getItem('portfolio:sound') === 'on';
}

export function setSoundEnabled(value: boolean) {
  localStorage.setItem('portfolio:sound', value ? 'on' : 'off');
}

export function playCue(kind: 'select' | 'success') {
  if (!soundEnabled() || typeof window === 'undefined') return;
  context ??= new AudioContext();
  const now = context.currentTime;
  const frequencies = kind === 'success' ? [330, 495, 660] : [260];
  frequencies.forEach((frequency, index) => {
    const oscillator = context!.createOscillator();
    const gain = context!.createGain();
    oscillator.type = kind === 'success' ? 'sine' : 'triangle';
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0, now + index * 0.07);
    gain.gain.linearRampToValueAtTime(0.045, now + index * 0.07 + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + index * 0.07 + 0.2);
    oscillator.connect(gain).connect(context!.destination);
    oscillator.start(now + index * 0.07);
    oscillator.stop(now + index * 0.07 + 0.22);
  });
}
