import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Required for Angular Material
import { MatToolbarModule } from '@angular/material/toolbar'; // Import MatToolbarModule
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { BlueprintViewerComponent } from './components/blueprint-viewer/blueprint-viewer.component';
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ChatbotComponent,
    BlueprintViewerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Enable animations for Angular Material
    MatToolbarModule, // Import toolbar module for <mat-toolbar>
    MatButtonModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
