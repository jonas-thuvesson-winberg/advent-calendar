import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";
import { AudioService } from "src/app/services/audio-service";

@Component({
  selector: "ac-door",
  templateUrl: "./door.component.html",
  styleUrls: ["./door.component.scss"]
})
export class DoorComponent implements OnInit {
  @Input() number: number;
  @Input() contentAudio?: string;

  @ViewChild("leftCover", { static: false })
  private leftCover: ElementRef<HTMLDivElement>;

  @ViewChild("rightCover", { static: false })
  private rightCover: ElementRef<HTMLDivElement>;

  private open: boolean;

  constructor(private audioService: AudioService, private renderer: Renderer2) {
    // this.open = false;
  }

  ngOnInit() {
    this.open = false;
  }

  private onClick(): void {
    if (!this.open) {
      this.openCovers();
      this.playAudio();
      this.open = true;
      setTimeout(() => {
        this.playContentAudio();
      }, 1000);
    } else {
      this.playContentAudio();
    }
  }

  private openCovers() {
    this.renderer.addClass(this.leftCover.nativeElement, "open");
    this.renderer.addClass(this.rightCover.nativeElement, "open");
  }

  private playAudio(): void {
    this.audioService.playAudio("sparkle");
  }

  private playContentAudio(): void {
    if (this.contentAudio) this.audioService.playAudio(this.contentAudio);
  }
}
