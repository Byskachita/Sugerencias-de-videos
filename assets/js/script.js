// IIFE Module Pattern
const videoModule = (function() {
    // Función privada
    function loadVideo(url, id) {
        const iframe = document.getElementById(id);
        if (iframe) {
            iframe.setAttribute("src", url);
        }
    }
    
    // Función pública
    return {
        setVideo: function(url, id) {
            loadVideo(url, id);
        }
    };
})();

// Clase padre Multimedia
class Multimedia {
    constructor(url) {
        // Closure para proteger el atributo url
        let _url = url;
        
        this.getUrl = function() {
            return _url;
        };
    }
    
    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    }
}

// Clase hija Reproductor
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;
    }
    
    playMultimedia() {
        videoModule.setVideo(this.getUrl(), this.id);
    }
    
    setInicio(tiempo) {
        const urlConTiempo = `${this.getUrl()}?start=${tiempo}`;
        videoModule.setVideo(urlConTiempo, this.id);
    }
}

// Instancias de Reproductor
const musica = new Reproductor("https://www.youtube.com/embed/pZTJBViOoik?si=5OCCPa6y6oC1LuTT", "musica");
const pelicula = new Reproductor("https://www.youtube.com/embed/5PSNL1qE6VY", "peliculas");
const serie = new Reproductor("https://www.youtube.com/embed/uPOONJlXRr4?si=y3EgZuVKlfHU97Cv", "series");

// Invocación del método playMultimedia para mostrar los videos
musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();

// Utilizar el método setInicio para modificar el tiempo de inicio en alguna instancia
musica.setInicio(60); // Modifica el inicio del video de música a 60 segundos
