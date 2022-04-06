const administradores = [
    new Administrador('Juan Perez','jperez@ejemplo.com', '2R5T9V'),
    new Administrador('Maucio Peña','mpeña@ejemplo.com','4R6G3H'),
    new Administrador('Jose Silvero','jsilvero@ejemplo.com','5B8K1M'),
    new Administrador('Oscar Montero','omontero@ejemplo.com','2Q9I7X'),
    new Administrador('Paulina Caceres','pcaceres@ejemplo.com','1L3C9U')
];

function getAdministradores() {
    return administradores;
}

function addAdministrador(nombre, correo, id){
    const newAdministrador = new Administrador (nombre, correo, id)
    administradores.push(newAdministrador)
    return newAdministrador
}
function upDateAdministrador (i, nuevonombre, nuevocorreo, nuevoid){
    administradores[i].nombre = nuevonombre
    administradores[i].correo = nuevocorreo
    administradores[i].id = nuevoid

}
function deleteAdministrador(i){
    administradores.splice(i,1)
}