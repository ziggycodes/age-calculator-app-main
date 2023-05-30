let button = document.querySelector("#button").addEventListener("click", buttonClick)


function buttonClick(e){
    console.log(e.target.classList)
}

(function error(){
    const label = document.querySelectorAll(".label")
    const inputs = document.querySelectorAll("input")
    const errorText = document.querySelectorAll(".error-text")
 
 
    
 //empty fields error
 button.addEventListener("click", function(){
    inputs.forEach((input) => {
       if(input.value === ""){
          input.classList.add("berror")
       }
    }) 
 
    for (let i = 0; i < inputs.length; i++){
       if (!(parseInt(inputs[i].value))){
          errorText[i].innerText = "Must be a digit"
       }
    }
 
    if((inputs[0].value < 1) || inputs[0].value > 31){
       errorText[0].innerText = "Must be a valid day"  
    }
 
    if((inputs[1].value < 1) || inputs[1].value > 12){
       errorText[1].innerText = "Must be a valid month"  
    }
 
    
 //need to extract present year somehow
 
  
    
    
    for (let i = 0; i < inputs.length; i++){
       if (inputs[i].classList.contains("berror")){
          label[i].classList.add("lerror")
          errorText[i].innerText = "This field is required"
       }
    }
 
    
    
 })
 
 
 
 
 })()
 
 