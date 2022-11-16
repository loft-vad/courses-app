import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'duration'
})

export class DurationPipe implements PipeTransform {
  transform(timeInMin: number): string {
    let hours = Math.floor(timeInMin / 60);
    let minutes = timeInMin % 60;
    let hoursString = hours < 10 ? "0" + hours : hours;
    let minutesString = minutes < 10 ? "0" + minutes : minutes;
    return hoursString + ':' + minutesString;
  }
}
