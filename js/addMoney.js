document.getElementById('btn-add-money').addEventListener('click', function(event) {
          event.preventDefault();
          var amount = document.getElementById('add-money').value;
          var balance = document.getElementById('balance').innerText;
          var newBalance = parseFloat(balance) + parseFloat(amount);
          document.getElementById('balance').innerText = newBalance;
          document.getElementById('add-money').value = '';
          document.getElementById('add-money').focus();
          document.getElementById('add-money').placeholder = 'Amount added successfully!';
          setTimeout(function() {
          document.getElementById('add-money').placeholder = 'Enter amount';
          }, 2000);
});