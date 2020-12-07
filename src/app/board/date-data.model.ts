export interface DateData {
  dayNumber: number;
  audioFileName?: string;
  image?: {
    fileName: string;
    adjustment?: { top?: number; left?: number; height?: number };
  };
  video?: {
    offsets?: { start: number; end?: number };
    ref: string;
    provider: "youtube";
  };
  isOpened: boolean;
  isUnlocked?: boolean;
}
