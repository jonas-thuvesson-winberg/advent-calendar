import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { BoardComponent } from "./board/board.component";
import { DoorComponent } from "./board/door.component";
import { SnowComponent } from "./snow/snow.component";
import { DoorContentComponent } from "./board/door-content.component";
import { IconButtonComponent } from "./board/icon-button.component";
import { VideoModalComponent } from "./board/video-modal.component";
import { CalendarDateComponent } from "./board/calendar-date.component";

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    DoorComponent,
    DoorContentComponent,
    SnowComponent,
    IconButtonComponent,
    VideoModalComponent,
    CalendarDateComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
