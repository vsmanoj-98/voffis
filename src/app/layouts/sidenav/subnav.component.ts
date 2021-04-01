import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subnav',
  templateUrl: './subnav.component.html',
  styleUrls: ['./subnav.component.scss']
})
export class SubnavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onclick(){
    this.router.navigateByUrl('/employee')
  }
  onPress(){
    this.router.navigateByUrl('employeeDetails')
  }
}

