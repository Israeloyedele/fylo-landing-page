const form1 = document.querySelector('#form-1');
const form2 = document.querySelector('#form-2');
const email1 = document.querySelector('#email-1');
const email2 = document.querySelector('#email-2');
const label1 = document.querySelector('#label-1');
const label2 = document.querySelector('#label-2');


form1.addEventListener("submit", function(e){
    
    if (!email1.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        e.preventDefault();
        email1.classList.add('invalid');
        label1.classList.add('invalid');
    } else {
        email1.classList.remove('invalid');
        label1.classList.remove('invalid'); 
    }
     
});

form2.addEventListener("submit", function(e){
    
    if (!email2.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        e.preventDefault();
        email2.classList.add('invalid');
        label2.classList.add('invalid');
    } else {
        email2.classList.remove('invalid');
        label2.classList.remove('invalid'); 
    }
     
});
