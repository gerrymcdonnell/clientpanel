import { Injectable } from '@angular/core';

//angularfire module
import {AngularFireDatabase,  FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database-deprecated'

import {Observable} from 'rxjs';
import {Client} from '../models/Client';

@Injectable()
export class ClientService {

  clients:FirebaseListObservable<any[]>;
  client: FirebaseObjectObservable<any>;

  constructor(
    public af:AngularFireDatabase
  ) 
  { 
    this.clients=this.af.list('/clinets') as FirebaseListObservable<Client[]>;
  }

  getClients(){
    return this.clients;
  }

}
