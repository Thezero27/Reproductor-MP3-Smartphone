//Declaración variables - arreglos
let albumes = ["img/song1.png", "img/song2.png", "img/song3.png", "img/song4.png", "img/song5.png", "img/song6.png", "img/song7.png"];
let canciones = ["media/song1.mp3", "media/song2.mp3", "media/song3.mp3", "media/song4.mp3", "media/song5.mp3", "media/song6.mp3", "media/song7.mp3"];
let nombres = ["Dance Monkey", "You Can't Change Me", "Sweet Child of Mine", "Nothing Else Matters", "Levitating", "De Musica Ligera", "Believer"];
let artistas = ["Tones and I", "Don Diablo", "Guns'n Roses", "Metallica", "Dua Lipa", "Soda Stereo", "Imagine Dragons"];

var cont = 0;
var reproducir = false;

var audio = document.querySelector("#audio");
audio.setAttribute("src", canciones[cont]);

//Cuando documento este cargado, funciona JQuery
$(document).ready(function () {

    //Cuando se refresca la página, cargar canción 1
    $("#img_alb").attr("src", albumes[cont]);
    $("#nombre").text(nombres[cont]);
    $("#artista").text(artistas[cont]);

    //Estética del botón Play cuando las canciones se reproducen
    function Reproduciendo(){
        $("#play").html("<i class='fas fa-pause fa-3x' style='margin-right: 5px'></i>");
    }

    //Reproducir - Pausar Canción
    $("#play").click( () => { 
        if(reproducir == false){
            Reproducir();
            Reproduciendo();
            reproducir = true;
        }else{
            Pausar();
            $("#play").html("<i class='fas fa-play fa-3x'></i>");
            reproducir = false;
        }
    })

    //Recorrer elementos del arreglo al pasar cada canción
    function RecorrerArray(){
        $("#img_alb").attr("src", albumes[cont]);
        $("#nombre").text(nombres[cont]);
        $("#artista").text(artistas[cont]);
        audio.setAttribute("src", canciones[cont]);
    }

    //Botón de Siguiente
    $("#next").click( () => {
        if(cont <= 6){
            cont++;
            RecorrerArray();
            Reproducir();
            Reproduciendo();

            if(cont==7){
                cont=0;
                RecorrerArray();
                Reproducir();
                Reproduciendo();
            }
        }
    })

    //Botón de Anterior
    $("#prev").click( () => {
        if(cont >= 0){
            cont--;
            RecorrerArray();
            Reproducir();
            Reproduciendo();

            if(cont<0){
                cont=6;
                RecorrerArray();
                Reproducir();
                Reproduciendo();
            }
        }
    })

    //Regular Volúmen de Música
    $("#low").click( ()=> { 
        audio.volume -= 0.1;
    }); 
    $("#high").click( ()=> { 
        audio.volume += 0.1;
    });
         
})//Fin Document Ready

function Reproducir() {
    audio.play();
}

function Pausar() {
    audio.pause();
}

//Quien es Thezero?
var nameAutor = document.getElementById("autor-name-link")
var autor2 = "Miguel Angel Fabian"



nameAutor.onclick = function (){
    //alert(autor2)
    $("#autor-name-link").html("<spanp class='autor-name'>Miguel Angel Fabian</span>")
    nameAutor.onclick = function (){
        $("#autor-name-link").html("<spanp class='autor-name'>Thezero</span>")
        nameAutor.onclick = function (){
            $("#autor-name-link").html("<spanp class='autor-name'>Miguel Angel Fabian</span>")
            nameAutor.onclick = function (){
                $("#autor-name-link").html("<spanp class='autor-name'>Thezero</span>")
                nameAutor.onclick = function (){
                    $("#autor-name-link").html("<spanp class='autor-name'>Ya basta de webadas!</span>")
                } 
            }
        }
    }
}
