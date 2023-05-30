(function calculateAge(){

   const button = document.querySelector(".button")
   const label = document.querySelectorAll(".label")
   const inputs = document.querySelectorAll("input")
   const errorText = document.querySelectorAll(".error-text")
   

   function subtractDate(yy, mm, dd){
      let currentDate = new Date();
      let providedDate = new Date(yy, mm - 1, dd); // month is zero-based in JavaScript
    
      let diffMilliseconds = currentDate - providedDate;
      let diffSeconds = Math.floor(diffMilliseconds / 1000);
      let diffMinutes = Math.floor(diffSeconds / 60);
      let diffHours = Math.floor(diffMinutes / 60);
      let diffDays = Math.floor(diffHours / 24);
    
      let yearsDiff = Math.floor(diffDays / 365); // Approximate number of years
    
      let currentDateYear = currentDate.getFullYear();
      let providedDateYear = providedDate.getFullYear();
      let monthsDiff = ((currentDateYear - providedDateYear) * 12 + currentDate.getMonth() - providedDate.getMonth()) % 12;
      
      let remainingDays = (diffDays % 365) % 6;
    
      return {
         years: yearsDiff,
         months: monthsDiff,
         days: remainingDays,
       };
     
   }

   button.addEventListener("click", function(){

      let present = new Date ()
      let presentYear = present.getFullYear()



      let day = document.querySelector("#day").value
      let month = document.querySelector("#month").value
      let year = document.querySelector("#year").value
      

      const age = subtractDate(year, month, day)
      let yearRes = document.querySelector(".year-result")
      let monthRes = document.querySelector(".month-result")
      let dayRes = document.querySelector(".day-result")

      yearRes.innerText = age.years
      monthRes.innerText = age.months
      dayRes.innerText = age.days


      let err = false

      inputs.forEach((input) => {
         if(input.value === ""){
            input.classList.add("berror", "err", "empty")
         }
      })

      for (let i = 0; i < inputs.length; i++){
         if (!(parseInt(inputs[i].value))){
            errorText[i].innerText = "Must be a digit"
            inputs[i].classList.add("err", "berror")
         }
      }
   
      if((inputs[0].value < 1) || inputs[0].value > 31){
         errorText[0].innerText = "Must be a valid day"
         inputs[0].classList.add("err", "berror")
      }
   
      if((inputs[1].value < 1) || inputs[1].value > 12){
         errorText[1].innerText = "Must be a valid month"
         inputs[1].classList.add("err", "berror")  
      } 
      
      if(inputs[2].value > presentYear){
         errorText[2].innerText = "Must be in past"
         inputs[2].classList.add("err", "berror")
      }

      for(let i = 0; i < inputs.length; i++){
        if(inputs[i].classList.contains("err")){
         label[i].classList.add("lerror")
         err = true
        }

        if(inputs[i].classList.contains("empty")){
         errorText[i].innerText = "This field is required"
        }
      }

      if (err === true){
         yearRes.innerText = "--"
         monthRes.innerText = "--"
         dayRes.innerText = "--"
      }
      
   })
})()

