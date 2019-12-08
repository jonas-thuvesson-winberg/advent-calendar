import { Injectable } from "@angular/core";

type AudioMap = Record<string, LazyAudio>;

class LazyAudio {
  private audio: HTMLAudioElement;

  constructor(private src: string) {}

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
  private readonly audioFiles: AudioMap = {
    sparkle: new LazyAudio("sparkle-sound-effect.mp3"),
    elephant: new LazyAudio("elephant.wav"),
    tiger: new LazyAudio("tiger.mp3"),
    cow: new LazyAudio("Cow-moo-sound.mp3"),
    cat: new LazyAudio("cat.wav")
  };

  playAudio(name: string): void {
    const audio = this.audioFiles[name].getAudio();
    audio.load();
    audio.play();
  }
}
