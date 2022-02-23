import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(){

  }

  items:string[]=[];

  textValue: string='';
  isShowErrorMessage: boolean = false;

  addNew(){
    if(this.textValue != ''){
      this.isShowErrorMessage = false;

      this.items.push(this.textValue);
      this.textValue = '';
    }else{
      this.isShowErrorMessage = true;
    }

  }

  deleteItem(index: number){
    console.log(index);
    this.items.splice(index,1);

  }
}
