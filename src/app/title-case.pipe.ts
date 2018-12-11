import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {
   preposition=["of","the","in"];
  transform(value: string): any {
    if(!value) return null;
    else{
      let words = value.split(" ");
      for(var i=0;i<words.length;i++){
        let word=words[i];
        if(i>0 && this.isPreposition(word)){
          words[i]=word.toLocaleLowerCase();
        }else{
          words[i]=this.toTitleCase(word);
        }
      }
        return words.join(' ');
      }
    }
    private isPreposition(words:string):boolean{
      let preposition=["of","the","in"];
      return preposition.includes(words.toLowerCase())
     }

     private toTitleCase(words : string) {
      return (words.substr(0,1).toUpperCase()+words.substr(1).toLowerCase())
     }
  }


