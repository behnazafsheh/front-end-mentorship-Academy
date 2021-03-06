"use strict";
// calender
const date = new Date();
const renderCalender = ()=>{
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const monthDays = document.querySelector(".days");
      const lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
      const firstDayIndex = date.getDay();
      const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
      const lastDayIndex = new Date(date.getFullYear(), date.getMonth()+1, 0).getDay();
      
      const nextDays = 7 - lastDayIndex -1;
      
      document.querySelector(".dates h1").innerHTML= months[date.getMonth()];
      document.querySelector(".dates p").innerHTML = new Date().toDateString();
      
      let days = "";
      
      for (let x = firstDayIndex; x > 0; x--) {
          days+= `<div class="prev-date">${prevLastDay - x+1}</div>`;
          
      }
      
      for (let i = 1; i <= lastDay; i++) {
          if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
              days+= `<div class="today">${i}</div>`;
          }else{
              days+= `<div>${i}</div>`;
          }
      }
      
      for(let j = 1; j<= nextDays; j++){
          days+= `<div class= "next-date">${j}</div>`;
          monthDays.innerHTML = days;
      }

}


document.querySelector(".prev").addEventListener('click', ()=>{
    date.setMonth(date.getMonth() -1);
    renderCalender();
});
document.querySelector(".next").addEventListener('click', ()=>{
    date.setMonth(date.getMonth() +1);
    renderCalender();

});

renderCalender();


// progress
const progressBox = document.querySelectorAll(".progress-total");

progressBox.forEach(elem => {
    elem.addEventListener('click', () => {
        for (let i = 0; i < progressBox.length; i++) {
            progressBox[i].classList.remove("active");
        }
        elem.classList.add("active");
    })
    
})

// menu
const menuBox = document.querySelectorAll(".dashboard-list__items");
menuBox.forEach(elem => {
    elem.addEventListener('click', () => {
        for (let i = 0; i < menuBox.length; i++) {
            menuBox[i].classList.remove("active-menu");
        }
        elem.classList.add("active-menu");
    })
    
})