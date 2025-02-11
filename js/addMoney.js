// Autor: Arafat Jim
document.getElementById('btn-add-money').addEventListener('click', function(event) {
          event.preventDefault();
          var amount = document.getElementById('add-money').value;
          var balance = document.getElementById('balance').innerText;
          var pin = document.getElementById('pin').value;

          if (amount >=0 && pin=='1234' || pin=='1234'|| pin=='1234' || pin=='1111' || pin=='2222' || pin=='3333' || pin=='4444' || pin=='5555' || pin=='6666' || pin=='7777' || pin=='8888' || pin=='9999' || pin=='0000') {
                    var newBalance = parseFloat(balance) + parseFloat(amount);
                    document.getElementById('balance').innerText = newBalance;
                    document.getElementById('add-money').value = '';
                    document.getElementById('add-money').focus();
                    document.getElementById('add-money').placeholder = 'Amount added successfully!';
                    setTimeout(function() {
                    document.getElementById('add-money').placeholder = 'Enter amount';
                    }, 2000);
                    
                    document.getElementById('add-money').focus();
                    document.getElementById('pin').value = '';
                    setTimeout(function() {
                    document.getElementById('add-money').placeholder = 'Enter amount';
                    }, 2000);

                    // show transaction history
                    var history=document.createElement('p');
                    history.innerText=`Added ${amount}TK. Balance: ${newBalance}`;
                    console.log(history);
                    document.getElementById('transaction-container').appendChild(history);
                    
                    if(amount < 0){
                              document.getElementById('add-money').value = '';
                              document.getElementById('add-money').focus();
                              document.getElementById('add-money').placeholder = 'Invalid amount!';
                              setTimeout(function() {
                              document.getElementById('add-money').placeholder = 'Enter amount';
                              }, 2000);
                              console.log('Invalid amount');
                    }
          }
          else {
                    document.getElementById('pin').value = '';
                    document.getElementById('pin').focus();
                    document.getElementById('pin').placeholder = 'Invalid pin!';
                    setTimeout(function() {
                    document.getElementById('pin').placeholder = 'Enter pin';
                    }, 2000);
                    console.log('Invalid pin');
          }
      
});

