// Selectors
const inputTiempo = document.getElementById('inputTiempo');
const tiempo = document.getElementById('tiempo');
const inputBtn = document.getElementById('inputBtn');
const video = document.getElementById("video");
const bloque = document.getElementById("bloque-1");


//Regex
const contadorRegex = /^[0-9]{1,2}$/;

//Validation
let inputValidation = false;

inputBtn.disabled = true;

//Validacion Regex 

inputTiempo.addEventListener('input', e => {
    inputValidation = contadorRegex.test(e.target.value);
    const info = document.querySelector('.info'); 
   
    if (inputValidation) {
        inputTiempo.classList.add('correcta');
        inputTiempo.classList.remove('incorrecta');
        info.classList.remove('showInfo');
        inputBtn.disabled = false;
    } else {
        inputTiempo.classList.add('incorrecta');
        inputTiempo.classList.remove('correcta');
        info.classList.add('showInfo'); 
        inputBtn.disabled = true; 
    }
});




let tiempoRestante;
let contador;
const temporizador = () => {
        tiempo.classList.remove("quitar");
        tiempo.innerHTML = `${tiempoRestante}s`;
        
        tiempoRestante = tiempoRestante - 1 ;

          if (tiempoRestante < 0){
            clearInterval(contador);
            video.classList.remove("quitar");
            video.play();
            bloque.classList.add("quitar");
            tiempo.classList.add("quitar");
            inputTiempo.disabled = false;
            inputBtn.disabled = false;
           
          }  else if (tiempoRestante > 60){
            alert(`El tiempo limite es de 60s Convirtiendo... `)
            tiempoRestante = 60;
          }
       
};

video.addEventListener("ended", (event) => {
  alert("El video ha terminado. Puedes ingresar un nuevo tiempo.");
  video.classList.add("quitar");
  return location.reload();
});

inputBtn.addEventListener('click', e => {
    e.preventDefault();
    inputBtn.disabled = true;
    inputTiempo.disabled = true;
    tiempoRestante = inputTiempo.value;
    contador = setInterval(temporizador,1000)
});