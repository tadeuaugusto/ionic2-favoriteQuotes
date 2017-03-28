import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../providers/quotes-service';
/*
  Generated class for the Quotes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit {

    quoteGroup: {category: string, quotes: Quote[], icon: string};
    
    ngOnInit() {
        this.quoteGroup = this.navParams.data;
    }
    
    
    constructor(private navParams: NavParams, private alertCtrl: AlertController,
        private quotesService: QuotesService) {
    
    }

    /*
    ionViewDidLoad() {
        this.quoteGroup = this.navParams.data;
    }
    
    Add elvis operator (?) in template to use this approach!!
    */
    
    onAddToFavorites(selectedQuote: Quote) {
        console.log('OI');
        const alert = this.alertCtrl.create({
            title: 'Adicionar aos Favoritos',
            subTitle: 'Confirmar?',
            message: 'Deseja adicionar este item aos favoritos?',
            buttons: [
            {
                text: 'Sim, confirmar.',
                handler: () => {
                    console.log('Ok');
                    this.quotesService.addQuoteToFavorites(selectedQuote);
                }
            },
            {
                text: 'Não, mudei de idéia!',
                role: 'cancel',
                handler: () => {
                    console.log('Cancelled!!');
                }
            }
            ]
        });
        
        alert.present();
    }
    
    onRemoveFromFavorites(quote: Quote) {
        this.quotesService.removeQuoteFromFavorites(quote);
    }
    
    isFavorite(quote: Quote) {
        return this.quotesService.isQuoteFavorite(quote);
    }

}
