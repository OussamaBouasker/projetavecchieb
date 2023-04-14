import { Component } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent {

  addProductForm : FormGroup;
  updateProductForm : FormGroup;
  cat : any ;
  imagePath : any;
  imgURL : any =null;
  fileUpload: any;
  listProduct : any;
  idDelete : any;
  constructor(){
    this.listProduct = localStorage.getItem('products');
    this.listProduct = JSON.parse(this.listProduct);
    if(this.listProduct == null){
      this.listProduct = []
    }
    this.addProductForm = new FormGroup({
      id : new FormControl(''),
      libelle : new FormControl('', Validators.required),
      description : new FormControl('', Validators.required),
      taille : new FormControl('', Validators.required),
      photo : new FormControl('', Validators.required),
      color : new FormControl(''),
      prix : new FormControl('', Validators.required),
      categorie : new FormControl('', Validators.required)
    })
    this.updateProductForm = new FormGroup({
      id : new FormControl(''),
      libelle : new FormControl('', Validators.required),
      description : new FormControl('', Validators.required),
      taille : new FormControl('', Validators.required),
      photo : new FormControl('', Validators.required),
      color : new FormControl(''),
      prix : new FormControl('', Validators.required),
      categorie : new FormControl('', Validators.required)
    })
  }

  categorieSelectionnee(form:any){
    this.cat = form.value.categorie;
  }

  preview(files:any) {
    if (files.length === 0)
      return; 
    var mimeType = files[0].type; 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
  filechangeEvent(fileInput : any){
    this.fileUpload = <Array<File>>fileInput.target.files;
    this.addProductForm.controls['photo'].setValue(this.fileUpload[0]['name']);
  }

  addProduct(body:any){
    body.value.id = this.randomString(5);
    if(this.listProduct != null){
      this.listProduct.push(body.value);
      localStorage.setItem('products', JSON.stringify(this.listProduct))
    }
    else {
      this.listProduct = [];
      this.listProduct.push(body.value);
      localStorage.setItem('products', JSON.stringify(this.listProduct))
    }
    
  }
  randomString(val:number){
    var randomChars = '0123456789';
    var result = '';
    for ( var i = 0; i < randomChars.length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }
  deleteProduct(idd:number){
    var tab = []
    for(let i=0; i<this.listProduct.length; i++){
      if(this.listProduct[i].id != idd){
        tab.push(this.listProduct[i]);
      }
    };
    this.listProduct = tab;
    localStorage.setItem('products', JSON.stringify(this.listProduct))
    window.location.reload()
  }
  setUpdateForm(id:number){
    for(let i=0; i<this.listProduct.length; i++){
      if(this.listProduct[i].id == id){
        this.updateProductForm.controls['id'].setValue(this.listProduct[i].id)
        this.updateProductForm.controls['libelle'].setValue(this.listProduct[i].libelle)
        this.updateProductForm.controls['description'].setValue(this.listProduct[i].description)
        this.updateProductForm.controls['taille'].setValue(this.listProduct[i].taille)
        this.updateProductForm.controls['photo'].setValue(this.listProduct[i].photo)
        this.updateProductForm.controls['color'].setValue(this.listProduct[i].color)
        this.updateProductForm.controls['prix'].setValue(this.listProduct[i].prix)
        this.updateProductForm.controls['categorie'].setValue(this.listProduct[i].categorie)
        this.imgURL = `../../../../../assets/img-product/${this.listProduct[i].photo}`
      }
    };
    console.log(this.imgURL)
    console.log(this.updateProductForm.value)
  }
  updateProduct(body:any){
    for(let i=0; i< this.listProduct.length; i++){
      if(this.listProduct[i].id == body.value.id){
        this.listProduct[i]=body.value;
      }
    }
    localStorage.setItem('products', JSON.stringify(this.listProduct));
  }
  setIdDelete(id:any){
    this.idDelete = id;
  }
}
