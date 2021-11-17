bt = document.getElementsByClassName("btn1")
dateEl = document.getElementById("date")
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const abCountEle = document.getElementById("pr-Count")
const prCountEle = document.getElementById("ab-Count")

const d = new Date();
const month = months[d.getMonth()];
const day = d.getDate();
const year = d.getFullYear();
const currDate = day + ", " + month + " " + year
dateEl.textContent = currDate



for (var i = 0; i < bt.length; i++) {
  bt[i].onclick = function () {

    this.classList.toggle("btn-danger");
    this.classList.toggle("btn-success");
    confirm();
  }
}




function confirm(){
    let abCount = 0;
    let prCount = 0;

    absentees = ""
    presentees = ""
    var divPrEl = document.getElementById("present")
    var divAbEl = document.getElementById("absent")
    
    for (var i=0; i < bt.length; i++) {
        if(bt[i].classList.contains("btn-danger")) {
            absentees += bt[i].firstElementChild.innerText + ", "
            abCount++;
        }
        else if(bt[i].classList.contains("btn-success")) {
            presentees += bt[i].firstElementChild.innerText + ", "
            prCount++;
        }
    }

    abCountEle.textContent = abCount;
    prCountEle.textContent = prCount;

    divPrEl.textContent=`${presentees}`
    divAbEl.textContent=`${absentees}`

    shareA = document.getElementById("share-a")
    shareA.href="whatsapp://send?text="+ "*"+currDate+"*%0a%0a" + `*Presentees: (${prCount} Members)*` + "%0a" + divPrEl.textContent + "%0a%0a" + `*Absentees: (${abCount} Members)*` + "%0a" +  divAbEl.textContent;
    shareA.setAttribute("data-action","share/whatsapp/share");

}

