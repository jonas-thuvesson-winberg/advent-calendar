import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { EventManager } from "@angular/platform-browser";

@Component({
  selector: "ac-close-button",
  templateUrl: "./close-button.component.html",
  styleUrls: ["./close-button.component.scss"]
})
export class CloseButtonComponent implements OnInit {
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  closeButtonRatio = 1;

  constructor(private eventManager: EventManager) {
    this.resizeButton();
  }

  ngOnInit(): void {
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

  propagateCloseEvent() {
    this.closeModal.emit();
  }
}
