import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: any[] = [];
  itemForm: FormGroup; // FormGroup to handle the form

  constructor(private dataService: DataService, private fb: FormBuilder) {
    // Initialize the form with default values
    this.itemForm = this.fb.group({
      id: [''], // Hidden field for updating items
      name: [''],
      description: ['']
    });
  }

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

  // Add a new item using form data
  addItem(): void {
    const newItem = this.itemForm.value;
    this.dataService.createItem(newItem).subscribe(
      (data) => {
        this.items.push(data);
        this.itemForm.reset(); // Clear the form after adding
      },
      (error) => {
        console.error('Error creating item', error);
      }
    );
  }

  // Prepare the form to edit an existing item
  editItem(item: any): void {
    this.itemForm.patchValue(item); // Fill the form with the selected item's data
  }

  // Update an item after editing
  updateItem(): void {
    const updatedItem = this.itemForm.value;
    this.dataService.updateItem(updatedItem).subscribe(
      (data) => {
        const index = this.items.findIndex(i => i.id === data.id);
        if (index > -1) {
          this.items[index] = data;
        }
        this.itemForm.reset(); // Clear the form after updating
      },
      (error) => {
        console.error('Error updating item', error);
      }
    );
  }
}
