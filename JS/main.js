bt = document.getElementsByClassName("btn1")
dateEl = document.getElementById("date")
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let month = months[d.getMonth()];
let day = d.getDay();
let year = d.getFullYear();
let currDate = day + ", " + month + " " + year
dateEl.textContent = currDate

for (var i = 0; i < bt.length; i++) {
  bt[i].onclick = function () {
    console.log(this.innerText)
    this.classList.toggle("btn-danger");
    this.classList.toggle("btn-success");
    confirm();
  }
}




function confirm(){

    absentees = ""
    presentees = ""
    var divPrEl = document.getElementById("present")
    var divAbEl = document.getElementById("absent")
    
    for (var i=0; i < bt.length; i++) {
        if(bt[i].classList.contains("btn-danger")) {
            absentees += bt[i].firstElementChild.innerText + ", "
        }
        else if(bt[i].classList.contains("btn-success")) {
            presentees += bt[i].firstElementChild.innerText + ", "
        }
    }

    divPrEl.textContent=`${presentees}`
    divAbEl.textContent=`${absentees}`

    shareA = document.getElementById("share-a")
    shareA.href="whatsapp://send?text="+ "*"+currDate+"*%0a%0a" + "*Presentees:*%0a" + divPrEl.textContent + "%0a*Absentees:*%0a" +  divAbEl.textContent;
    shareA.setAttribute("data-action","share/whatsapp/share");

}


