import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestsService } from 'src/app/core/requests.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  addProductForm!: FormGroup;
  stopLoading: boolean = true;

  constructor(
    private fb: FormBuilder,
    private apiService: RequestsService,
    private router: Router
  ) {
    this.buildForm();
  }

  buildForm() {
    this.addProductForm = this.fb.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      category: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.addProductForm?.valid) {
      this.stopLoading = false;
      this.apiService.addProduct(this.addProductForm.value).subscribe((res) => {
        this.stopLoading = true;
        this.router.navigate(['/products']);
      });
      console.log(this.addProductForm.value)
    }
  }
}
