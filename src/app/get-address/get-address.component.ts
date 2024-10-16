import { Component } from '@angular/core';
import { AddressService } from '../address.service';


@Component({
  selector: 'app-get-address',
  standalone: true,
  imports: [],
  templateUrl: './get-address.component.html',
  styleUrl: './get-address.component.css'
})
export class GetAddressComponent {
  data: any;
  constructor (private addressService: AddressService) {};
  // ngOnInit(): void {
  //   this.addressService.getHeroes().subscribe(
  //     (response) => {
  //       console.log('Dữ liệu:', response);
  //       this.data = response;
  //     },
  //     (error) => {
  //       console.error('Lỗi khi lấy dữ liệu:', error);
  //     }
  //   );
  // }
}
