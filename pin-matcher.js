

document.getElementById ('pin-button').addEventListener('click' , function () {
    const getNum = Math.round (Math.random()* 10000) ;
    const fourDigit =  getNum + '' ;
    if (fourDigit.length == 4){
      const pinInput = document.getElementById ('pin-input') ;
       pinInput.value =  fourDigit ;
    }
}) ;
document.getElementById('calc-button').addEventListener('click' , function (event) {
    const num = event.target.innerText ;
    const calcInput = document.getElementById ('calc-input') ;
   if (isNaN (num)){
       if (num == 'C'){
       calcInput.value = '' ;
       }
}
else {
   const prevalue = calcInput.value ; 
   const newvalue = prevalue + num ;
   calcInput.value = newvalue ;
    }
})  ;
document.getElementById ('submit').addEventListener('click' , function (){
    const pinValue = document.getElementById ('pin-input').value ;
    const calcValue = document.getElementById ('calc-input').value ;
    const success =  document.getElementById('success') ;
    const error = document.getElementById ('error') ;
    if (pinValue == calcValue){
      success.style.display = 'block'
      error.style.display =  'none'
    }
    else {
        error.style.display = 'block' ;
        success.style.display = 'none' ;
    }
}) ;
