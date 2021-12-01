let fullname=document.getElementById("fullname");
let emailname=document.getElementById("email");
let phonenumber=document.getElementById("phonenumber");
let theory=document.getElementById("theory");

function validateInput(){
    console.log("validate input");
    //check fullname is empty
    if(fullname.value.trim()===""){
        onError(fullname,"Full Name is Required");
    }else{
        onSuccess(fullname);
    }
    if(email.value.trim()===""){
        onError(email,"Email Address is Required");
    }else{
        if(!isValidEmail(email.value.trim())){
            onError(email,"Email Address is not vaild");
        }else{
            onSuccess(email);
        }
    }
    if(phonenumber.value.trim()===""){
        onError(phonenumber,"Phone Number is Required");
    }else{
        onSuccess(phonenumber);
    }
    if(theory.value.trim()===""){
        onError(theory,"Your Theory is Required");
    }else{
        onSuccess(theory);
    }
}

function onSuccess(input){
    let parent=input.parentElement;
        let messageEle=parent.querySelector("small");
        messageEle.style.visibility="hidden";
        messageEle.innerText="";
        parent.classList.remove("error");
        parent.classList.add("success");
}

function onError(input,message){
    let parent=input.parentElement;
        let messageEle=parent.querySelector("small");
        messageEle.style.visibility="visible";
        messageEle.innerText=message;
        parent.classList.add("error");
        parent.classList.remove("success");
}

document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault()
    validateInput();
});


function isValidEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
