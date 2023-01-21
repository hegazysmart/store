import { Component } from '@angular/core';
import { RequestsService } from 'src/app/core/requests.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  item = <any>{};
  id: string = '';
  stopLoading: boolean = false;
  constructor(private apiService: RequestsService) {
    this.id = window.location.href.split('/').pop() || '';
  }

  ngOnInit() {
    this.getDetails();
  }

  async getDetails() {
    this.item = await this.apiService.getSingleProduct(this.id);
    if (this.item) {
      this.stopLoading = true;
    }
  }
}
