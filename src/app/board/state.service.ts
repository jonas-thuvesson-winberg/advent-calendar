import { Injectable } from "@angular/core";
import { StateMap, state } from "./state.model";

@Injectable({ providedIn: "root" })
export class StateService {
  private state: StateMap;

  constructor() {
    const stateString = localStorage.getItem("advent-calendar-state");
    if (!stateString) {
      this.state = state;
    } else {
      this.state = JSON.parse(stateString);
    }
  }

  getState() {
    return this.state;
  }

  setState(state: StateMap) {
    localStorage.setItem("advent-calendar-state", JSON.stringify(state));
  }
}
