import { Component, OnChanges, Input, SimpleChanges } from "@angular/core";
import { SafeUrl, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "ac-video-frame",
  templateUrl: "./video-frame.component.html",
  styleUrls: ["./video-frame.component.scss"]
})
export class VideoFrameComponent implements OnChanges {
  @Input() videoUrl: SafeResourceUrl;

  ngOnChanges(changes: SimpleChanges) {
    console.log("I fucking changed?!!");
    console.log(changes);
  }
}
