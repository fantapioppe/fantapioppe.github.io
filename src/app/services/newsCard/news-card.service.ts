import { Injectable } from '@angular/core';
import { Card } from 'src/app/tipi/card';

@Injectable({
  providedIn: 'root'
})
export class NewsCardService {

  constructor() { }

  getAllNews() : Card[] {
    return [... this.news];
  }

  private news : Card[] = [
    {
      isChecked: false,
      titolo: "Pazzesco Maignan il più pagato al mondo",
      contenuto: [
        "Anche le fantapioppe hanno il loro PSG e si chiama 'Irociati'",
        "Le follie del proprietario hanno stupito l'intero panorama mondiale del calcio. Infatti Maignan è stato il portiere più pagato -- AL MONDO --",
        "Lo voglio ripetere, il portiere più pagato al mondo! Ben 46 mln sono stati necessari per portarsi a casa il neo portiere del Milan. Sembra incredibile, la gente si chiede dove hanno preso tutti questi soldi, infatti la squadra è ancora indagata per falso in bilancio. Le autorità erano riuscite a bloccare l'operazione Rafael Leo perchè i conti di casa Irociati non erano puliti."
      ],
      immagine: "./assets/img/news/Maignan.jpeg"
    },
  ]
}
