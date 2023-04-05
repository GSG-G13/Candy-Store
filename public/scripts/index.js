const add_button = document.querySelector('.addCandyButton'); 
const delete_button = document.querySelector('.addCandyButton'); 
const category_id = document.querySelector('.category_id'); 
fetchFunction('/candies')
.then((res) =>createCard(res));

add_button.addEventListener('click',()=>{
    window.location.href = "/addCandyForm";
});

category_id.addEventListener('change',()=>{
    fetchFunction(`/getCandy/${category_id.value}`)
.then((res) =>createCard(res));
})