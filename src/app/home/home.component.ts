import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  title: string = `Another example headline.`;
  description: string = `Your Most trusted and beloved place for Online Shoping`;
  ngOnInit(): void {}
}
