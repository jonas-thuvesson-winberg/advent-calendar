import { Component, Input, Output, EventEmitter } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { DateData } from "../board-data";

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
      `https://www.youtube.com/embed/${
        this.date.videoId
      }?controls=0&autoplay=1&start=${this.date.videoOffset || 0}`
    );
    return url;
  }

  closeModal(): void {
    this.closingModal.emit();
  }
}
