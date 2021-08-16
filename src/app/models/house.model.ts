/**
 * the student model is imported
 */
import { Student } from "./student.model";


export class House{

    house?:string;//variable of type string
    students?: Array<Student>;//student type list

/**
 * are initialized in the constructor
 */
    constructor(){
        this.house='';
        this.students= new Array();
    }


}