import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the Quote page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html'
})
export class QuotePage {

    person: string;
    text: string;

  constructor(public navCtrl: NavController, private navParams: NavParams, private viewCtrl: ViewController) {}


    onClose(remove = false) {
        this.viewCtrl.dismiss(remove);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad QuotePage');
        this.person = this.navParams.get('person');
        this.text = this.navParams.get('text');
    }

}
