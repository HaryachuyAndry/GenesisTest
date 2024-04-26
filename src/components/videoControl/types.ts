export type VideoControlProps = {
  currentTime: number;
  duration: number;
  onSlideCapture: (v: number) => void;
  onSlideComplete: () => void;
  onSlideStart: () => void;
  onPlay: (v: boolean) => void;
  play: boolean;
};
