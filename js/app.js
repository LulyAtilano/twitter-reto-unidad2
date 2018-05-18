// Variables globales
var enterTweet = document.getElementById('enterTweet');

enterTweet.addEventListener('click', function() {
    // Contenido que esta en el textarea
    var firstTweet = document.getElementById('insertTweet').value;
    document.getElementById('insertTweet').value = ' '; // para hacer que se borre el textarea una vez guardado
    
    var container = document.getElementById('containerTweet');

    var saveTweet = document.createElement('p');
    var insertTweet = document.createTextNode(firstTweet);

    // Anidar elementos para que aparezca el tweet en la sección Container Tweet
    saveTweet.appendChild(insertTweet);
    container.appendChild(saveTweet);
});

