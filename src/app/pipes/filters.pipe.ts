import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filters'
})
/**
 * logic to filter by search
 */
export class FilterPipe implements PipeTransform
{
    transform(value: any, arg: any):any 
    {   
        const result = [];
        arg = arg.trim();
        for(const post of value)
        {
            if(post.name.toLowerCase().indexOf(arg.toLowerCase()) != -1)
            {
                result.push(post);
            };
        };
        return result;
    }
}