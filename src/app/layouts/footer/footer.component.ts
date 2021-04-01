import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material/paginator'; 

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
 
//  isVisible:boolean=false
  constructor() { 
    
  }
  domains:any[]=[{ id: 1, name: 'Manoj', role: 'Developer',editable:false },
  { id: 2, name: 'surya', role: 'Developer',editable:false },
  { id: 3, name: 'mukesh', role: 'Developer',editable:false },
  { id: 4, name: 'Manoj', role: 'Developer',editable:false },
  { id: 5, name: 'surya', role: 'Developer',editable:false },
  { id: 6, name: 'mukesh', role: 'Developer',editable:false },
  { id: 7, name: 'Manoj', role: 'Developer',editable:false },
  { id: 8, name: 'surya', role: 'Developer',editable:false },
  { id: 9, name: 'mukesh', role: 'Developer',editable:false }
]
    
  ngOnInit(): void {
  }
   
  edit(domain:any){
   domain.editable=!domain.editable
  }
 
}

