var articulos = [
    {nombre: "Leche", costo: 200},
    {nombre: "Naranjas", costo: 50},
    {nombre: "Zanahorias", costo: 460},
    {nombre: "Pasta", costo: 30},
    {nombre: "Jabon", costo: 45},
    {nombre: "Cepillo", costo: 367},
    {nombre: "Carbon", costo: 250},
    {nombre: "Carne", costo: 600},
];

var articulosFlitro = articulos.filter(function(articulo){
    return articulo.costo <= 300;
});

var articulosNombre = articulos.map(function(articulo){
    return articulo.nombre;
});

var articuloBuscar = articulos.find(function(articulo){
    return articulo.nombre === "Leche";
});

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

var  articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 300;
});