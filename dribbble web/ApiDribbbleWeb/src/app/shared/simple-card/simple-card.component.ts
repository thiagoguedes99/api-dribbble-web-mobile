import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.css']
})
export class SimpleCardComponent implements OnInit {

  @Input() shots;

  constructor() { }

  ngOnInit() {
  }

}
