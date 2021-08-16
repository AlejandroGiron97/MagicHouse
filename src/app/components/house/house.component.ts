/**
 * import of: 
 * components 
 * modules
 * services
 * libraries
 */
import { Component, OnChanges, OnInit ,SimpleChanges, ViewChild} from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import {Student} from 'src/app/models/student.model';
import { initChangeDetectorIfExisting } from '@angular/core/src/render3/instructions';
import { House } from 'src/app/models/house.model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  public listStudents: Array<Student> = [];//list of students in which the api information is saved
  public dataSource:MatTableDataSource<Student>;//list of students where the information to be traversed in the table is stored
  public house:string[]=['Gryffindor','Slytherin','Hufflepuff','Ravenclaw'];//list of houses in api
  public select:string;//selector that contains the information of the house to search

  /**
   * list of with the names of the columns of the table together with the library methods such as ordering and pagination
   */
  displayedColumns: string[] = ['#','image','name','ancestry', 'hairColour','eyeColour','gender','species','alive'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  /**
   * constructor in which a service is injected and variables are initialized
   */
  constructor(private serviceService: ServiceService) {
    this.dataSource=new MatTableDataSource<Student>(this.listStudents);
    this.select='Gryffindor';
   }

   /**
    * ngOnInit, in which the methods are initialized and invoked
    */
  ngOnInit(): void {
   this.loadData();
  }
/** 
 * changeHouse, the method is done to update the selector
*/
  changeHouse()
  {
    this.loadData();
  }

/**
 * method that consumes the service
 */
  public loadData()
  {

    this.serviceService.get<Student>(`http://hp-api.herokuapp.com/api/characters/house/${this.select}`)
    .subscribe(answer => {
       this.listStudents= answer;
       console.log(this.listStudents);
       this.dataSource=new MatTableDataSource<Student>(this.listStudents);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    });
  }
  
  /**
   * Apply a filter on the Material table
   */
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  }
  



