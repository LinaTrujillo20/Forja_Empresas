let formulario=document.getElementById("formulario");

formulario.addEventListener('submit',(e)=>{
   e.preventDefault(); 
   let usuario=document.getElementById("usuario").value;
   let contraseña=document.getElementById("contraseña").value;

   if (usuario=="Admin" && contraseña=="Kuepa2022"){
       window.location.href="dashboard.html";
   }
   else {
       alert("Usuario o contraseña incorrectos por favor intente nuevamente");
   }
});
