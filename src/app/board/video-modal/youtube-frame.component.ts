import { Component, Input } from "@angular/core";
import { SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "ac-youtube-frame",
  templateUrl: "./youtube-frame.component.html",
  styleUrls: ["./youtube-frame.component.scss"]
})
export class YoutubeFrameComponent {
  @Input() videoUrl: SafeResourceUrl;
}
