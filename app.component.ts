import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'educational-form';


  // keyPressNumbers(event: { which: any; keyCode: any; preventDefault: () => void; }) {

  //   var charCode = (event.which) ? event.which : event.keyCode;

  //   // Only Numbers 0-9

  //   if ((charCode < 65 || charCode > 122) || charCode==32) {

  //     event.preventDefault();

  //     return false;

  //   } else {

  //     return true;

  //   }

  // }
  onSubmit(value: any) {

    console.log(value);

  }
  forschool(event:any)
{
  if(event.charCode>=48 && event.charCode<=57 && event.charCode==32)
  {
    return false;
  }
  else{
    return true;
  }
}
}



