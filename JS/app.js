function saludar(persona){
    return "Hola "+persona;    
    
}
function primo(numero){
let contador =0;let resultado="";
for(var i=1;i<=numero;i++){
if(numero%i==0){
contador+=1;    
}
}  
if(contador==2){resultado="El Número : "+numero+" es primo ";}
else{resultado="El numero "+numero+" no es primo;"}  
return resultado;
}
function mensaje(){
 return "hola mundo";   
}
/// exportando las funciones
module.exports={chat:mensaje};