const add_button = document.querySelector('.addCandyButton'); 
const delete_button = document.querySelector('.addCandyButton'); 
const category_id = document.querySelector('.category_id'); 
const flavor_id = document.querySelector('.flavor_id');

fetchFunction('/candies')
.then((res) =>createCard(res));

add_button.addEventListener('click',()=>{
    window.location.href = "/addCandyForm";
});



category_id.addEventListener('change',()=>{
    if (!category_id.value){
        fetchFunction('/candies')
        .then((res) =>createCard(res));
    }
    fetchFunction(`/oneCat/${category_id.value}`)
.then((res) =>createCard(res));
})

flavor_id.addEventListener('change',()=>{
    if (!flavor_id.value){
        fetchFunction('/candies')
        .then((res) =>createCard(res));
    }
    fetchFunction(`/oneFlav/${flavor_id.value}`)
.then((res) =>createCard(res));
})
