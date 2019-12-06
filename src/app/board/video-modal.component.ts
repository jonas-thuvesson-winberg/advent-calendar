import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";
import {
  DomSanitizer,
  SafeResourceUrl,
  EventManager
} from "@angular/platform-browser";
import { DateData } from "./date-data.model";

@Component({
  selector: "ac-video-modal",
  templateUrl: "./video-modal.component.html",
  styleUrls: ["./video-modal.component.scss"]
})
export class VideoModalComponent {
  @Input() date: DateData;
  @Output() closingModal: EventEmitter<void> = new EventEmitter<void>();
  closeButtonRatio = 1;

  constructor(
    private sanitizer: DomSanitizer,
    private eventManager: EventManager
  ) {}

  ngAfterViewInit(): void {
    this.resizeButton();
    this.eventManager.addGlobalEventListener("window", "resize", () => {
      this.resizeButton();
    });
  }

  private resizeButton() {
    const height = window.innerHeight;
    const width = window.innerWidth;
    if (width < 1365) {
      if (height < 500) {
        this.closeButtonRatio = 0.5;
      } else if (height < 800) {
        this.closeButtonRatio = 0.7;
      } else {
        this.closeButtonRatio = 1;
      }
    } else {
      this.closeButtonRatio = 1;
    }
  }

  getVideoUrl(): SafeResourceUrl {
    const url = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.date.videoId}?autoplay=1${
        this.date.videoOffsets ? "&start=" + this.date.videoOffsets.start : ""
      }${
        this.date.videoOffsets && this.date.videoOffsets.end
          ? "&end=" + this.date.videoOffsets.end
          : ""
      }`
    );
    return url;
  }

  closeModal(): void {
    this.closingModal.emit();
  }
}
