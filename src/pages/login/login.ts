import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { RegistroPage } from '../registro/registro';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username:string="";
  password:string="";

  constructor(public navCtrl: NavController, public navParams: NavParams,public afAuth: AngularFireAuth, public alert:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  IrRegistro(){
    this.navCtrl.push(RegistroPage);
  }

  async Login(){
    const {username, password}=this;
    try{
      const res= await this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(username,password);
      console.log(res);
      this.showAlert("CORRECTO","Bienvenido");
      this.navCtrl.push(HomePage);
    }
    catch(e){
      console.dir(e);
      this.showAlert("ERROR",e.message);
    }
  }

  
  async showAlert(titulo:string, content:string){
    const alert= await this.alert.create({
      title: titulo,
      message: content,
      buttons:["OK"]
    })

    await alert.present();
  }


}
