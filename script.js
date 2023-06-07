document.addEventListener("DOMContentLoaded", function(event) {
   
  
    // Code pour le contrôle du relais
    var led1OnButton = document.getElementById('led1-on');
    var led1OffButton = document.getElementById('led1-off');
    var led2OnButton = document.getElementById('led2-on');
    var led2OffButton = document.getElementById('led2-off');
    var rideauouvertButton = document.getElementById('rideau-ouvert');
    var rideaufermeButton = document.getElementById('rideau-ferme');
    var ipAddress = '192.168.1.9';
  
   // Gestionnaires d'événements pour les boutons
led1OnButton.addEventListener('click', function() {
    sendCommand('/allumer1');
  });
  
  led1OffButton.addEventListener('click', function() {
    sendCommand('/eteindre1');
  });
  
  led2OnButton.addEventListener('click', function() {
    sendCommand('/allumer2');
  });
  
  led2OffButton.addEventListener('click', function() {
    sendCommand('/eteindre2');
  }); 
  
  rideauouvertButton.addEventListener('click', function() {
      sendCommand('/ouvrir');
    });
    
    rideaufermeButton.addEventListener('click', function() {
      sendCommand('/fermer');
    });
    
  
  // Fonction pour envoyer une commande au serveur
    function sendCommand(command) {
      fetch('http://' + ipAddress + command)
        .then(function(response) {
          console.log('Commande envoyée : ' + command);
        })
        .catch(function(error) {
          console.log('Erreur : ' + error);
        });
      }    
    })