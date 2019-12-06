import { Component, Input } from "@angular/core";

@Component({
  selector: "ac-icon-button",
  templateUrl: "./icon-button.component.html",
  styleUrls: ["./icon-button.component.scss"]
})
export class IconButtonComponent {
  @Input() sizeRatio?: number;
  @Input() iconName: string;

  constructor() {
    this.sizeRatio = this.sizeRatio || 1;
  }

  private containerBaseProps = {
    paddingX: 12,
    paddingY: 33,
    width: 22
  };

  private iconBaseProps = {
    "font-size": 60,
    "margin-top": 3
  };

  getContainerSizes() {
    return {
      padding: `${this.containerBaseProps.paddingX * this.sizeRatio}px ${this
        .containerBaseProps.paddingY * this.sizeRatio}px`,
      width: `${this.containerBaseProps.width * this.sizeRatio}px`
    };
  }

  getIconSizes() {
    return {
      "font-size": `${this.iconBaseProps["font-size"] * this.sizeRatio}px`,
      "margin-top": `${this.iconBaseProps["margin-top"] * this.sizeRatio}px`
    };
  }
}
