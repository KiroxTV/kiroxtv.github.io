// SKRYPT OD KALKULATORA CO LICZY LITERY				
				function autoResize(element) {
					element.style.height = "auto";
					element.style.height = (element.scrollHeight) + "px";
					updateCharCount(element.value.length);
				}
			
				function updateCharCount(count) {
					var charCount = document.getElementById("charCount");
			
					charCount.innerText = count + "/300";
				}


// Sprawdzanie czy zostal zaznaczony ptaszek-
				function checkTerms() {
					var name = document.getElementById("name").value;
					var email = document.getElementById("email").value;
					var termsChecked = document.getElementById("terms").checked;

					if (name !== "" && email !== "" && !termsChecked) {
						alert("Musisz zaakceptować warunki korzystania z serwisu.");
						return false;
					}

					return true;
				}


// javascript DO CAPTCHA
				window.onload = function() { 
  				var el = document.getElementById('g-recaptcha-response'); 
 				 if (el) { 
    				el.setAttribute('required', 'required'); 
					  } 
				}
			  function onClick(e) {
			    e.preventDefault();
			    grecaptcha.enterprise.ready(async () => {
			      const token = await grecaptcha.enterprise.execute('6LccnG8pAAAAAFfOAITU2Qqju80b5ZIra-onPWs0', {action: 'LOGIN'});
			    });
			  }

              

  
//  SKRYPT OD INFORMACJI (I) PRZY KALKULATORZE
  
  
              // Funkcja tworząca i wyświetlająca popup z informacją
              function showInfoPopup(event, info) {
                  var infoPopup = document.createElement('div');
                  infoPopup.className = 'info-popup';
                  infoPopup.textContent = info;
                  document.body.appendChild(infoPopup);
  
                  // Pozycja popup względem ikony
                  var rect = event.target.getBoundingClientRect();
                  infoPopup.style.top = (rect.top + window.scrollY) + 'px';
                  infoPopup.style.left = (rect.right + window.scrollX + 5) + 'px'; // Dodałem 5 pikseli odstępu
  
                  // Animacja pojawienia
                  setTimeout(function() {
                      infoPopup.style.opacity = '1';
                  }, 50);
  
                  // Znikanie po opuszczeniu ikony
                  event.target.addEventListener('mouseleave', function() {
                      infoPopup.style.opacity = '0';
                      setTimeout(function() {
                          document.body.removeChild(infoPopup);
                      }, 500);
                  });
              }
  
              // Dodanie ikon informacyjnych obok każdego nagłówka
              var labels = document.querySelectorAll('.form-column label');
              labels.forEach(function(label) {
                  var icon = document.createElement('i');
                  icon.className = 'fas fa-info-circle';
                  icon.style.marginLeft = '5px';
                  icon.style.cursor = 'pointer';
                  var labelText = label.textContent.trim();
                  switch (labelText) {
                      case 'Wstaw link do utworów referencyjnych':
                          icon.onmouseenter = function(event) {
                              showInfoPopup(event, 'Jeżeli są utwory, które mają podobne brzmienie do tego, jakie chciałbyś mieć w swoim utworze - podaj tutaj do nich linki.');
                          };
                          label.appendChild(icon);
                          break;
                      case 'Wstaw link do ścieżek':
                          icon.onmouseenter = function(event) {
                              showInfoPopup(event, 'Podaj linka do ścieżek swojego utworu. Akceptuję jedynie ścieżki z niewygasających serwisów tj. Dropbox i Google Drive. Ścieżki muszą być w formacie WAV i zsynchronizowane od 0:00. Dobrze abyś zawarł w ścieżkach pilota (prevkę) swojego utworu. Zobacz FAQ na górze strony!');
                          };
                          label.appendChild(icon);
                          break;
                      case 'Wstaw link do pilota/demo':
                          icon.onmouseenter = function(event) {
                              showInfoPopup(event, 'Wrzuć tutaj link do odsłuchowej wersji utworu.');
                          };
                          label.appendChild(icon);
                          break;
                      case 'Liczba ścieżek w podkładzie':
                          icon.onmouseenter = function(event) {
                              showInfoPopup(event, 'Wybierz w jakim formacie posiadasz podkład.');
                          };
                          label.appendChild(icon);
                          break;
                      case 'Opcja ekspresowa':
                          icon.onmouseenter = function(event) {
                              showInfoPopup(event, 'W ciągu 24 godzin otrzymasz potwierdzenie czy wykonanie mixu ekspresowego jest możliwe. Po opłaceniu - mix zostanie wykonany w ciągu 2 dni roboczych.');
                          };
                          label.appendChild(icon);
                          break;
                  }
              });
  
//   KALKULATOR 

function animateKwota(newValue) {
    var kwotaElement = document.getElementById('kwota');
    var currentValue = 0;
    var step = newValue / 36; // 36 klatek na sekundę (60 * 0.6)
    var currentStep = 0;
    var animation = setInterval(function() {
        currentValue += step;
        kwotaElement.innerText = currentValue.toFixed(0);
        currentStep++;
        if (currentStep >= 36) {
            clearInterval(animation);
        }
    }, 16.67); // Czas trwania animacji (1000 ms / 36 klatek ≈ 27.78 ms)
}

function obliczSume() {
    var suma = 100;

    // Obliczanie sumy i przekazywanie wartości do pól ukrytych
    document.querySelectorAll('#kalkulator-form select').forEach(item => {
        suma += parseFloat(item.value.split(" ")[0]) || 0;
        document.getElementById(item.id + "_value").value = item.value;
    });

    // Ustawianie wartości sumy w polu ukrytym
    document.getElementById('suma_value').value = suma.toFixed(2);

    // Aktualizacja wyświetlanej sumy na stronie
    document.getElementById('kwota').innerText = (isNaN(suma) ? '0' : suma.toFixed(2)).replace(/\.00$/, ''); // Usunięto "PLN"

    // Uruchomienie animacji
    animateKwota(suma);
}

document.querySelectorAll('#kalkulator-form select').forEach(item => {
    item.addEventListener('change', obliczSume);
});

obliczSume(); // Inicjalne obliczenie sumy po załadowaniu strony		

// OPCJE DO WYBORU NA SAMEJ GORZE WYCENY 
 
document.addEventListener("DOMContentLoaded", function () {
    var opcja1Checkbox = document.getElementById("opcja1");
    var opcja2Checkbox = document.getElementById("opcja2");
    var opcja1Content = document.getElementById("opcja1-content");
    var opcja2Content = document.getElementById("opcja2-content");
    var suma = document.getElementById("suma");
    var originalSumaText = suma.innerHTML; // Zapisz oryginalny tekst sumy z uwzględnieniem HTML

    // Zapisz oryginalną wysokość opcji 1
    var opcja1Height = opcja1Content.offsetHeight;

    // Obsługa zmiany wyboru opcji
    opcja1Checkbox.addEventListener("change", function () {
        if (opcja1Checkbox.checked) {
            showElement(opcja2Content);
            showElement(opcja1Content, opcja1Height);
            suma.innerHTML = originalSumaText; // Przywróć oryginalny tekst sumy z uwzględnieniem HTML
            document.getElementById("wycena_indywidualna").value = "NIE"; // Ustaw wartość na "NIE" przy wyborze opcji 1
        }
    });

    opcja2Checkbox.addEventListener("change", function () {
        if (opcja2Checkbox.checked) {
            hideElement(opcja1Content, opcja1Height);
            showElement(opcja2Content);
            suma.textContent = "Wycena indywidualna"; // Zmień tekst sumy na "Wycena indywidualna"
            document.getElementById("wycena_indywidualna").value = "TAK"; // Ustaw wartość na "TAK" przy wyborze opcji 2
        } else { // Dodane blok else
            showElement(opcja1Content, opcja1Height); // Pokaż div opcja1Content
            suma.innerHTML = originalSumaText; // Przywróć oryginalny tekst sumy z uwzględnieniem HTML
            document.getElementById("wycena_indywidualna").value = "NIE"; // Ustaw wartość na "NIE" przy zmianie z opcji 2 na opcję 1
        }
    });

    // Funkcje do płynnego pokazywania/ukrywania elementów
    function hideElement(element, originalHeight) {
        element.style.transition = "height 0.5s ease";
        element.style.height = originalHeight + "px";
        setTimeout(function () {
            element.style.height = "0";
            element.style.overflow = "hidden";
        }, 50); // Dodajemy opóźnienie, aby zmiana wysokości elementu została zastosowana
    }

    function showElement(element, originalHeight) {
        element.style.display = "block";
        element.style.overflow = "hidden";
        element.style.transition = "height 0.5s ease";
        element.style.height = originalHeight + "px";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var opcja1Checkbox = document.getElementById("opcja1");
    var kalkulatorForm = document.getElementById("kalkulator-form");
    var defaultValues = {}; // Przechowujemy domyślne wartości pól formularza

    // Zapisujemy domyślne wartości pól formularza
    kalkulatorForm.querySelectorAll("select").forEach(function(select) {
        defaultValues[select.id] = select.value;
    });

    // Obsługa zmiany wyboru opcji
    opcja1Checkbox.addEventListener("change", function () {
        if (opcja1Checkbox.checked) {
            resetForm(kalkulatorForm);
        }
    });

    // Funkcja resetująca formularz
    function resetForm(form) {
        for (var key in defaultValues) {
            if (defaultValues.hasOwnProperty(key)) {
                form.querySelector("#" + key).value = defaultValues[key]; // Ustawiamy wartość pola formularza na jego domyślną wartość
            }
        }
    }
});
            



