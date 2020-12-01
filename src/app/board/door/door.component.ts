import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  Renderer2,
  Output,
  EventEmitter,
} from "@angular/core";
import { AudioService } from "src/app/board/audio.service";
import { DateData } from "../date-data.model";
import { StateService } from "../state.service";

@Component({
  selector: "ac-door",
  templateUrl: "./door.component.html",
  styleUrls: ["./door.component.scss"],
})
export class DoorComponent {
  @Input() date: DateData;
  @Output() videoSelected: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild("leftCover", { static: false })
  private leftCover: ElementRef<HTMLDivElement>;

  @ViewChild("rightCover", { static: false })
  private rightCover: ElementRef<HTMLDivElement>;

  constructor(
    private audioService: AudioService,
    private stateService: StateService,
    private renderer: Renderer2
  ) {}

  onClick(): void {
    if (this.isDoorUnlocked() && !this.date.isOpened) {
      this.playAudio();
      this.date.isOpened = true;
      const state = this.stateService.getState();
      state[this.date.dayNumber] = true;
      this.stateService.setState(state);
    }
  }

  private isDoorUnlocked(): boolean {
    if (this.date.isUnlocked) return true;
    const hasValidValues = !!this.date.image.fileName;
    const today = new Date().getDate();
    return today >= this.date.dayNumber && hasValidValues;
  }

  private playAudio(): void {
    this.audioService.playAudio("sparkle");
  }

  propagateVideoSelected(videoId: string): void {
    this.videoSelected.emit(videoId);
  }

  openCovers(): void {
    this.renderer.addClass(this.leftCover.nativeElement, "open");
    this.renderer.addClass(this.rightCover.nativeElement, "open");
  }

  dateHasPassed(): boolean {
    return this.isDoorUnlocked();
  }
}
