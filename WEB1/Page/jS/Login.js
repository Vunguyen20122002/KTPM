var regExp = /[a-zA-Z]/g;
var regEm = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
function myN(){
    var x = document.getElementById("inputName").value;
    if(x.length >= 8 && regExp.test(x)){
        document.getElementById("lableName").style.top = '-10px'
        document.getElementById("lableName").style.color = 'rgb(34, 140, 10)'
        document.getElementById("inputName").style.borderBottom = '1px solid rgb(34, 140, 10)'
    }else{
        document.getElementById("lableName").style.color = 'red'
        document.getElementById("lableName").style.top = '-10px'
        // document.getElementById("inputName").style.paddingLeft = '10px'
        document.getElementById("inputName").style.borderBottom = '1px solid red'
    }
}


function myP(){
    var y = document.getElementById("inputPass").value;
    if(y.length >= 6){
        document.getElementById("lablePass").style.top = '-10px'
        document.getElementById("lablePass").style.color = 'rgb(34, 140, 10)'
        document.getElementById("inputPass").style.borderBottom = '1px solid rgb(34, 140, 10)'
    }else{
        document.getElementById("lablePass").style.color = 'red'
        // document.getElementById("inputPass").style.paddingLeft = '10px'
        document.getElementById("inputPass").style.borderBottom = '1px solid red'
    }
}
// 

function myNS(){
    var x = document.getElementById("inputNameS").value;
    if(x.length >= 8 && regExp.test(x)){
        document.getElementById("lableNameS").style.top = '-10px'
        document.getElementById("lableNameS").style.color = 'rgb(34, 140, 10)'
        document.getElementById("inputNameS").style.borderBottom = '1px solid rgb(34, 140, 10)'
    }else{
        document.getElementById("lableNameS").style.color = 'red'
        document.getElementById("lableNameS").style.top = '-10px'
        // document.getElementById("inputNameS").style.paddingLeft = '10px'
        document.getElementById("inputNameS").style.borderBottom = '1px solid red'
    }
}


function myPS(){
    var y = document.getElementById("inputPassS").value;
    if(y.length >= 6){
        document.getElementById("lablePassS").style.top = '-10px'
        document.getElementById("lablePassS").style.color = 'rgb(34, 140, 10)'
        document.getElementById("inputPassS").style.borderBottom = '1px solid rgb(34, 140, 10)'
    }else{
        document.getElementById("lablePassS").style.color = 'red'
        // document.getElementById("inputPassS").style.paddingLeft = '10px'
        document.getElementById("inputPassS").style.borderBottom = '1px solid red'
    }
}

function myES(){
    var z = document.getElementById("inputEmail").value;
    if(z.length != 0 && regEm.test(z)){
        document.getElementById("lableEmail").style.top = '-10px'
        document.getElementById("lableEmail").style.color = 'rgb(34, 140, 10)'
        document.getElementById("inputEmail").style.borderBottom = '1px solid rgb(34, 140, 10)'
    }else{
        document.getElementById("lableEmail").style.color = 'red'
        document.getElementById("lableEmail").style.top = '-10px'
        // document.getElementById("inputEmail").style.paddingLeft = '10px'
        document.getElementById("inputEmail").style.borderBottom = '1px solid red'
    }
}

const LinksignUp = document.querySelector(".linkSignup");
const formLogin = document.querySelector("#formLogin")
const formSignup = document.querySelector("#formSignup");
 
// regBackLogin
const btnBackLoginForm = document.querySelector("#formSignup .ti-arrow-left");
LinksignUp.addEventListener("click", () => {
    formSignup.classList.add("formSignUp-open");
    formLogin.classList.add("formLogin-close");
})
btnBackLoginForm.addEventListener("click", ()=>{
    formSignup.classList.remove("formSignUp-open");
    formLogin.classList.remove("formLogin-close");
})


// Add array list
var EmailSign = document.getElementById("inputEmail");
var NameSign = document.getElementById("inputNameS");
var PassSign = document.getElementById("inputPassS");
var list = []
function addElement(Email, Name, Pass){
    list.push({
        email: Email,
        name: Name,
        pass: Pass
    })
}

// Save localStorage
function saveData(){
    var listSt = JSON.parse(localStorage.getItem("ListTmp"));
    list = [];
    if(listSt != null){
        for(var i = 0; i < listSt.length; i++){
            list.push(listSt[i])
        }
    }
    localStorage.removeItem("ListTmp");
    addElement(EmailSign.value, NameSign.value, PassSign.value);
    localStorage.setItem("ListTmp", JSON.stringify(list));
}



// check data input, after save data and submit form
function submitForm(){
    SignUpF.submit();
    document.getElementById("SignUp-success").classList.remove("SignUp-open")
}
function checkDataSignUp(){
    var EmailSign = document.getElementById("inputEmail").value;
    var NameSign = document.getElementById("inputNameS").value;
    var PassSign = document.getElementById("inputPassS").value;
    if(regEm.test(EmailSign) && regExp.test(NameSign) && NameSign.length >= 8 && PassSign.length >= 6){
        saveData();
        document.getElementById("SignUp-success").classList.add("SignUp-open")
        setTimeout(submitForm, 3000);
    }else{
        return;
    }
}

// check userName, Pass.
function navigation(){
    window.location = "http://127.0.0.1:5500/index.html";
}
function checkUserLogin(){
    var mark = 0;
    var NameLog = document.getElementById("inputName").value;
    var PassLog = document.getElementById("inputPass").value;
    var listTmp = JSON.parse(localStorage.getItem("ListTmp"));
    if(regExp.test(NameLog) && NameLog.length >= 8 && PassLog.length >= 6){
        for(var i = 0; i < listTmp.length; i++){
            if(listTmp[i].name === NameLog && listTmp[i].pass === PassLog){
                mark = 1
                document.getElementById("inputName").value = "";
                document.getElementById("inputPass").value = "";
                setTimeout(navigation, 300);
            }
        }
        if(mark == 0){
            document.getElementById("contentMess").style.display = "block";
        }
    }
}

