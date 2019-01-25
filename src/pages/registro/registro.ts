import { Component, ComponentFactoryResolver } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  username:string="";
  password:string="";

  constructor(public navCtrl: NavController, public navParams: NavParams,public afAuth: AngularFireAuth, public alert:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  async Registro(){
    const {username, password}=this;
    try{
      const res=await this.afAuth.auth.createUserWithEmailAndPassword(username,password);
      console.log(res);
      this.showAlert("BIENVENIDO","Registrado con exito");
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
