import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutText'
})
export class CutTextPipe implements PipeTransform {

  transform(value: string, arg: number): string {
    return value.length > arg ? value.slice(0, arg) + '...' : value;
  }

}
