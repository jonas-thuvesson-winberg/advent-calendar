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

  @ViewChild("iframeContainer", { static: false })
  iframeContainer: ElementRef;
  closeButtonRatio = 1;

  constructor(
    private sanitizer: DomSanitizer,
    private eventManager: EventManager
  ) {}

  ngAfterViewInit(): void {
    (this.iframeContainer.nativeElement as HTMLDivElement).innerHTML = `<iframe
      class="iframe"
      frameborder="0"
      src="${this.getVideoUrl().toString()}"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      #videoIframe
    ></iframe>`;
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

  getVideoUrl(): string {
    return `https://www.youtube.com/embed/${this.date.videoId}?autoplay=1${
      this.date.videoOffsets ? "&start=" + this.date.videoOffsets.start : ""
    }${
      this.date.videoOffsets && this.date.videoOffsets.end
        ? "&end=" + this.date.videoOffsets.end
        : ""
    }`;
  }

  closeModal(): void {
    this.closingModal.emit();
  }
}
