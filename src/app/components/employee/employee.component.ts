import { OnInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { NotificationService } from 'src/app/service/notification.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  array: any = [];
  table: boolean = true
  add: boolean = false
  id: any
  name: any
  mail: any
  role: any
  closeResult!:string;
  deleteArray: any[] | undefined;
  emarray:any=[];
  isDisabled:boolean=true;
  index: any;
  
  
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
  displayedColumns: string[] = ['id', 'name', 'mail', 'role'];

  displayedColumns1 = ['id','name','mail','role'];

  dataSource1 = new MatTableDataSource(this.EMPLOYEE_DATA);
   
  @ViewChild('MatSort1') set Matsort1(sort: MatSort) {
    this.dataSource1.sort = sort;
  };
  @ViewChild('MatPaginator1') set MatPaginator1(paginator: MatPaginator) {
    this.dataSource1.paginator= paginator;
  } ; 

  @ViewChild('MatSort1')
  sort1!: MatSort;
  
  @ViewChild('MatPaginator1')
  paginator1!: MatPaginator;

  constructor(private notifyService: NotificationService,private modalService :NgbModal) { }

  
  ngOnInit(): void { 

  }
  
  applyFilter(id: any) {

    this.array = this.EMPLOYEE_DATA.filter((x: any) => x.id == id.value)
    this.dataSource1 = new MatTableDataSource(this.array)
  }
  
  addEmployee() {    
    this.refresh()
    this.table = false;
    this.add = true;
  }
  refresh(){
    this.id="";
    this.name="";
    this.mail="";
    this.role="";
  }
  back(){
    this.table=true;
    this.add=false
  }
  ngAfterViewInit() {
    this.dataSource1.sort = this.sort1;
    this.dataSource1.paginator=this.paginator1;   
  }
  reload(){
    this.dataSource1 = new MatTableDataSource(this.EMPLOYEE_DATA);
    this.dataSource1.sort=this.sort1;
    this.dataSource1.paginator=this.paginator1;
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
    this.dataSource1.sort=this.sort1;
    this.dataSource1.paginator=this.paginator1;
    console.log(this.EMPLOYEE_DATA);
    this.add = false;
    this.table = true;
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
  
}


