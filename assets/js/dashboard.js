let busqueda=document.getElementById("busqueda");

busqueda.addEventListener('submit',(e)=>{
    e.preventDefault();

    let buscador=parseInt(document.getElementById("buscador").value);

    switch(buscador){
        case 52368795:
            Swal.fire({
                title: 'Beatriz Pinzón Solano',
                text: "Usted cuenta con la primera dosis de vacuna (Moderna) con fecha 25/03/2022.",
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Registrar dosis'
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.href="vacunacion.html"
                  
                }
              })
        breack;

        case 1001235478:
            Swal.fire({
                title: 'Nicolas Mora',
                text:'Usted cuenta con la primera dosis de vacuna (Pfizer) con fecha 24/01/2022 y la segunda dosis de vacuna (Pfizer) con fecha 08/03/2022.',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Registrar dosis'
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.href="vacunacion.html"
                  
                }
              })
        breack;

        case 25413574:
            Swal.fire({
                title: 'Armando Mendoza',
                text:'Usted cuenta con el esquema completo ya que tiene la primera dosis de vacuna (Janssen) con fecha 13/08/2021 y la segunda dosis de vacuna (Janssen) con fecha 10/10/2021.',
                icon: 'success',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Registrar'
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.href="pacientes.html"
                  
                }
              })
        breack;

        case 1007203506:
            Swal.fire({
                title: 'Jenny García',
                text:'Usted no cuenta con ninguna dosis de vacunacion, por ello debe registrarse.',
                icon: 'error',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Registrar'
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.href="vacunacion.html"
                  
                }
              })
        breack;
    }
});