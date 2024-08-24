import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModel } from '../../../../shared/models/product-model';

@Component({
  selector: 'app-product-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.scss']
})
export class ProductSummaryComponent {
  @Input() product: ProductModel | undefined;
}
