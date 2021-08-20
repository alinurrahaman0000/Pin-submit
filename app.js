function getPin() {
    const pin = Math.round(Math.random()*10000);
    const pinString =pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}
function generatePin() {
    const pin =getPin();
    document.getElementById('display-pin').value =pin;
}


// calcoletor
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const caleInput = document.getElementById('typed-number');
    if(isNaN(number)){
if(number == 'C'){
    caleInput.value ='';
}

 }
 else{
    const previousNumber = caleInput.value;
    const newNumber = previousNumber + number;
    caleInput.value = newNumber;
 }
});



// submit-Btn...........................
function verifyPin() {
const pin=document.getElementById('display-pin').value;
 const typeNumber = document.getElementById('typed-number').value;


 const succeessMessage = document.getElementById('notify-success');
 const failError = document.getElementById('notify -fail');
 if(pin == typeNumber){

       succeessMessage.style.display = 'block';
     failError.style.display = 'none';
 }
 else{
      failError.style.display = 'block'
      succeessMessage.style.display = 'none';

 }
}