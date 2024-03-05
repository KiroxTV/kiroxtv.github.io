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



window.addEventListener('scroll', function() {
    const nav = document.getElementById('nav');
    if (window.location.pathname === '/faq.html') {
        return; // Nie zmieniaj zachowania przewijania na FAQ.html
    }
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});



// Płynna sekcja przechodzenia między górnym menu //

document.addEventListener('DOMContentLoaded', function() {
    // Znajdź wszystkie odnośniki prowadzące do sekcji na innych stronach
    var links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Zapobiegaj domyślnej akcji kliknięcia
            event.preventDefault();

            // Pobierz identyfikator sekcji, do której ma być przewinięta strona
            var targetId = this.getAttribute('href').substring(1);

            // Sprawdź, czy sekcja istnieje na tej stronie
            var targetElement = document.getElementById(targetId);
            
            // Jeśli sekcja istnieje, przewiń stronę do niej
            if (targetElement) {
                var offsetTop = targetElement.offsetTop - 100; // Przesunięcie o 100 pikseli wyżej niż sekcja
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth',
                    duration: 1000 // Czas trwania animacji w milisekundach (tutaj 1 sekunda)
                });
            } else {
                // Jeśli sekcja nie istnieje, przejdź bez płynnego przewijania
                window.location.href = this.getAttribute('href');
            }
        });
    });
});



// PODŚWIETLANIE NAV

document.addEventListener('DOMContentLoaded', function() {
    // Pobierz wszystkie odnośniki w nawigacji, które nie są logiem
    var navLinks = document.querySelectorAll('#nav ul li:not(.logo) a');

    // Dodaj obserwator zdarzeń do przewijania strony
    window.addEventListener('scroll', function() {
        // Pobierz aktualną pozycję przewijania strony
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Iteruj przez wszystkie odnośniki w nawigacji
        navLinks.forEach(function(link) {
            // Pobierz identyfikator sekcji powiązany z odnośnikiem
            var sectionId = link.getAttribute('href').substring(1);

            // Pobierz sekcję powiązaną z odnośnikiem
            var section = document.getElementById(sectionId);

            // Sprawdź, czy sekcja istnieje i czy jest widoczna na ekranie
            if (section && section.offsetTop - 300 <= currentScroll && section.offsetTop + section.offsetHeight - 200 > currentScroll) {
                // Dodaj klasę active do odnośnika, jeśli sekcja jest widoczna
                link.parentNode.classList.add('active');
            } else {
                // Usuń klasę active z odnośnika, jeśli sekcja nie jest widoczna
                link.parentNode.classList.remove('active');
            }
        });
    });
});



