import { Component } from '@angular/core';
import { NavController, NavParams, Toggle } from 'ionic-angular';
import { SettingsService } from '../../providers/settings-service';
/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

    
    constructor(public navCtrl: NavController, public navParams: NavParams, private settingsService: SettingsService) {}


    onToggle(toggle: Toggle) {
        console.log(toggle);
        this.settingsService.setAltBackground(toggle.checked);
    }
    
    checkAltBackground() {
        return this.settingsService.isAltBackground();
    }
}
