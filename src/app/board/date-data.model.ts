export interface DateData {
  dayNumber: number;
  audioFileName: string;
  imageFileName: string;
  videoId: string;
  isOpened: boolean;
  imageAdjustment?: {
    x: number;
    y: number;
  };
  videoOffset?: number;
}
