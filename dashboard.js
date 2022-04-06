const body = document.querySelector('body')
const tbodyAdministradores = document.querySelector('#tbodyAdministradores')
const btnAddUpdate = document.querySelector('#btnAddUpdate')
const inName = document.querySelector('#inName')
const inEmail = document.querySelector('#inEmail')
const inID = document.querySelector('#inID')



body.onload = () => {

   const admins = getAdministradores()
   fillTable(admins);
          
 }
    // Llenar tabla
 function fillTable (admins) {
    let trs = [];
    admins.forEach((a, i) => {
       const tr = createRow(a,i)
        // Agregar fila a trs
        trs.push(tr)

    });
    // Meter trs al tbody
    tbodyAdministradores.append(...trs)

 }
 function clearTable () {
     tbodyAdministradores.innerHTML = ''
 }
 function createRow(a,i){
     // COLUMNA DE NOMBRE
    const tdNombre = document.createElement('td')
    tdNombre.textContent = a.nombre
    // COLUMNA DE CORREO
    const tdCorreo = document.createElement('td')
    tdCorreo.textContent = a.correo
    // COLUMNA DE ID
    const tdId = document.createElement('td')
    tdId.textContent = a.id
    //   ICONO DE BORRAR
    const iDelete = document.createElement('i')
    iDelete.className = 'fa-solid fa-trash'
    const tdDelete = document.createElement('td')
    tdDelete.appendChild(iDelete)
    iDelete.addEventListener('click', () => {
        const isConfirm = confirm('SEGURO QUE DESEA ELIMINAR LOS DATOS DE ESTE ADMINISTRADOR...?')
        if(isConfirm){
            deleteAdministrador(i)
            clearTable()
            fillTable(getAdministradores())
        }
    })
    // ICONO DE ACTUALIZAR
    const iEdit = document.createElement('i')
    iEdit.className = 'fa-solid fa-pen'
    iEdit.addEventListener('click', () => {
        inName.value = a.nombre
        inEmail.value = a.correo
        inID.value = a.id
        btnAddUpdate.textContent = 'ACTUALIZAR'
        btnAddUpdate.onclick = (e) => handerUpdateClick(e,i)
    })
    const tdEdit = document.createElement('td')
    tdEdit.appendChild(iEdit)

    // METER TDS DENTRO DE TR

    const trAdministradores = document.createElement('tr')
    trAdministradores.append(
        tdNombre,
        tdCorreo,
        tdId,
        tdDelete,
        tdEdit
        )
    // Guardar trs
        return trAdministradores
    //tbodyAdministradores.appendChild(trAdministradores)

 }

 // boton de agregar y editar

 btnAddUpdate.onclick = handerAddClick


 function handerAddClick (e){
     const inName = document.querySelector('#inName')
     const inEmail = document.querySelector('#inEmail')
     const inID = document.querySelector('#inID')

     const valueInName = inName.value
     const valueInEmail = inEmail.value
     const valueInID = inID.value
     const i = getAdministradores().length

     const newAdministrador = addAdministrador(valueInName, valueInEmail, valueInID)
     const row = createRow(newAdministrador, i)
     tbodyAdministradores.appendChild(row)
     alert("ADMINISTRADOR REGISTRADO CON EXITO")


     e.preventDefault()


 }

 function handerUpdateClick(e,i){
            const valueInName = inName.value
            const valueInEmail = inEmail.value
            const valueInID = inID.value
            upDateAdministrador(i, valueInName, valueInEmail, valueInID)
            clearTable()
            const administrads = getAdministradores()
            fillTable (administrads)
            inName.value = ''
            inEmail.value = ''
            inID.value = ''
            btnAddUpdate.textContent = 'AGREGAR'
            alert("DATOS DE ADMINISTRADOR ACTUALIZADOS")
            e.preventDefault()
        }