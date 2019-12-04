import { Injectable } from "@angular/core";

type AudioMap = Record<string, NullableAudio>;

class NullableAudio {
  private audio: HTMLAudioElement;

  constructor(private src: string) {
    console.log("creating audio");
  }

  getAudio() {
    if (!this.audio) {
      this.audio = new Audio();
      this.audio.src = `assets/${this.src}`;
    }
    return this.audio;
  }
}

@Injectable({ providedIn: "root" })
export class AudioService {
  private static audioSrc = "assets/sparkle-sound-effect.mp3";
  private readonly audioFiles: AudioMap = {
    sparkle: new NullableAudio("sparkle-sound-effect.mp3"),
    elephant: new NullableAudio("elephant.wav"),
    tiger: new NullableAudio("tiger.mp3"),
    cow: new NullableAudio("Cow-moo-sound.mp3")
  };

  playAudio(name: string): void {
    console.log("playing");
    const audio = this.audioFiles[name].getAudio();
    audio.load();
    audio.play();
  }
}
