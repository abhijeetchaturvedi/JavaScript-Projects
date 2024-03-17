let input = document.querySelector('#inputbox');
let buttons = document.querySelectorAll('button');
let ans = "";
let arr = Array.from(buttons);
arr.forEach((el) => {
    el.addEventListener('click', (e) => {


        if (e.target.innerHTML == '=') {
            ans = eval(ans);
            input.value = ans;
        }
        else if (e.target.innerHTML == 'AC') {
            ans = "";
            input.value = ans;
        }
        else if (e.target.innerHTML == 'DEL') {
           ans= ans.substring(0, ans.length-1)
            input.value = ans;
        } else {
            console.log(e.target);
            ans = ans + e.target.innerHTML;
            input.value = ans;

        }


    })

})



