import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchItems();
  }

  // Fetch items from the service
  fetchItems(): void {
    this.dataService.getItems().subscribe(
      (data) => {
        this.items = data;
      },
      (error) => {
        console.error('Error fetching items', error);
      }
    );
  }

  // Create a new item
  addItem(): void {
    const newItem = { name: 'New Item', description: 'This is a new item' };
    this.dataService.createItem(newItem).subscribe(
      (data) => {
        this.items.push(data); // Add the newly created item to the list
      },
      (error) => {
        console.error('Error creating item', error);
      }
    );
  }

    editItem(item: any): void {
      const updatedItem = {
        ...item,
        name: item.name + ' (edited)', // Adds "(edited)" each time you click
        description: item.description + ' - updated again'
      };
      this.dataService.updateItem(updatedItem).subscribe({
        next: (data) => {
          const index = this.items.findIndex(i => i.id === data.id);
          if (index > -1) {
            this.items[index] = data; // Update the item in the list
          }
        },
        error: (error) => {
          console.error('Error updating item', error);
        }
      });
    }
  }