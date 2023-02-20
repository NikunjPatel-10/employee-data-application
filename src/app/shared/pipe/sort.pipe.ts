import { Pipe, PipeTransform } from '@angular/core';
import { employee } from 'src/app/employee/employee.model';
export type SortOrder = 'asc' | 'desc';
@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  //   value.sort((a: any, b: any) => {
  //     if (a < b) {
  //       return -1
  //     }
  //     else if (a > b) {
  //       return 1
  //     }
  //     else {
  //       return 0
  //     }
  //   });

  //   return value
  // }
  transform(array: any, name: string): any {
    
    if (name === 'dsec') {

      array.sort((a: any, b: any) => {
        if(a.name < b.name) {
          return 1;
        } else if (a.name > b.name) {
          return -1;
        } else {
          return 0;
        }
      });
      return array;
    } else if(name === 'asec') {
      array.sort((a: any, b: any) => {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        }
        else{
          return 0;
        }
      });
      return array;
    } 
    else{
      return array;
    }
  }

}


