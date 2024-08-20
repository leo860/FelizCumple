let mostrarRegalo = document.getElementById("regalo");
let gatoRegalo = document.getElementById("gatoRegalo");
console.log(mostrarRegalo.style.opacity)
mostrarRegalo.addEventListener("click",()=>{
  console.log("hola mundo");
  mostrarRegalo.style.opacity = 0;
  mostrarRegalo.style.transform = "scale(1.2)"

  if (mostrarRegalo.style.opacity == 0) {
   setTimeout(function(){
    console.log("funciona")
    mostrarRegalo.style.display = "none"
    gatoRegalo.style.position = 'relative'
  }, 2500)
  }
});  
 gatoRegalo.addEventListener("click",()=>{
  console.log("messirve")
  
 })
 var audio = document.querySelector('audio');
audio.volume = 0.2; 