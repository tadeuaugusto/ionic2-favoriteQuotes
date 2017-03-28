import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, MenuController } from 'ionic-angular';
import { QuotesService } from '../../providers/quotes-service';
import { SettingsService } from '../../providers/settings-service';
import { Quote } from '../../data/quote.interface';
import { QuotePage } from '../quote/quote';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {

    quotes: Quote[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private quotesService: QuotesService,
    private modalCtrl: ModalController, private menuCtrl: MenuController, private settingsService: SettingsService) {}

  ionViewWillEnter() {
    console.log('ionViewWillEnter FavoritesPage');
    this.quotes = this.quotesService.getFavoriteQuotes();
  }
  
  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    
    modal.onDidDismiss((remove: boolean) => {
        if (remove) {
            this.quotesService.removeQuoteFromFavorites(quote);
            // this.quotes = this.quotesService.getFavoriteQuotes();
            const position = this.quotes.findIndex((quoteEl: Quote) => {
                return quoteEl.id == quote.id;
            });
            this.quotes.splice(position, 1);
        }
        console.log(remove);
    });
    /*
    modal.didLeave.subscribe(
        (remove: boolean) => console.log(remove)
    );
    */
  }
  
  
  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
    const position = this.quotes.findIndex((quoteEl: Quote) => {
        return quoteEl.id == quote.id;
    });
    this.quotes.splice(position, 1);
  }
  
  onOpenMenu() {
    this.menuCtrl.open();
  }

  isAltBackgroud() {
      return this.settingsService.isAltBackground();
  }
  
  getBackground() {
    return this.settingsService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
  }
}
