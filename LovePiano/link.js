const url='https://script.google.com/macros/s/AKfycbwhc2xGuW5VEo8p4FPYwg4_dE6mUuwQnJChjuAsOuk-Cfcnd1WtwlmJOxFGa0AOnrsF/exec';
const myForm = document.querySelector('#myForm');
const myName = document.querySelector('#name');
const myEmail = document.querySelector('#email');
const myMessage = document.querySelector('#message');

/*myName.value="Laurence Svekis";
myEmail.value="gapps*****@wweee.com";
myMessage.value="Hello World";*/
myForm.addEventListener('submit',submitter);

function submitter(e){
    console.log('submitted');
    e.preventDefault();
    let message='';
    /*if(myName.value.length < 5){
        myName.style.borderColor = 'red';
        message += `<br> First name needs to be more than 1 character.`;
    }
    if(myEmail.value.length < 5){
        myEmail.style.borderColor = 'red';
        message += `<br> Last name needs to be more than 1 character.`;
    }*/
     if(message){
        const div = document.createElement('div');
        div.innerHTML = message;
        div.style.color = 'red';
        myForm.append(div);
        setTimeout(()=>{
            div.remove();
            myName.style.borderColor = '';
            myEmail.style.borderColor = '';
        },5000);
    }else{
        const myObj = {
            name:myName.value, 
            email:myEmail.value,
            message:myMessage.value
        };
        addSendMail(myObj);
    }
}
function addSendMail(data){
    console.log(data);    
    fetch(url,{
        method:'POST',
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(json =>{
        console.log(json);
    })
}
function addSendMailGET(data){
    const url1 = url + '?id=100';    
    fetch(url1)
    .then(res=>res.json())
    .then(json =>{
        console.log(json);
    })
}
