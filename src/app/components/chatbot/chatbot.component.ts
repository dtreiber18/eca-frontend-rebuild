import { Component } from '@angular/core';
import { ChatbotService } from '../../services/chatbot.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  messages: { text: string; user: boolean }[] = []; // Holds conversation history
  userInput: string = ''; // Binds to user input field
  selectedTone: string = 'formal'; // Default tone

  constructor(private chatbotService: ChatbotService) {
    this.chatbotService.setTone(this.selectedTone); // Set default tone
  }

  // Update the chatbot's tone
  updateTone(): void {
    this.chatbotService.setTone(this.selectedTone);
  }

  // Send message and get chatbot response
  sendMessage(): void {
    if (this.userInput.trim()) {
      // Add user message to messages array
      this.messages.push({ text: this.userInput, user: true });

      // Get bot response based on the selected tone
      this.chatbotService.getResponse(this.userInput).subscribe(response => {
        this.messages.push({ text: response, user: false });
      });

      // Clear user input field
      this.userInput = '';
    }
  }
}
