import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}
  r: any[];
  getRoute() {
    this.r = this.router.url.split('/');

    if (
      this.r.includes('products') ||
      this.r.includes('viewproduct') ||
      this.r.includes('category')
    ) {
      return 'bg-dark';
    } else {
      return 'fixed-top';
    }
  }
}
