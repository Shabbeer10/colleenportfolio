import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div class="container mx-auto px-6 text-center">
        <img 
          src="../assets/colleen.jpg"
          alt="Profile Photo"
          class="rounded-full w-44 h-44 mx-auto mb-6 border-4 border-white shadow-xl"
        />
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Colleen Cockrell</h1>
        <p class="text-xl md:text-2xl mb-8 text-gray-100">Project Manager & Digital Transformation Expert</p>
      </div>
    </section>
  `
})
export class HeroComponent {}