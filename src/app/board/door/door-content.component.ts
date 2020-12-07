import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  Renderer2,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from "@angular/core";
import { AudioService } from "src/app/board/audio.service";
import { DateData } from "../date-data.model";

@Component({
  selector: "ac-door-content",
  templateUrl: "./door-content.component.html",
  styleUrls: ["./door-content.component.scss"],
})
export class DoorContentComponent implements OnInit, AfterViewInit {
  @Input() date: DateData;
  @Output() videoSelected: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild("image", { static: false })
  private image: ElementRef<HTMLImageElement>;

  constructor(private audioService: AudioService, private renderer: Renderer2) {
    // this.open = false;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    if (this.date.image && this.date.image.fileName) {
      const img = new Image();
      img.src = `assets/${this.date.image.fileName}`;
      this.renderer.setAttribute(this.image.nativeElement, "src", `${img.src}`);
      if (this.date.image.adjustment) {
        this.renderer.setStyle(
          this.image.nativeElement,
          "top",
          `${(this.date.image.adjustment.top || 0) - 0}px`
        );
        this.renderer.setStyle(
          this.image.nativeElement,
          "left",
          `${(this.date.image.adjustment.left || 0) - 0}px`
        );
        if (this.date.image.adjustment.height) {
          this.renderer.setStyle(
            this.image.nativeElement,
            "height",
            `${this.date.image.adjustment.height * 350}px`
          );
        }
      }
    }
  }

  playVideo(): void {
    this.videoSelected.emit(this.date.video.ref);
    // window.open(`http://youtube.com/watch?v=${this.date.videoId}`, "_blank");
  }

  playSound(): void {
    if (this.date.audioFileName)
      this.audioService.playAudio(this.date.audioFileName);
  }
}
