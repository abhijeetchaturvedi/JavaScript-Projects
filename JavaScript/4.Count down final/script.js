const endDate="26 march 2024 12:01:00 AM"
document.getElementById("end-date").innerText=endDate.toUpperCase();
inputs=document.querySelectorAll("input")


function clock(){

   const end = new Date(endDate);
    const now = new Date();
    
   diff=(end-now)/1000;
   inputs[0].value=Math.floor(diff/60/60/24);
   inputs[1].value=Math.floor(diff/60/60)%24;
   inputs[2].value=Math.floor(diff/60)%60;
   inputs[3].value=Math.floor(diff) %60;

}
clock();

setInterval(
    () => {
        clock()
    },
    1000
)