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

  constructor() { }

  getSettings(){
    return this.settings;
  }

}
