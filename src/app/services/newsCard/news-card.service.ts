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
      titolo: "Premi di Ottobre",
      contenuto: [
        "Macinatore di classifica:  AS Pilicueta",
        "",
        "Puntaiolo:  AS Pilicueta",
        "",
        "Freno a mano:  Gli Atleti Di Cristo",
        "",
        "Ottobre mese favorevole ad As Pilicueta che si porta a casa i due premi più ambiti (macinatore e puntaiolo).",
        "Infatti è riuscito a segnare ben 13 goal in 4 partite, ben 5 goal contro i DAMBROSIANI e 4 goal contro gli Irociati, diciamo pure che il colpo Simeone si sta rivelando un ottimo affare.",
        "Mentre nel gradino più basso si accomodano Gli Atleti Di Cristo che in 4 scontri si sono portati a casa ben 2 punti, voci di corridoio dicono che si sta mangiando le mani per non aver scambiato quel bidone di Abraham che in questo mese ha prodotto 0 goal e due ammonizioni.",
        "E' d'obbligo fare una citazione d'onore anche se non ha ricevuto nessun premio, ma gli AC Denti continuano a sorprende, infatti la coppia d'attacco Immobile - Zapata (la IMZA direbbe studio sport) risulta una delle più prolifiche del campionato, ma occhio ai mai molli Banfetti che restano attaccatti al dentista."
      ],
      immagine: "./assets/img/news/crescita/crescitaBrignoGigi.jpg"
    },
    {
      isChecked: false,
      titolo: "Predica bene, razzola male",
      contenuto: [
        "Un giuda si aggira tra noi, tra menzogne e sotterfugi una squadra predica bene e razzola male.",
        "Il presidente degli Atleti Di Cristo a inizio anno ha mosso una critica:",
        "'Ragazzi non facciamo mai degli scambi però'.",
        "La critica era lecita, in 10 anni di fantapioppe non ricordo un singolo scambio tra allenatori.",
        "Fonti certe però svelano la vera natura del padovano di adozione, infatti ha ricevuto ben due proposte di scambio (fatto storico per la nostra competizione).",
        "I DAMBROSIANI si erano spinti a proporre Dybala e Politano per Abraham e Keita, mentre addirittura gli Avellino Banfi hanno proposto lo scambio tra il bomber Dzeko e il londinese Abraham.",
        "In entrambi i casi il patron illuminato ha rifiutato senza diritto di replica, rendendo vano il suo appello iniziale.",
        "I tifosi campani con il senno di poi hanno avuto la meglio, riuscendo a trattenere Dzeko che sembra rinato nella città milane.",
        "Abraham sembra un buon prospetto per il calcio italiano, ma sentiamo cosa ha da dire il presidente dei DAMBROSIANI: 'Gli Atleti di Cristo? che si tengano cosetto, prende solo pali, noi abbiamo Kaio Jorge!'."
      ],
      immagine: "./assets/img/news/gesu.jpg"
    },
    {
      isChecked: false,
      titolo: "Medioli si racconta, ecco perchè ha cambiato socità",
      contenuto: [
        "'Uno scandalo tutto all'italiana!' le dure parole di Medioli contro i vertici del fantacalcio, infatti lo scandalo che lo ha portato alla cessione della società Teamchiappetto ha fatto il giro del mondo.",
        "'Miley Cyrus può tr***giare su una palla demolitrice mentre io sono costretto a vendere la società a 1€, a voi sembra giusto?', il portierone si riferisce al fatto che la lega calcio ha emanato la sentenza definitiva nella quale comandava la vendità immediata del Club Teamchiappetto.",
        "Il motivo di questa sentenza è la netta e chiara oscenità che la vecchia società trasmetteva all'interno del mondo del calcio, un'oscenità che gli organi di vigilanza (fantacalcio.it) non potevano non condannare.",
        "'Sono dispiaciuto per i miei vecchi tifosi, IL CALCIO E' DI TUTTI! Ora però ho davanti a me una nuova sfida, la nuova società è sana e determinata a fare bene, Criscito ci porterà in Champions se fantacalcio.it non ci banna anche questa squadra.'"
      ],
      immagine: "./assets/img/news/myly.jpeg"
    },
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
