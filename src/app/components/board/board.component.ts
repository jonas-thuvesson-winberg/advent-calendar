import { Component } from "@angular/core";

@Component({
  selector: "ac-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"]
})
export class BoardComponent {
  title = "advent-calendar";
  private numbers: number[];

  constructor() {
    this.numbers = Array(24)
      .fill(0)
      .map((x, i) => i);
  }
}
