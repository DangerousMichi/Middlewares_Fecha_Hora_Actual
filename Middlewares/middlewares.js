//middleware EJEMPLO PROFE
var saludo=(req, res, next)=>{
    console.log("Hola");
    next();
}

//middleware UNO con Hora
var md1=(req, res, next)=>{
    
    const fechaHoraActual = new Date();
    const fecha = fechaHoraActual.toLocaleDateString(); 
    const hora = fechaHoraActual.toLocaleTimeString(); 

    console.log("Hola  Este es el middleware UNO");
    console.log("Fecha: " + fecha );
    console.log("Hora: " + hora );
    
    next();
}


//middleware DOS con Fecha
var md2=(req, res, next)=>{

    const fechaHoraActual = new Date();
    const fecha = fechaHoraActual.toLocaleDateString(); 
    const hora = fechaHoraActual.toLocaleTimeString(); 

    console.log("Hola  Este es el middleware DOS");
    console.log("Fecha: " + fecha );
    console.log("Hora: " + hora );
    next();

}


module.exports={
    saludo,
    md1, 
    md2
}