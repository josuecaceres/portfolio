import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './sections/home/home.component';
import { AboutComponent } from './sections/about/about.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ContactComponent } from './sections/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  scrolled: boolean = false;
  showMenu: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showMenu = false;
    const scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (scrollPosition > 120) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
