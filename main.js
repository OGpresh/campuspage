
 const forms = document.querySelector('#forms')
 const name = document.querySelector('#name')
 const email = document.querySelector('#email')
 const msg = document.querySelector('.msg')

 forms.addEventListener('submit', onSubmit);

 function onSubmit(e) {
     e.preventDefault();

    if(name.value=== '' || email.value=== ''){
       msg.classList.add('error');
       msg.innerHTML = 'please fill all field';
        
        setTimeout(()=> msg.remove(), 3000);
    }   else{
        console.log( 'success')
   }
}