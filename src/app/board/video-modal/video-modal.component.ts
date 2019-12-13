import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl
} from "@angular/platform-browser";
import { DateData } from "../date-data.model";

@Component({
  selector: "ac-video-modal",
  templateUrl: "./video-modal.component.html",
  styleUrls: ["./video-modal.component.scss"]
})
export class VideoModalComponent implements OnInit {
  @Input() date: DateData;
  @Output() closingModal: EventEmitter<void> = new EventEmitter<void>();

  videoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.videoUrl = this.getVideoUrl();
  }

  getVideoUrl(): SafeResourceUrl {
    return this.constructYoutubeUrl();
  }

  private constructYoutubeUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.date.video.ref}?autoplay=1${
        this.date.video.offsets ? "&start=" + this.date.video.offsets.start : ""
      }${
        this.date.video.offsets && this.date.video.offsets.end
          ? "&end=" + this.date.video.offsets.end
          : ""
      }`
    );
  }

  closeModal(): void {
    this.closingModal.emit();
  }
}
