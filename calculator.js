(function calculateAge(){

   const button = document.querySelector(".button")
   const label = document.querySelectorAll(".label")
   const inputs = document.querySelectorAll("input")
   const errorText = document.querySelectorAll(".error-text")
   let present = new Date ()
   let presentYear = present.getFullYear()

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

     if(err = true){
      yearRes.innerText = "--"
      monthRes.innerText = "--"
      dayRes.innerText = "--"
     }
     
     inputs.forEach((input) => {
      if(input.value === ""){
         input.classList.add("berror", "err")
      }

      
   }) 
      
   })
})()