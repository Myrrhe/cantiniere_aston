import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userListSearch'
})
export class UserListSearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value) return null;
    if(!args) return value;

    args = args.toLocaleLowerCase();

    return value.filter((item: any) => {
      return JSON.stringify(item).toLocaleLowerCase().includes(args);
    })
  }

}
