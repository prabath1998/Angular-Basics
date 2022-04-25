import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-from-v2',
  templateUrl: './reactive-from-v2.component.html',
  styleUrls: ['./reactive-from-v2.component.css']
})
export class ReactiveFromV2Component implements OnInit {

  studentForm!: FormGroup;

  submitted: boolean = false;

  get f(){return this.studentForm.controls;}

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void{
    this.studentForm = this.formBuilder.group({
      firstName:['',[Validators.required]],
      lastName:[''],
      dob:['',[Validators.required]],
      contactNo:['',[Validators.required]],
      address:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]],
      conformPassword:['',[Validators.required]]    

    });

    
  }

  onSubmit():void{
    this.submitted = true;

    console.log(this.studentForm.value);
    console.log(this.studentForm.controls);

    //add values into form controls
    this.studentForm.patchValue({
      firstName: 'Suranja',
      lastName: 'Liyanage',
      dob : '2013.02.15',
      contactNo:'01236587'
    });

    if(this.studentForm.invalid){
      alert('Invalid');
    }
    
    
  }

}
