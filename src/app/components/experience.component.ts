import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <section id="experience" class="py-20">
      <div class="container mx-auto px-6">
        <h2 class="section-title text-center text-text-primary">Professional Experience</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="card hover:border-l-4 hover:border-primary transition-all">
            <h3 class="text-xl font-bold mb-4 text-primary">Digital Transformation Lead</h3>
            <p class="text-text-secondary mb-4">TechEd Solutions • 2020 - Present</p>
            <ul class="list-disc list-inside space-y-2 text-text-primary">
              <li>Led digital transformation initiatives across 5 major educational institutions</li>
              <li>Developed and implemented comprehensive training programs</li>
              <li>Mentored over 100 professionals in technology adoption</li>
            </ul>
          </div>
          <div class="card hover:border-l-4 hover:border-primary transition-all">
            <h3 class="text-xl font-bold mb-4 text-primary">Senior Project Manager</h3>
            <p class="text-text-secondary mb-4">EduTech Innovations • 2015 - 2020</p>
            <ul class="list-disc list-inside space-y-2 text-text-primary">
              <li>Managed large-scale educational technology implementations</li>
              <li>Coordinated cross-functional teams of 20+ members</li>
              <li>Achieved 40% improvement in project delivery timelines</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ExperienceComponent {}