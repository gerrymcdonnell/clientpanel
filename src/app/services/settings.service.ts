import { Injectable } from '@angular/core';
import { Settings } from '../models/Settings';

@Injectable()
export class SettingsService {
  settings:Settings = {
    
    allowRegistration:true,
    
    disableBalanceOnAdd:true,
    
    //allow the editing of the balance in edit mode
    disableBalanceOnEdit:false
  }

  constructor() { 
    //if the settings already exist then load them
    if(localStorage.getItem('settings') != null){
      this.settings = JSON.parse(localStorage.getItem('settings'));
    }
  }

  getSettings(){
    return this.settings;
  }

  //save settings to local storage
  changeSettings(settings:Settings){
    localStorage.setItem('settings', JSON.stringify(settings));
  }

}
