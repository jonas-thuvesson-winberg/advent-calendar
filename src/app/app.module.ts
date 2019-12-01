import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./components/app.component";
import { BoardComponent } from "./components/board/board.component";
import { DoorComponent } from "./components/board/door/door.component";
import { ChristmasTreeComponent } from "./components/board/christmas-tree/christmas-tree.component";
import { ChristmasTreeBorderComponent } from "./components/board/christmas-tree-border/christmas-tree-border.component";
import { SnowComponent } from "./components/snow/snow.component";
import { DoorContentComponent } from "./components/board/door/door-content/door-content.component";

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    DoorComponent,
    DoorContentComponent,
    ChristmasTreeComponent,
    ChristmasTreeBorderComponent,
    SnowComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
