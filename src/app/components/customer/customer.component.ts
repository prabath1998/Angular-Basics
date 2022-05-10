import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerForm!: FormGroup;
  customerList:any[] = [];
  collectionSize: number = 0;
  pageSize: number = 5;
  page: number = 1;

  submitted: boolean = false;
  isLoading:boolean = false;

  get f() {
    return this.customerForm.controls;
  }

  constructor(private fb:FormBuilder,private customerService:CustomerService) { }

  ngOnInit(): void {
    this.initForm();
    this.getList();
  }

  initForm(){
    this.customerForm = this.fb.group({
      firstName : ['',[Validators.required]],
      lastName : ['',[Validators.required]],
      dob : ['',[Validators.required]],
      contactNo : ['',[Validators.required]],
      address : ['',[Validators.required]],
    })
  }

  onSaveOrUpdate(): void {
    this.submitted = true;
    if(this.customerForm.invalid){
      // alert('please fill out required fields');
      return;
    }
    // console.log(this.customerForm.value);
    this.customerService.create(this.customerForm.value).subscribe(res => {
      this.submitted = false;
      this.customerForm.reset();
      console.log(res);
      this.getList();
    },error => {
      console.log('Error occured when saving data');
      
    },() => {
      console.log('Completed');
      
    }
    )    
  }

  getList():void{
    this.customerService.getAll().subscribe(res => {
      this.customerList = res;
      this.collectionSize = this.customerList.length;
      
    })
  }





}
