let inputEl = document.querySelector('input');
let btns = document.querySelectorAll('button');
for(let button of btns){
    button.addEventListener('click',function(e){
        let btnText = e.target.innerText;
        console.log(btnText);
        if(btnText == 'AC'){
            inputEl.value = "";
        }
        else if(btnText == '='){
            try{ // Sahi kaam 
                inputEl.value = eval(inputEl.value);
                // console.log(inputEl)
            }
            catch(err){ // kuch galat hua hai
                inputEl.value = "Invalid";
            }   
        }
        else{
            inputEl.value += btnText
        }
    })
}