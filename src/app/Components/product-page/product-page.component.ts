import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../service/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-page',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  product:{id: number | string; title: string; price: number | string; imgPath: string} | undefined;
  
  constructor(private router :Router){}

  ngOnInit(){
    this.product = history.state.product;
  }
}
