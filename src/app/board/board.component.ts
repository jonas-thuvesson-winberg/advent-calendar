import { Component, OnInit } from "@angular/core";
import { boardData } from "./board-data.model";
import { DateData } from "./date-data.model";
import { StateService } from "./state.service";

@Component({
  selector: "ac-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"]
})
export class BoardComponent implements OnInit {
  videoSelected: boolean;
  selected?: DateData;
  dates: DateData[];

  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.videoSelected = false;
    this.dates = boardData.dates;
    const state = this.stateService.getState();
    if (state) {
      this.dates = this.dates.map(date => {
        date.isOpened = state[date.dayNumber];
        return date;
      });
    }
  }

  handleSelectedVideo(videoId: string) {
    this.videoSelected = true;
    this.selected = this.dates.find(item => item.videoId === videoId);
  }

  handleClosingModal() {
    this.videoSelected = false;
    this.selected = null;
  }
}
