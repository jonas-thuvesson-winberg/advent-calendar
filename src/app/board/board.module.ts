import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { BoardComponent } from "./board.component";
import { IconButtonComponent } from "./icon-button.component";

import { DoorComponent } from "./door/door.component";
import { DoorContentComponent } from "./door/door-content.component";
import { CalendarDateComponent } from "./door/calendar-date.component";

import { VideoModalComponent } from "./video-modal/video-modal.component";
import { CloseButtonComponent } from "./video-modal/close-button.component";
import { VideoFrameComponent } from "./video-modal/video-frame.component";

@NgModule({
  declarations: [
    BoardComponent,
    DoorComponent,
    DoorContentComponent,
    IconButtonComponent,
    VideoModalComponent,
    CalendarDateComponent,
    CloseButtonComponent,
    VideoFrameComponent
  ],
  imports: [BrowserModule],
  exports: [BoardComponent],
  providers: []
})
export class BoardModule {}
