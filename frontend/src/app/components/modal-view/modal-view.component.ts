import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-modal-view',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './modal-view.component.html',
  styleUrl: './modal-view.component.css'
})
export class ModalViewComponent {
  countryName: String = "test";

  private _data?: Data[]; // Example type

  @Input()
  set data(value: Data[] | undefined) {
    this._data = value;
  }

  get data() {
    return this._data;
  }

  @Output() closeDrawerEmitter = new EventEmitter<void>();

  closeDrawer() {
    this.closeDrawerEmitter.emit();
  }
}
