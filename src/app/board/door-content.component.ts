import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  Renderer2,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from "@angular/core";
import { AudioService } from "src/app/board/audio-service";
import { DateData } from "./board-data";

@Component({
  selector: "ac-door-content",
  templateUrl: "./door-content.component.html",
  styleUrls: ["./door-content.component.scss"]
})
export class DoorContentComponent implements OnInit, AfterViewInit {
  @Input() date: DateData;
  @Output() videoSelected: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild("content", { static: false })
  private content: ElementRef<HTMLDivElement>;

  constructor(private audioService: AudioService, private renderer: Renderer2) {
    // this.open = false;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    if (this.date.imageFileName) {
      const img = new Image();
      img.src = `assets/${this.date.imageFileName}`;
      this.renderer.setStyle(
        this.content.nativeElement,
        "background-image",
        `url(${img.src})`
      );
      if (this.date.imageAdjustment) {
        this.renderer.setStyle(
          this.content.nativeElement,
          "background-position",
          `${this.date.imageAdjustment.x}px ${this.date.imageAdjustment.y}px`
        );
      }
    }
  }

  playVideo(): void {
    this.videoSelected.emit(this.date.videoId);
    // window.open(`http://youtube.com/watch?v=${this.date.videoId}`, "_blank");
  }

  playSound(): void {
    if (this.date.audioFileName)
      this.audioService.playAudio(this.date.audioFileName);
  }
}
