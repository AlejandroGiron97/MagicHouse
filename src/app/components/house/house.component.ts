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




@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  public listStudents: Array<Student> = [];//list of students in which the api information is saved
  public house:string[]=['Gryffindor','Slytherin','Hufflepuff','Ravenclaw'];//list of houses in api
  public select:string;//selector that contains the information of the house to search
  public filterPost:string; //variable for search filter
  public sortOrder = true;
  
  /**
   * constructor in which a service is injected and variables are initialized
   */
  constructor(private serviceService: ServiceService) {
    this.select='Gryffindor';
    this.filterPost='';
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
       this.listStudents=answer;
       console.log(this.listStudents);
    });
    
  }
  /**
   * method to order
   */
  sortlist()
  {
    this.sortOrder = !this.sortOrder;
    this.sortOrder ? this.sortA_Z() : this.sortZ_A();
    
  }

  sortA_Z(){
    this.listStudents.sort((a,b)=>{
      if(a.name.toLowerCase() < b.name.toLowerCase())
      {
        return -1;
      }
      if(a.name.toLowerCase() > b.name.toLowerCase())
      {
        return 1;
      }
      return 0;
      });
      this.filterPost= " ";
  }

  sortZ_A(){
    this.listStudents.sort((a,b)=>{
      if(a.name.toLowerCase() > b.name.toLowerCase())
      {
        return -1;
      }
      if(a.name.toLowerCase() < b.name.toLowerCase())
      {
        return 1;
      }
      return 0;
      });
    this.filterPost="";
  }

  refresh = () => {
    this.filterPost=" ";
  }

  }
  



