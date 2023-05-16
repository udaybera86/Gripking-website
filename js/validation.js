let namea = document.getElementById('name')
let emailaddress = document.getElementById('email')
let phonenumber = document.getElementById('phonenum')
let done = 1

function validateForm(){
    if(namea.value == ""){
    document.getElementById('nameerror').innerHTML = 'field req.'
    done = 0
    }else if(namea.value.length < 3){
        document.getElementById('nameerror').innerHTML = '3 req.'
        done = 0
    }
    else{
        document.getElementById('nameerror').innerHTML = ''
        done = 1
    }

    if(emailaddress.value == ""){
        document.getElementById('emailerror').innerHTML = 'field req.'
        done = 0
    }
    else{
        document.getElementById('emailerror').innerHTML = ''
        done = 1
    }

    if(phonenumber.value == ""){
        document.getElementById('phoneerror').innerHTML = 'start with +91'
        done = 0
    }
    else{
        document.getElementById('phoneerror').innerHTML = ''
        done = 1
    }

    if(done){
        return true
    }
    else{
        return false
    }
}