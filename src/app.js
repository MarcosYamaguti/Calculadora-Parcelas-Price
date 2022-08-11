import { LightningElement, track } from "lwc";

export default class App extends LightningElement {
  
@track Financiado;
@track Entrada;
@track Juros;
@track Tempo;
resultado;


mudouN1(event){
  this.Financiado=Number(event.target.value);
}

mudouN2(event){
  this.Entrada=Number(event.target.value);
}

mudouN3(event){
  this.Juros=Number(event.target.value);
}

mudouN4(event){
  this.Tempo=Number(event.target.value);
}

 UM(){
   this.resultado= (this.Financiado-this.Entrada)*((Math.pow(1+this.Juros,12))*this.Juros)/(Math.pow(1+this.Juros,12)-1);
 }
 CINCO(){
   this.resultado= (this.Financiado-this.Entrada)*((Math.pow(1+this.Juros,60))*this.Juros)/(Math.pow(1+this.Juros,60)-1);
 }
 DEZ(){
   this.resultado= (this.Financiado-this.Entrada)*((Math.pow(1+this.Juros,120))*this.Juros)/(Math.pow(1+this.Juros,120)-1);
 }
 VINTE(){
   this.resultado= (this.Financiado-this.Entrada)*((Math.pow(1+this.Juros,240))*this.Juros)/(Math.pow(1+this.Juros,240)-1);
 }

 TRINTA(){
   this.resultado= (this.Financiado-this.Entrada)*((Math.pow(1+this.Juros,360))*0.01)/(Math.pow(1+this.Juros,360)-1);
 }

 CUSTOMIZADO(){
   this.resultado= (this.Financiado-this.Entrada)*((Math.pow(1+this.Juros,this.Tempo))*0.01)/(Math.pow(1+this.Juros,this.Tempo)-1);
 }


 LIMPA (){
  this.resultado='';
 
}

  }