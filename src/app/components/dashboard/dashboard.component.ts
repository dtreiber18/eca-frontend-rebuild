import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: any[] = []; // Define an array to store items

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Fetch items from the service on component initialization
    this.items = this.dataService.getItems();
  }
}
