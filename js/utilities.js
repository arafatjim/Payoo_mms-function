console.log('utilities.js loaded');
function getInputValueById(id) {
          console.log('getInputValueById called with id: ' + id);
          return document.getElementById(id).value;
          
    
}
function showASectionById(){
          var textValue=document.getElementById(id).innerText;
          var textNumber=parseFloat(textValue);
          return textNumber;
}
function showASectionById(id){
          document.getElementById('add-money-form').classList.add('hidden');
          document.getElementById('cash-out-form').classList.add('hidden');
          document.getElementById('transaction-form').classList.add('hidden');
          document.getElementById(id).classList.remove('hidden');

          
}
