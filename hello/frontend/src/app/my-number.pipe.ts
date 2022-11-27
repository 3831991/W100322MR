import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myNumber'
})
export class MyNumberPipe implements PipeTransform {

    transform(value: number): string {
        return value.toLocaleString();
    }

}
