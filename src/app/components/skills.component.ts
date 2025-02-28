import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section id="skills" class="py-20 bg-bg-light">
      <div class="container mx-auto px-6">
        <h2 class="section-title text-center text-text-primary">Skills & Expertise</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="card hover:border-t-4 hover:border-accent transition-all">
            <h3 class="text-xl font-bold mb-4 text-primary">Technical Skills</h3>
            <ul class="space-y-2">
              <li><i class="fas fa-check text-accent mr-2"></i>Project Management</li>
              <li><i class="fas fa-check text-accent mr-2"></i>Digital Strategy</li>
              <li><i class="fas fa-check text-accent mr-2"></i>Educational Technology</li>
              <li><i class="fas fa-check text-accent mr-2"></i>Data Analysis</li>
            </ul>
          </div>
          <div class="card hover:border-t-4 hover:border-accent transition-all">
            <h3 class="text-xl font-bold mb-4 text-primary">Soft Skills</h3>
            <ul class="space-y-2">
              <li><i class="fas fa-check text-accent mr-2"></i>Leadership</li>
              <li><i class="fas fa-check text-accent mr-2"></i>Communication</li>
              <li><i class="fas fa-check text-accent mr-2"></i>Problem Solving</li>
              <li><i class="fas fa-check text-accent mr-2"></i>Team Building</li>
            </ul>
          </div>
          <div class="card hover:border-t-4 hover:border-accent transition-all">
            <h3 class="text-xl font-bold mb-4 text-primary">Certifications</h3>
            <ul class="space-y-2">
              <li><i class="fas fa-certificate text-primary mr-2"></i>PMP Certified</li>
              <li><i class="fas fa-certificate text-primary mr-2"></i>Agile Scrum Master</li>
              <li><i class="fas fa-certificate text-primary mr-2"></i>Digital Learning Expert</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `
})
export class SkillsComponent {}