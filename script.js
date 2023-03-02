// first input bindings
const email = document.getElementById("email");
const submitButton = document.getElementById("submit1")
const result = document.getElementById("result-div")

// last email input binginds
const email2 = document.getElementById("email2");
const submitButton2 = document.getElementById("submit2")
const result2 = document.getElementById("result-div2")

// email validation code
let mailregex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

// A function that checks email validation,which gives the styles input based on the correctness of the email.
function testmail(x, resultParameter){
    if(mailregex.test(x.value)){
        console.log(true);
        x.classList.add('success')
        x.classList.remove('error')
        resultParameter.firstElementChild.style.display = "none"
        resultParameter.lastElementChild.style.display = "block"
    }else if(!mailregex.test(x.value)){
        console.log(false);
        x.classList.remove('success')
        x.classList.add('error')
        resultParameter.firstElementChild.style.display = "block"
        resultParameter.lastElementChild.style.display = "none"
    }
}

// first input
submitButton.addEventListener('click',function (event) {
        event.preventDefault();
        testmail(email,result);
        console.log("clicked");
})

// lust email input
submitButton2.addEventListener('click',function (event) {
    event.preventDefault();
    testmail(email2,result2);
    console.log("clicked");
})


