import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//add router module
import {RouterModule,Routes} from '@angular/router';

//forms module
import { FormsModule } from '@angular/forms';

//flsh messages module
import { FlashMessagesModule } from 'angular2-flash-messages';

//angularfire module
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';



//compent imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

//service imports
import {ClientService} from './services/client.service';

//error fix?
/*import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';*/

//routes in app
const appRoutes:Routes=[
  {path:'',component:DashboardComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'add-client',component:AddClientComponent},
  {path:'client/:id',component:ClientDetailsComponent},
  {path:'edit-client/:id',component:EditClientComponent}
];

//firebase credentials from firebase.google
export const fireBaseConfig={
    apiKey: "AIzaSyAdn8w5CQoeWilPufwUylUjVKkdJ7d02WA",
    authDomain: "clientpanel-75ffc.firebaseapp.com",
    databaseURL: "https://clientpanel-75ffc.firebaseio.com",    
    storageBucket: "clientpanel-75ffc.appspot.com",
    messagingSenderId: "700931241916"
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    //router setup, pass in app routes
    RouterModule.forRoot(appRoutes),
    //pass in firebase config settings
    AngularFireModule.initializeApp(fireBaseConfig),

    FormsModule,
    //error fix
    /*HttpModule,HttpClientModule,*/
    FlashMessagesModule


  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
