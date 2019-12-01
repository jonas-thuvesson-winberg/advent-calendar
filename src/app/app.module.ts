import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BoardComponent } from "./board/board.component";
import { DoorComponent } from "./board/door/door.component";
import { ChristmasTreeComponent } from "./board/christmas-tree/christmas-tree.component";
import { ChristmasTreeBorderComponent } from "./board/christmas-tree-border/christmas-tree-border.component";
import { SnowComponent } from "./snow/snow.component";

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    DoorComponent,
    ChristmasTreeComponent,
    ChristmasTreeBorderComponent,
    SnowComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
