import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "ac-door",
  templateUrl: "./door.component.html",
  styleUrls: ["./door.component.scss"]
})
export class DoorComponent implements OnInit {
  @Input() number: number;

  open: boolean;

  constructor() {
    // this.open = false;
  }

  ngOnInit() {
    console.log(this.number);
    this.open = false;
  }

  onClick(): void {
    this.playAudio();
    this.open = true;
  }

  playAudio(): void {
    let audio = new Audio();
    audio.src = "assets/sparkle-sound-effect.mp3";
    audio.load();
    audio.play();
  }
}
