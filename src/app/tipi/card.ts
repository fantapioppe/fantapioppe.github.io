export class Card {
  titolo: string;
  contenuto?: string[];
  isChecked: boolean = false;
  style?: { [klass: string]: any }
}
