import { Component, OnInit } from '@angular/core';
import { NewsCardService } from 'src/app/services/newsCard/news-card.service';
import { Card } from 'src/app/tipi/card';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  carte: Card[]= []

  constructor(private newsService: NewsCardService) {
    this.carte =  this.newsService.getAllNews();
  }

  ngOnInit() { }

}
