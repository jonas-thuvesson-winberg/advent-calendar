import { Component, OnInit } from "@angular/core";
import { DateData, boardData } from "./board-data";

@Component({
  selector: "ac-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"]
})
export class BoardComponent implements OnInit {
  private videoSelected: boolean;
  private selectedVideoId: string;
  private dates: DateData[];

  ngOnInit() {
    this.videoSelected = false;
    this.dates = boardData.dates;
  }

  private handleSelectedVideo(videoId: string) {
    console.log(videoId);
    this.videoSelected = true;
    this.selectedVideoId = videoId;
  }
}
