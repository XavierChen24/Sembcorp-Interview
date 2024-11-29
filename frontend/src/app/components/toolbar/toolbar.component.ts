import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatFormFieldModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  searchControl = new FormControl();

  filteredOptions: Observable<string[]>;

  // Sample list of search suggestions
  options: string[] = ['Singapore', 'Malaysia', 'Thailand', 'Indonesia'];

  constructor() {
    // Filter the options based on the search input
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filter(value))
    );
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onSearch(): void {
    const searchTerm = this.searchControl.value;
    console.log('Search term:', searchTerm);
    // You can handle the search logic here, such as calling an API
  }
}
