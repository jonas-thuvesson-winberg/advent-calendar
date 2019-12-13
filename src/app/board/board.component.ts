import { Component, OnInit } from "@angular/core";
import { BOARD_DATA } from "./board-data.model";
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
    this.dates = BOARD_DATA.dates;
    const state = this.stateService.getState();
    if (state) {
      this.dates = this.dates.map(date => {
        date.isOpened = state[date.dayNumber];
        return date;
      });
    }
  }

  handleSelectedVideo(videoRef: string) {
    this.videoSelected = true;
    this.selected = this.dates.find(item => item.video.ref === videoRef);
  }

  handleClosingModal() {
    this.videoSelected = false;
    this.selected = null;
  }
}
