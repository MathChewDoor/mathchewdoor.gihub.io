document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault();
    var msg = document.getElementById('message');
    msg.textContent = (document.getElementById('email').value && document.getElementById('password').value) 
                      ? 'Logged in!' 
                      : 'Please fill in both fields.';
    msg.style.color = msg.textContent === 'Logged in!' ? 'green' : 'red';
};
