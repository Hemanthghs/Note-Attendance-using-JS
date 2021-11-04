bt = document.getElementsByClassName("btn")

var divPrEl = document.createElement("div")
divPrEl.setAttribute("class","res")
document.body.append(divPrEl)

var divAbEl = document.createElement("div")
divAbEl.setAttribute("class","res")
document.body.append(divAbEl)
// console.log(bt)

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
    
    for (var i=0; i < bt.length; i++) {
        if(bt[i].classList.contains("btn-danger")) {
            absentees += bt[i].firstElementChild.innerText + ", "
        }
        else if(bt[i].classList.contains("btn-success")) {
            presentees += bt[i].firstElementChild.innerText + ", "
        }
    }

    divPrEl.textContent=`Presentees: ${presentees}`
    divAbEl.textContent=`Absentees: ${absentees}`

}
