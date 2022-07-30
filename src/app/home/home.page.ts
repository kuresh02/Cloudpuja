import { Component } from '@angular/core';
const userData = require('pirated-data');
declare var require: any
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
ngOnInit(){
  console.log("Helloworld");
  var cardDetails = userData.financialCardGenerator();
  console.log(cardDetails);
}
  constructor() {}

}
