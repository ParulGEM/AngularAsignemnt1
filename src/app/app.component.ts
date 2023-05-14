import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string= 'AngularAsignemnt1';
  ct:number=0;
  show:boolean=false;
  data:{itemno:number,itemname:string}[]=[];
  showtxt(){
    this.show=!this.show;
  }
  countclick(){
    this.ct++;
    console.log(this.ct);
  }
addvalue(inputtxt:any)
  {
    //console.log(inputtxt.value);
    if(inputtxt.value=="")
    {
      alert("Empty String is not allowed");
      return;
    }

    this.data.push({itemno:this.data.length+1,itemname:inputtxt.value});
    inputtxt.value="";
    console.log(this.data);

  }
}
