export  class Student {
/** 
 * variables with the same name found in the JSON of the api
*/
    name? : string;
    ancestry?: string;
    hairColour?: string;
    eyeColour?:string;
    gender?: string;
    species?: string;
    alive?: boolean;
    image?: string;
    hogwartsStudent?: boolean;
    house?: string;
/**
 * construct initializing variables
 */
    constructor(){
        this.name='';
        this.ancestry='';
        this.hairColour='';
        this.image='';
        this.eyeColour='';
        this.gender='';
        this.species='';
        this.alive=true;
        this.hogwartsStudent=null;
        this.house='';
    }
}