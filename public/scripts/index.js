const add_button = document.querySelector('.addCandyButton'); 
const delete_button = document.querySelector('.addCandyButton'); 
const category_id = document.querySelector('.category_id'); 
const flavor_id = document.querySelector('.flavor_id');

fetchFunction('/candies')
.then((res) =>createCard(res));

add_button.addEventListener('click',()=>{
    window.location.href = "/addCandyForm";
});

// category_id.addEventListener('change',()=>{
//     fetchFunction(`/getCandy/${category_id.value}`)
// .then((res) =>createCard(res));
// })

category_id.addEventListener('change',()=>{
    fetchFunction(`/oneCat/${category_id.value}`)
.then((res) =>createCard(res));
})

flavor_id.addEventListener('change',()=>{
    fetchFunction(`/oneFlav/${category_id.value}`)
.then((res) =>createCard(res));
})
