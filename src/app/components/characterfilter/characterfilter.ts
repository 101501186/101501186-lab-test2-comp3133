import { CommonModule } from '@angular/common';
import { Component, OnInit, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-characterfilter',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './characterfilter.html',
  styleUrl: './characterfilter.css'
})
export class Characterfilter implements OnInit {
  readonly houseChanged = output<string>();

  protected readonly houseControl = new FormControl('all', { nonNullable: true });
  protected readonly houses = ['all', 'gryffindor', 'slytherin', 'hufflepuff', 'ravenclaw'];

  ngOnInit(): void {
    this.houseChanged.emit(this.houseControl.value);

    this.houseControl.valueChanges.subscribe((house) => {
      this.houseChanged.emit(house);
    });
  }
}
