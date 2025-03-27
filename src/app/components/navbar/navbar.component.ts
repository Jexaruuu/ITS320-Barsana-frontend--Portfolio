import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  icons: string[] = [
    "🌞", "🌙", "⭐", "🔥", "💧", "🌿", "⚡", "🎵", "🎲", "🎯",
    "🎨", "🧩", "💡", "🔑", "🔔", "🎤", "🎸", "🎻", "🥁", "📢",
    "🚀", "🛸", "⏳", "📅", "📎", "🖊️", "🖌️", "🖍️", "🧷", "📏",
    "📐", "🖥️", "📱", "🎥", "📷", "🔍", "🔭", "🔬", "🧪", "⚖️",
    "🚦", "🎭", "🎪", "🎬", "🎮", "🎲", "🎻", "🛠️", "⚙️", "💰"
  ];
  
  currentIcon: string = this.icons[0];
  private currentIconIndex: number = 0;

  changeIcon(): void {
    this.currentIconIndex = (this.currentIconIndex + 1) % this.icons.length;
    this.currentIcon = this.icons[this.currentIconIndex];
  }
}
