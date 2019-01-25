import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public nativeAudio:NativeAudio) {

  }
  
  a:boolean=false;

  Reproducir(){
    console.log("Reproduciendo");
    

    this.nativeAudio.preloadSimple('cancion1', 'https://pmulivan.000webhostapp.com/caniones/James%20Brown%20-%20Get%20On%20Up.mp3')
    .then(
      function(msg){console.log("Cargada con exito");},
      function(error){console.log("Error na carga");});

    this.nativeAudio.play('cancion1');
  }

}
