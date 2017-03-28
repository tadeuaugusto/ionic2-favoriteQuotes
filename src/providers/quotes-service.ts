import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Quote } from '../data/quote.interface';
/*
  Generated class for the QuotesService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class QuotesService {

    private favoriteQuotes: Quote[] = [];
    
    addQuoteToFavorites(quote: Quote) {
        console.log(this.favoriteQuotes);
        this.favoriteQuotes.push(quote);
    }
    
    removeQuoteFromFavorites(quote: Quote) {
        const position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
            return quoteEl.id == quote.id;
        });
        this.favoriteQuotes.splice(position, 1);
    }
    
    getFavoriteQuotes() {
        return this.favoriteQuotes.slice();
    }

    isQuoteFavorite(quote: Quote) {
        return this.favoriteQuotes.find((quoteEl: Quote) => {
            return quoteEl.id == quote.id;
        });
    }
    

  constructor(public http: Http) {
    console.log('Hello QuotesService Provider');
  }

}
