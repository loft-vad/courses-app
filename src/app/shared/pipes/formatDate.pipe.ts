import { Pipe, PipeTransform } from '@angular/core'
import { formatDate } from '@angular/common';

@Pipe({
  name: 'dateFormatDDMMYYYY'
})

export class FormatDatePipe implements PipeTransform {
  transform(creationDate: Date): string {
    return formatDate(new Date(creationDate), 'dd.MM.yyyy', 'en');
  }
}
