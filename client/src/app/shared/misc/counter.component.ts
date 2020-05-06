import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() value: number
  @Input() unit: string

  pluralUnit: string

  constructor() { }

  ngOnInit(): void {
  	this.value = 1;
  	console.log(this.unit)
  	this.pluralUnit = this.unit.concat('s')
  }

}
