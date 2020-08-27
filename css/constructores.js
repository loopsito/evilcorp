 //objeto creado manual
 
 var miTelefono = {
     marca: "Xiaomi",
     modelo: "Redmi",
     version: "8",
     presentacion: function(){
         console.log(`Hola soy un ${this.marca} ${this.modelo} ${this.version}`);
     } 
 };


 //constructor de objetos

 function telefono (marca, modelo, version) {
     this.marca = marca;
     this.modelo = modelo;
     this.version = version;
}

//nuevo objeto con el constructor de objetos

var telefonoNuevo = new telefono("Samsung", "A", "20s");