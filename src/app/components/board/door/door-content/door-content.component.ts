import { Component, Input, OnInit } from "@angular/core";
import { AudioService } from "src/app/services/audio-service";

@Component({
  selector: "ac-door-content",
  templateUrl: "./door-content.component.html",
  styleUrls: ["./door-content.component.scss"]
})
export class DoorContentComponent implements OnInit {
  @Input() open: boolean;

  constructor() {
    // this.open = false;
  }

  ngOnInit() {}
}
