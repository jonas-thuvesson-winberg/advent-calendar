import { Component, Input } from "@angular/core";

@Component({
  selector: "ac-calendar-date",
  templateUrl: "./calendar-date.component.html",
  styleUrls: ["./calendar-date.component.scss"]
})
export class CalendarDateComponent {
  @Input() starred: boolean;
}
