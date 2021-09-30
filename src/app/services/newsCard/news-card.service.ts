import { Injectable } from '@angular/core';
import { Card } from 'src/app/tipi/card';

@Injectable({
  providedIn: 'root'
})
export class NewsCardService {

  constructor() { }

  getAllNews() : Card[] {
    return [... this.news_2022];
  }

  private news_2022 : Card[] = [
    {
      isChecked: false,
      titolo: "Premi di Settembre",
      contenuto: [
        "Macinatore di classifica:  AC Denti",
        "",
        "Puntaiolo:  Trucidi",
        "",
        "Freno a mano:  Garantiti e DAMBROSIANI",
        "",
        "Benvenuti alla prima premiazione dell'anno. Ogni mese si eleggono le squadre che fanno più discutere l'intero mondo delle fantapioppe. Ogni mese si assegnano tre premi.",
        "La squadra che si aggiudica il premio 'Macinatore di classifica' è la squadra che ha fatto più punti in classifica durante il mese.",
        "Il secondo premio si intitola 'Puntaiolo' e lo riceve la squadra che ha fatto più punti durante i calcoli delle giornate del mese (somma dei punteggi di ogni partita del mese).",
        "L'ultimo premio è il più ambito dagli atleti di cristo, poichè gli ultimi saranno i primi, il suo nome è 'Freno a mano' e lo si aggiudica la squadra che ha raccolto meno punti in classifica durante il mese"
      ],
      immagine: "./assets/img/news/crescita/crescitaACDenti.jpg"
    },
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
