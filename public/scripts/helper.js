const cardsContainer = document.querySelector('.card_container');
const createCard = (data) => {
  cardsContainer.textContent = '';
  data.forEach((element) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const cover = document.createElement('img');
    cover.classList.add('cover');
    
    cover.setAttribute('src',element.img_url);

    const name = document.createElement('h3');
    name.classList.add('name');
    name.textContent = element.name;

    const quantity = document.createElement('p');
    quantity.classList.add('quantity');
    quantity.textContent ="Available Quantity:" + element.quantity;
    
    const category_name = document.createElement('p');
    category_name.classList.add('category');
    category_name.textContent = element.category_name;

    const flavor_name = document.createElement('p');
    flavor_name.classList.add('flavor');
    flavor_name.textContent = element.flavor_name;

    const delete_button = document.createElement('button');
    delete_button.classList.add('addCandyButton');
    delete_button.classList.add('delete');
    delete_button.setAttribute('type','button');
    delete_button.textContent = 'delete';
    delete_button.addEventListener('click',()=>{
      fetchDelete(`/delete/${element.id}`)
      // window.location.href = "/";
    } 
    
    );
    card.append(cover, name, quantity, category_name, flavor_name,delete_button);

    cardsContainer.append(card);
  });
};
