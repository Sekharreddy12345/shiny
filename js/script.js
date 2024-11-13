document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
  
    fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, subject, message })
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('status').innerText = data.message;
    })
    .catch(error => {
      document.getElementById('status').innerText = 'Error sending email.';
    });
  });
  