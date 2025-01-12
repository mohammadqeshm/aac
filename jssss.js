let form =document.querySelector("form");
let pas1 =document.querySelector(".pas1");
let pas2 =document.querySelector(".pas2");
let em =document.querySelector(".em");
form.addEventListener('submit',
function (e){
e.preventDefault()

})


let emm=em.value.trim()
let pas11=em.value.trim()
let pas22=em.value.trim()
if(emm==''){
em.className='em2'

}
if(emm!==''){
    em.className='em33'
    
    }