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
import { AudioService } from "src/app/board/audio.service";
import { DateData } from "../date-data.model";

@Component({
  selector: "ac-door-content",
  templateUrl: "./door-content.component.html",
  styleUrls: ["./door-content.component.scss"]
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
    if (this.date.imageFileName) {
      const img = new Image();
      img.src = `assets/${this.date.imageFileName}`;
      this.renderer.setAttribute(this.image.nativeElement, "src", `${img.src}`);
      if (this.date.imageAdjustment) {
        console.log(
          this.date.imageFileName,
          this.date.imageAdjustment.x,
          this.date.imageAdjustment.y
        );
        this.renderer.setStyle(
          this.image.nativeElement,
          "top",
          `${(this.date.imageAdjustment.x || 0) - 0}px`
        );
        this.renderer.setStyle(
          this.image.nativeElement,
          "left",
          `${(this.date.imageAdjustment.y || 0) - 0}px`
        );
        if (this.date.imageAdjustment.height) {
          this.renderer.setStyle(
            this.image.nativeElement,
            "height",
            `${this.date.imageAdjustment.height * 350}px`
          );
        }
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
