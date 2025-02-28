import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="bg-white shadow-md sticky top-0 z-50">
      <nav class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="text-2xl font-bold text-primary">Colleen Cockrell</div>
          <div class="hidden md:flex space-x-6">
            <a href="#about" class="text-text-primary hover:text-primary transition-colors">About</a>
            <a href="#experience" class="text-text-primary hover:text-primary transition-colors">Experience</a>
            <a href="#skills" class="text-text-primary hover:text-primary transition-colors">Skills</a>            <a href="#contact" class="text-text-primary hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  `
})
export class HeaderComponent {}