import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/product.service';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css'],
})
export class JoinUsComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {}

  addNewletter(form) {
    console.log(form.value);
    let newUser = {
      name: form.value.userName,
      email: form.value.userEmail,
    };
    this.productsService.addNewsLetter(newUser).subscribe((data) => {
      console.log(data);
    });
  }
}
