import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { WorkComponent } from './components/work/work.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeaderComponent, HeroComponent, WorkComponent, AboutComponent, FooterComponent],
  template: `
    <app-navbar></app-navbar>
    <app-header></app-header>
    <app-about></app-about>
    <app-work></app-work>
    <app-hero></app-hero>
    <app-footer></app-footer>
  `
})
export class AppComponent {}
