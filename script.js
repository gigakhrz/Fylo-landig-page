const email = document.getElementById("email");
const submitButton = document.getElementById("submit1")
const result = document.getElementById("result-div")


let mailregex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;


function testmail(x){
    if(mailregex.test(x.value)){
        console.log(true);
        x.classList.add('success')
        x.classList.remove('error')
        result.firstElementChild.style.display = "none"
        result.lastElementChild.style.display = "block"
    }else if(!mailregex.test(x.value)){
        console.log(false);
        x.classList.remove('success')
        x.classList.add('error')
        result.firstElementChild.style.display = "block"
        result.lastElementChild.style.display = "none"
    }
}


submitButton.addEventListener('click',function (event) {
        event.preventDefault();
        testmail(email);
        console.log("clicked");
})

