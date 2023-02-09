const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";







document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });

      var tablinks = document.getElementsByClassName('tab-links');
          var tabcontents = document.getElementsByClassName('tab-contents');



function navigate(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");

  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");

}

  