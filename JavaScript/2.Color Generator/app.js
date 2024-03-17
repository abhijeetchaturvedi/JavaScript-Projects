let  num1;
button=document.getElementById("btn")
bg=document.querySelector(".main")
arr=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f",]
button.addEventListener("click",colstring)
function colgen(){


    const num1=Math.floor(Math.random()*16);
    //    return index;
       let code=arr[num1];
        return code;
}


function colstring(){
    let str="#";
    for(i=0;i<=5;i++)
    {
        str=str+colgen();
        
}

// bg.style.backgroundColor="str";
document.querySelector("#color-tag").innerText=str  ;
bg.style.backgroundColor=str;
console.log(str);

return str;
}