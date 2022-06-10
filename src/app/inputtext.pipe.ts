import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'inputtext'
})
//ASSIGNMENT3
export class InputPipe implements PipeTransform {
    transform(value: string): any{
        

        if(!value) return null;

        let rijeci = value.split(' ');
        for (let i=0; i<rijeci.length; i++){
            let rijec = rijeci[i];
            if(i>0 && this.jePrijedlog(rijec)) 
                rijeci[i] = rijec.toLowerCase();
                 else {
                rijeci[i] = this.toTitleCase(rijec);
            }
        }
        return rijeci.join(' ');
    }

    private toTitleCase (rijec: string): string {
       return rijec.substr(0, 1).toUpperCase() + rijec.substr(1).toLowerCase();
    }

    private jePrijedlog(rijec: string):boolean {
        const lowLetterWords = ['a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'as', 'at',
        'by', 'for', 'from', 'in', 'into', 'near', 'of', 'on', 'onto', 'to', 'with'];

        return lowLetterWords.includes(rijec.toLowerCase())
    }
}