export interface DateData {
  dayNumber: number;
  audioFileName: string;
  imageFileName: string;
  videoId: string;
  isOpened: boolean;
  imageAdjustment?: { x?: number; y?: number; height?: number };
  videoOffsets?: { start: number; end?: number };
  isUnlocked?: boolean;
}
