import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private tone: string = 'formal'; // Default tone

  constructor() {}

  // Set tone based on user selection
  setTone(tone: string): void {
    this.tone = tone;
  }

  // Get tone to use in responses
  getTone(): string {
    return this.tone;
  }

  // Adjust response based on tone
  getResponse(message: string): Observable<string> {
    if (message.toLowerCase().includes('blueprint')) {
      return of(this.getBlueprintResponse());
    } else if (message.toLowerCase().includes('technical advice')) {
      return of(this.getTechnicalAdviceResponse());
    } else if (message.toLowerCase().includes('risk')) {
      return of(this.getRiskResponse());
    } else {
      return of(this.getDefaultResponse());
    }
  }

  // Generate response based on tone
  private getBlueprintResponse(): string {
    if (this.tone === 'casual') {
      return "Alright, let's get your blueprint started! What's your project goal?";
    } else if (this.tone === 'technical') {
      return "Initiating blueprint. Please specify the project’s primary architecture objectives.";
    } else {
      return "To begin your blueprint, let’s outline the main goals of your project. How can I assist?";
    }
  }

  private getTechnicalAdviceResponse(): string {
    if (this.tone === 'casual') {
      return "I'd say, focus on scalability and keep your data synced across all services.";
    } else if (this.tone === 'technical') {
      return "Ensure architectural scalability and establish robust data consistency protocols across all microservices.";
    } else {
      return "For technical advice, consider scalability and data consistency as critical aspects.";
    }
  }

  private getRiskResponse(): string {
    if (this.tone === 'casual') {
      return "Just a heads-up, watch out for security and performance risks.";
    } else if (this.tone === 'technical') {
      return "Key risks include potential data security vulnerabilities, latency issues under high load, and compliance misalignment.";
    } else {
      return "Consider potential risks such as security, performance, and compliance alignment.";
    }
  }

  private getDefaultResponse(): string {
    if (this.tone === 'casual') {
      return "Hey! Need help with a blueprint or technical advice? Just ask.";
    } else if (this.tone === 'technical') {
      return "Awaiting input. I’m ready to provide architectural insights or technical guidance.";
    } else {
      return "Hello! How may I assist you today? You can ask about blueprint creation or technical advice.";
    }
  }
}
