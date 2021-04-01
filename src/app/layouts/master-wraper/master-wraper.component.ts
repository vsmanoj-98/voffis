import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-wraper',
  templateUrl: './master-wraper.component.html',
  styleUrls: ['./master-wraper.component.scss']
})
export class MasterWraperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hello="manoj";

  show=false;

  click(){

    this.show=!this.show
    
  }
  

}
