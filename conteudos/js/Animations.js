//Variaveis Get
const titulo = document.getElementById("titulo");
const imagemHacker = document.getElementById("imagemHacker");
const sobre = document.getElementById("sobre");

//Evento Scroll
document.addEventListener("scroll", () => {
    //Animação Titulo
    if(scrollY < 400){
        titulo.classList.add("sumir");
    }else{
        titulo.classList.remove("sumir");
    }

    //Animação Hacker
    if(scrollY < 400){
        imagemHacker.classList.add("transicaoHacker");
    }else{
        imagemHacker.classList.remove("transicaoHacker");
    }

    //Animação Scroll SobreMim
    if(scrollY > 200 && scrollY < 1200){
        sobre.classList.add("sumir");
    }else{
        sobre.classList.remove("sumir");
    }
})