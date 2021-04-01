import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { NotificationService } from 'src/app/service/notification.service';
import { ModalDismissReasons,NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  id:any;
  name:any; 
  mail:any;
  role:any;
  array:any=[];
  isDisabled:boolean=true;
 
  index: any;
  deleteArray: any[] | undefined;
  EMPLOYEE_DATA: any []= [
    { id: 1, name: 'Manoj', mail: 'Manoj@gmail.com', role: 'Developer' },
    { id: 2, name: 'Surya', mail: 'Surya112@gmail.com', role: 'Developer' },
    { id: 3, name: 'Sharath', mail: 'Sharatht@gmail.com', role: 'Tester' },
    { id: 4, name: 'Mukesh', mail: 'Chmukesh@gmail.com', role: 'Developer' },
    { id: 5, name: 'Prabhu', mail: 'Prabhu@gmail.com', role: 'Tester' },
    { id: 6, name: 'Ravi', mail: 'Ravi1122@gmail.com', role: 'Developer' },
    { id: 7, name: 'Naveen', mail: 'Naveenj@gmail.com', role: 'Tester' },
    { id: 8, name: 'Bharath', mail: 'Bharath1@gmail.com', role: 'Tester' },
    { id: 9, name: 'Rajesh', mail: 'Rajeshch@gmail.com', role: 'Developer' },
    { id: 10, name: 'Kiran', mail: 'Kirank@gmail.com', role: 'Developer' },
    { id: 11, name: 'Murali', mail: 'Muralikrishna@gmail.com', role: 'Developer' },
    { id: 12, name: 'Chaitanya', mail: 'Chaitu@gmail.com', role: 'Tester' },
    { id: 13, name: 'Teja', mail: 'Teja@gmail.com', role: 'Developer' },
    { id: 14, name: 'Nani', mail: 'Nani@gmail.com', role: 'Developer' },
    { id: 15, name: 'Charan', mail: 'Ramcharan@gmail.com', role: 'Tester' },
    { id: 16, name: 'Mahesh', mail: 'Mahesh@gmail.com', role: 'Developer' },
    { id: 17, name: 'Nikil', mail: 'Nikil@gmail.com', role: 'Developer' },
    { id: 18, name: 'Nithin', mail: 'Nithin@gmail.com', role: 'Tester' },
    { id: 19, name: 'Salman', mail: 'Salman@gmail.com', role: 'Developer' },
    { id: 20, name: 'Akshay', mail: 'Akshay@gmail.com', role: 'Tester' }
  ];
  ELEMENT_DATA:any[] = [
    { id: 1, name: 'Manoj', mail: 'Manoj@gmail.com', role: 'Developer' },
    { id: 2, name: 'Surya', mail: 'Surya112@gmail.com', role: 'Developer' },
    { id: 3, name: 'Sharath', mail: 'Sharatht@gmail.com', role: 'Tester' },
    { id: 4, name: 'Mukesh', mail: 'Chmukesh@gmail.com', role: 'Developer' },
    { id: 5, name: 'Prabhu', mail: 'Prabhu@gmail.com', role: 'Tester' },
    { id: 6, name: 'Ravi', mail: 'Ravi1122@gmail.com', role: 'Developer' },
    { id: 7, name: 'Naveen', mail: 'Naveenj@gmail.com', role: 'Tester'},
    { id: 8, name: 'Bharath', mail: 'Bharath1@gmail.com', role: 'Tester'},
    { id: 9, name: 'Rajesh', mail: 'Rajeshch@gmail.com', role: 'Developer' },
    { id: 10, name: 'Kiran', mail: 'Kirank@gmail.com', role: 'Developer'},
    { id: 11, name: 'Murali', mail: 'Muralikrishna@gmail.com', role: 'Developer' },
    { id: 12, name: 'Chaitanya', mail: 'Chaitu@gmail.com', role: 'Tester'},
    { id: 13, name: 'Teja', mail: 'Teja@gmail.com', role: 'Developer' },
    { id: 14, name: 'Nani', mail: 'Nani@gmail.com', role: 'Developer' },
    { id: 15, name: 'Charan', mail: 'Ramcharan@gmail.com', role: 'Tester' },
    { id: 16, name: 'Mahesh', mail: 'Mahesh@gmail.com', role: 'Developer'},
    { id: 17, name: 'Nikil', mail: 'Nikil@gmail.com', role: 'Developer' },
    { id: 18, name: 'Nithin', mail: 'Nithin@gmail.com', role: 'Tester'},
    { id: 19, name: 'Salman', mail: 'Salman@gmail.com', role: 'Developer'},
    { id: 20, name: 'Akshay', mail: 'Akshay@gmail.com', role: 'Tester'}
  ];
  displayedColumns1 = ['id','name','mail','role'];
  displayedColumns2 = ['id','name','mail','role','action'];
 
  dataSource1 = new MatTableDataSource(this.EMPLOYEE_DATA);
  dataSource2 = new MatTableDataSource(this.ELEMENT_DATA);
  closeResult: string | undefined;

  // @ViewChild('MatSort1') set Matsort1(sort: MatSort) {
  //   this.dataSource1.sort = sort;
  // };
  // @ViewChild('MatPaginator1') set Matpaginator1(paginator: MatPaginator) {
  //   this.dataSource1.paginator= paginator;
  // } ; 

  // @ViewChild('MatSort2') set MatSort2(sort: MatSort) {
  //   this.dataSource2.sort = sort;
  // };
  // @ViewChild('MatPaginator2') set MatPaginator2(paginator: MatPaginator) {
  //   this.dataSource2.paginator= paginator;
  // } ; 


  constructor(private notifyService: NotificationService,private modalService :NgbModal) { }
    ngOnInit(): void {
  }
  @ViewChild('MatSort1')
  sort1!: MatSort;
  
  @ViewChild('MatPaginator1')
  paginator1!: MatPaginator;

  @ViewChild('MatSort2')
  sort2!: MatSort;

  @ViewChild('MatPaginator2')
  paginator2!: MatPaginator;
  applyFilter1(id: any) {

    this.array = this.EMPLOYEE_DATA.filter((x: any) => x.id == id.value)
    this.dataSource1 = new MatTableDataSource(this.array)
  }
  table1(){
    this.dataSource1 = new MatTableDataSource(this.EMPLOYEE_DATA);
    this.dataSource1.paginator=this.paginator1;
    this.dataSource1.sort=this.sort1;
  }
  table2(){
    this.dataSource2 = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource2.paginator=this.paginator2;
    this.dataSource2.sort=this.sort2;
  }
  
  refresh(){
    this.id="";
    this.name="";
    this.mail="";
    this.role="";
  }
 
  save() {  
    if( this.id==""|| this.id==undefined){
      this.notifyService.showInfo("id");
      return
    }
    else if( this.name==""||this.name==undefined){
      this.notifyService.showInfo("name");
      return
    }
    else if( this.mail==""||this.mail==undefined){
      this.notifyService.showInfo("mail");
      return
    }
    else if( this.role==""||this.role==undefined){
      this.notifyService.showInfo("role");
      return
    }
    else{
      this.notifyService.showSuccess("Success");
    }
    this.EMPLOYEE_DATA.push({
      id: this.id,
      name: this.name,
      mail: this.mail,
      role: this.role
    })
    this.dataSource1 = new MatTableDataSource(this.EMPLOYEE_DATA);
    this.dataSource1.paginator=this.paginator1;
    this.dataSource1.sort=this.sort1
    console.log(this.EMPLOYEE_DATA);
  }
  open(content: any) {
    this.refresh();
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }    
  }
 

  ngAfterViewInit() {
    this.dataSource1.sort = this.sort1;
    this.dataSource1.paginator=this.paginator1;
    this.dataSource2.sort = this.sort2;
    this.dataSource2.paginator=this.paginator2
  }


  delete(i: number){
  this.dataSource2.filteredData.splice(i, 1);
  this.deleteArray = this.dataSource2.filteredData;
  this.dataSource2 = new MatTableDataSource(this.deleteArray);
  this.dataSource2.paginator=this.paginator2;
  this.dataSource2.sort=this.sort2
 }


  applyFilter2(name: any) {

    this.array = this.ELEMENT_DATA.filter((x: any) => x.name == name.value)
    this.dataSource2 = new MatTableDataSource(this.array)
  }
}



