export interface MotionPreferencePort {
  prefersReducedMotion(): boolean;
  subscribe(onChange: (prefersReducedMotion: boolean) => void): () => void;
}
