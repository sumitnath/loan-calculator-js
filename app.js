//listening to submit
document.getElementById('loan-form').addEventListener('submit',function(e){
  //hide result
document.getElementById('result').style.display ='none'
  //show loader
  document.getElementById('loading').style.display = 'block'
  setTimeout(calculateResults,2000)
  e.preventDefault();
});
//calculate Results
function calculateResults(){
console.log('calculate...')
// Ui vars
const interest = document.getElementById('interest')
const amount = document.getElementById('amount')
const years = document.getElementById('years')
const monthlyPayment = document.getElementById('monthly-payment')
const totalPayment = document.getElementById('total-payment')
const totalInterest = document.getElementById('total-interest')

const principal = parseFloat(amount.value)
const calculatedInterest = parseFloat(interest.value) /100 /12
const calculatedPayments = parseFloat(years.value) * 12;
//compute monthly payment
const x= Math.pow(1+ calculatedInterest,calculatedPayments);
const monthly = (principal*x*calculatedInterest)/(x-1);

if(isFinite(monthly)){
  monthlyPayment.value = monthly.toFixed(2)
  totalPayment.value= (monthly*calculatedPayments).toFixed(2)
  totalInterest.value =((monthly*calculatedPayments) - principal).toFixed(2)
    //show result
document.getElementById('result').style.display = 'block'
//hide loader
document.getElementById('loading').style.display = 'none'
setTimeout(clearField,5000)
}else{
showError('Please check numbers')
}
  
}
//empty fields
function clearField(){
  amount.value = '';
  interest.value = '';
  years.value ='';
      //hide result
document.getElementById('result').style.display = 'none'
//hide loader
document.getElementById('loading').style.display = 'none'
}


// show error
function showError(error){
    //hide result
document.getElementById('result').style.display = 'none'
//hide loader
document.getElementById('loading').style.display = 'none'
  // create a div
  const errorDiv = document.createElement('div');
  errorDiv.className = 'alert alert-danger'
  // get elements
  const card = document.querySelector('.card')
  const heading = document.querySelector('.heading')
  //create text node and append to div
  errorDiv.appendChild(document.createTextNode(error))
  // insert error above heading
card.insertBefore(errorDiv,heading)
setTimeout(clearError,2000)
}
//clear error
function clearError(){
  document.querySelector('.alert').remove();
}
