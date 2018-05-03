import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'age'
})

export class AgePipe implements PipeTransform {
    transform(value: Date): string {
        let today = moment();
        let dob = moment(value);
        let years = today.diff(dob, 'years') + 1;
        let html:string = years + " years ago";

        return html;
    }
}