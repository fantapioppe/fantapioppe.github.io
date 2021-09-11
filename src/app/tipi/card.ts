export class Card {
  titolo: string;
  isChecked: boolean = false;
  immagine?: string;
  contenuto?: string[];
  style?: { [klass: string]: any }

  constructor(args){
    Object.assign(this,args)
  }
}
