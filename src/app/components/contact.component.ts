import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section id="contact" class="py-20">
      <div class="container mx-auto px-6">
        <h2 class="section-title text-center text-text-primary">Get in Touch</h2>
        <div class="max-w-2xl mx-auto">
          <form class="space-y-6">
            <div>
              <label class="block text-text-primary mb-2">Name</label>
              <input type="text" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary">
            </div>
            <div>
              <label class="block text-text-primary mb-2">Email</label>
              <input type="email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary">
            </div>
            <div>
              <label class="block text-text-primary mb-2">Message</label>
              <textarea rows="4" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"></textarea>
            </div>
            <button type="submit" class="bg-primary text-white w-full px-6 py-3 rounded-lg hover:bg-secondary transition-colors duration-300">
              Send Message
            </button>
          </form>
          <div class="mt-12 text-center">
            <div class="flex justify-center space-x-6">
              <a href="#" class="text-text-secondary hover:text-primary transition-colors">
                <i class="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="#" class="text-text-secondary hover:text-primary transition-colors">
                <i class="fab fa-github text-2xl"></i>
              </a>
              <a href="#" class="text-text-secondary hover:text-primary transition-colors">
                <i class="fab fa-twitter text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {}