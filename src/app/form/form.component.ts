import {Component, OnInit} from '@angular/core';
import {StorageService} from '../service/storage.service';
import {NgForm} from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  products1 = [];
  images = [];

  constructor(private storageServis: StorageService) {
  }

  ngOnInit() {

  }




  uploadImage() {
    this.storageServis.downloadImages(this.images);
  }

  OnAddTextProduct(form1: NgForm) {
    const {text, title, price, tara} = form1.value;
    // console.log(form1.value)
    firebase.database().ref('products/').push({
    title: title,
    text: text, price: price, tara: tara
    });
   // console.log(form1);
  }

  onAddProduct(event) {
    const file = event.srcElement.files;
    if (file[0]) {
     // console.log(file[0]);
      if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();
        reader.onload = ($event: any) => {
          const url = $event.target.result;
          this.images.push({
            url, file: file[0]
          });
        };
        reader.readAsDataURL(event.target.files[0]);
       // console.log(this.images);
      }
    }
  }


}
