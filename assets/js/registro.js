let formulary=document.getElementById("formulary");

formulary.addEventListener('submit', (e)=>{
    e.preventDefault();
    Swal.fire({
        title: 'Su registro fue exitoso',
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar'
    }).then((result) => {
        if (result.isConfirmed) {
          window.location.href="dashboard.html"
          
        }
    });
});