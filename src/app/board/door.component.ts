import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
  Output,
  EventEmitter
} from "@angular/core";
import { AudioService } from "src/app/board/audio.service";
import { DateData } from "./date-data.model";

@Component({
  selector: "ac-door",
  templateUrl: "./door.component.html",
  styleUrls: ["./door.component.scss"]
})
export class DoorComponent implements OnInit {
  @Input() date: DateData;
  @Output() videoSelected: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild("leftCover", { static: false })
  private leftCover: ElementRef<HTMLDivElement>;

  @ViewChild("rightCover", { static: false })
  private rightCover: ElementRef<HTMLDivElement>;

  constructor(private audioService: AudioService, private renderer: Renderer2) {
    // this.open = false;
  }

  ngOnInit() {
    // console.log(this.open);
  }

  onClick(): void {
    if (this.isDateAbleToOpen() && !this.date.isOpened) {
      this.playAudio();
      this.date.isOpened = true;
    }
  }

  private isDateAbleToOpen(): boolean {
    const hasValidValues =
      !!this.date.imageFileName &&
      (!!this.date.audioFileName || !!this.date.videoId);
    const today = new Date().getDay() + 1;
    return today >= this.date.dayNumber && hasValidValues;
  }

  private playAudio(): void {
    this.audioService.playAudio("sparkle");
  }

  // private playContentAudio(): void {
  //   if (this.date.audioFileName)
  //     this.audioService.playAudio(this.date.audioFileName);
  // }

  propagateVideoSelected(videoId: string): void {
    this.videoSelected.emit(videoId);
  }

  openCovers(): void {
    this.renderer.addClass(this.leftCover.nativeElement, "open");
    this.renderer.addClass(this.rightCover.nativeElement, "open");
  }

  dateHasPassed(): boolean {
    return this.isDateAbleToOpen();
  }
}
