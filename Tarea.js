

let peleando = true;
let DatosPersonaje = {nombre: "Heroe", vidaMaxima: 100, vidaActual: 100, daño: 110};
let DatosEnemigo = {nombre: "Limo", vidaMaxima: 300, vidaActual: 300, daño: 40};
console.log("Empieza el combate!")
while(peleando === true){

console.log(DatosPersonaje.nombre+" - HP "+ DatosPersonaje.vidaActual+"/"+DatosPersonaje.vidaMaxima );
console.log(DatosEnemigo.nombre+" - HP "+ DatosEnemigo.vidaActual+"/"+DatosEnemigo.vidaMaxima );

console.log(DatosPersonaje.nombre+" deals "+ DatosPersonaje.daño + " to "+DatosEnemigo.nombre);
DatosEnemigo.vidaActual = (DatosEnemigo.vidaActual-DatosPersonaje.daño);

console.log(DatosPersonaje.nombre+" - HP "+ DatosPersonaje.vidaActual+"/"+DatosPersonaje.vidaMaxima );
console.log(DatosEnemigo.nombre+" - HP "+ DatosEnemigo.vidaActual+"/"+DatosEnemigo.vidaMaxima );



if(DatosEnemigo.vidaActual<=0){
    peleando = false;
    console.log(DatosEnemigo.nombre+ " died");


}else{

    if (DatosPersonaje.vidaActual<=0){
        peleando = false;
        console.log(DatosPersonaje.nombre+ " died");
    }else{
        console.log(DatosEnemigo.nombre+" deals "+ DatosEnemigo.daño + " to "+DatosPersonaje.nombre);
    DatosPersonaje.vidaActual = (DatosPersonaje.vidaActual-DatosEnemigo.daño);
    }
    
}








}