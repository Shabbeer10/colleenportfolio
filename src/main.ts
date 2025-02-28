import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './app/components/header.component';
import { HeroComponent } from './app/components/hero.component';
import { AboutComponent } from './app/components/about.component';
import { ExperienceComponent } from './app/components/experience.component';
import { SkillsComponent } from './app/components/skills.component';
import { ContactComponent } from './app/components/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    ContactComponent
  ],
  template: `
    <app-header></app-header>
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-experience></app-experience>
      <app-skills></app-skills>
      <app-contact></app-contact>
    </main>
    <footer class="bg-gray-800 text-white py-6">
      <div class="container mx-auto px-6 text-center">
        <p>&copy; 2025 Colleen Cockrell. All rights reserved.</p>
      </div>
    </footer>
  `
})
export class App {
  name = 'Portfolio';
}

bootstrapApplication(App);