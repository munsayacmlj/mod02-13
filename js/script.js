var toggleIcon = document.querySelector('#toggleIcon');
var toggleIcon1 = document.querySelector('#toggleIcon1');
var nav = document.querySelector('header');
toggleIcon.addEventListener('click', function () {
   
    console.log('toggleIcon is working'); /* for debugging/testing */
    
    
    nav.style.display = "none";
    
    var main = document.querySelector('.wrapper');
    main.style.marginLeft = '0';
    toggleIcon.style.left = '0';
    toggleIcon.setAttribute('hidden', 'hidden');    
    toggleIcon1.removeAttribute('hidden');
       
});
  

toggleIcon1.addEventListener('click', function(){
    
    nav.style.display = "block";
    var main = document.querySelector('.wrapper');
    main.style.marginLeft = '20%';
    toggleIcon1.setAttribute('hidden', 'hidden');
    toggleIcon.style.left = '20%';
    toggleIcon.removeAttribute('hidden');
});





