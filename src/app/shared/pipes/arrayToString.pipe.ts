import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'arrToString',
  pure: false
})

export class ArrToStringPipe implements PipeTransform {
  transform(authors: string[]): string {
    return authors.join(', ');
  }
}
