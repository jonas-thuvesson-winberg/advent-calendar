import { Component, Input, Output, EventEmitter } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { DateData } from "./date-data.model";

@Component({
  selector: "ac-video-modal",
  templateUrl: "./video-modal.component.html",
  styleUrls: ["./video-modal.component.scss"]
})
export class VideoModalComponent {
  @Input() date: DateData;
  @Output() closingModal: EventEmitter<void> = new EventEmitter<void>();

  constructor(private sanitizer: DomSanitizer) {}

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
