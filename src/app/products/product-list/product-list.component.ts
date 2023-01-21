import { Component } from '@angular/core';
import { RequestsService } from 'src/app/core/requests.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  data = <any>[];
  stopLoading: boolean = false;

  constructor(private apiService: RequestsService) {}

  ngOnInit() {
    this.getData();
  }

  async getData() {
    this.data = await this.apiService.getProducts();
    if (this.data.length > 0) {
      this.stopLoading = true;
    }
  }
}
