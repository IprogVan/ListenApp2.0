import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
import { Proveedor1Provider } from '../../providers/proveedor1/proveedor1';
import { Cancion } from '../../interfaces/cancion.interface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  canciones:Cancion[]=[];
  cancionAnterior:Cancion;

  constructor(public navCtrl: NavController, public nativeAudio:NativeAudio, public proveedor:Proveedor1Provider, public menuCtrl:MenuController) {
    this.proveedor.ObtenerDatos().subscribe(
      (data)=>{
        //se consegue traer o json gardase en data
        for (let index = 0; index < 16; index++) {
          this.canciones.push(data[index]);
        }
      },
      (error)=>{console.dir(error);}
    );
  }

  ReproducirCancion(cancion:Cancion){

    if(cancion.reproduciendo==true){
      this.PausarCancion(cancion);
    }else{
      this.Reproducir(cancion);
    }
  }

  PausarCancion(cancion:Cancion){
    console.log("parando cancion")
    cancion.reproduciendo=false;
    this.nativeAudio.stop('cancion1');
  }

  Reproducir(cancion:Cancion){
    console.log("Reproduciendo");

    if(this.cancionAnterior!=null){
      this.cancionAnterior.reproduciendo=false;
    }

    this.nativeAudio.stop('cancion1');

    this.nativeAudio.preloadSimple('cancion1', cancion.url)
    .then(
      function(msg){console.log("Cargada con exito");},
      function(error){console.log("Error na carga :"+error);});

    this.nativeAudio.play('cancion1');
    cancion.reproduciendo=true;
    this.cancionAnterior=cancion;
  }

  MostrarMenu(){
    console.log("abriendo menu");
    this.menuCtrl.open();
  }

}
