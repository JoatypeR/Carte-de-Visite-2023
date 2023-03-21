const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  if (!name || !email || !message) {
    alert('Veuillez remplir tous les champs obligatoires.');
    return;
  }
  
  const data = {
    name,
    email,
    message
  };
  
  fetch('https://example.com/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(function(response) {
    if (!response.ok) {
      throw new Error('Une erreur est survenue lors de l\'envoi du formulaire.');
    }
    alert('Votre message a été envoyé avec succès.');
    form.reset();
  })
  .catch(function(error) {
    console.error(error);
    alert('Une erreur est survenue lors de l\'envoi du formulaire.');
  });
});