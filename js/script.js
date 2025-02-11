document.getElementById('btn-login').addEventListener('click', function(event){
          var inputEmail=document.getElementById('input-email ').value;
          var pin=document.getElementById('login-pin').value;
          console.log(inputEmail);
          console.log(pin);
          window.location.href='./home.html';
          
});