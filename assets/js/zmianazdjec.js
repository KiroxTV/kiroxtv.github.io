document.addEventListener("DOMContentLoaded", function() {
    // Pobierz element nagłówka
    var header = document.getElementById('header');

    // Lista z klasami obrazów
    var imageClasses = ['alt1', 'alt2', 'alt3', 'alt4'];

    // Indeks aktualnego obrazu
    var currentImageIndex = 0;

    // Funkcja zmieniająca obraz co jakiś czas
    function changeImage() {
        // Zmień klasę nagłówka na kolejny obraz
        header.className = 'alt' + (currentImageIndex + 1);
        
        // Zwiększ indeks obrazu o 1
        currentImageIndex++;
        
        // Jeśli osiągnięto ostatni obraz, wróć do pierwszego
        if (currentImageIndex >= imageClasses.length) {
            currentImageIndex = 0;
        }    
    }
    
    // Ustaw interwał zmiany obrazu co 5 sekund
    setInterval(changeImage, 5000);
});
