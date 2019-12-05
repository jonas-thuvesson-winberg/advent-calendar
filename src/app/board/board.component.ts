import { Component, OnInit } from "@angular/core";
import { boardData } from "./board-data.model";
import { DateData } from "./date-data.model";

@Component({
  selector: "ac-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"]
})
export class BoardComponent implements OnInit {
  videoSelected: boolean;
  selected?: DateData;
  dates: DateData[];

  ngOnInit() {
    this.videoSelected = false;
    this.dates = boardData.dates;
  }

  handleSelectedVideo(videoId: string) {
    console.log(videoId);
    this.videoSelected = true;
    this.selected = this.dates.find(item => item.videoId === videoId);
  }

  handleClosingModal() {
    this.videoSelected = false;
    this.selected = null;
  }
}
