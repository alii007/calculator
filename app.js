 const buttons = document.querySelectorAll("button")

 const display = document.querySelector(".inp")

 buttons.forEach( function(button){
    button.addEventListener("click",(calculate))

 })

 function calculate(e){
    const clickvalue = e.target.value ;
    if (clickvalue === "="){
        if (clickvalue !== "")
        display.value = eval(display.value)
    }
    else if(clickvalue === "C")
    {
        display.value =  ""
    }
    else(display.value += clickvalue)
 }