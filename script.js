const libraryUrl = 'https://striveschool-api.herokuapp.com/books';

function getLibrary (){
    fetch(libraryUrl,{})
    .then (response => {
        if (response.ok){
            return response.json();
        }
        else{
            throw new Error ('Errore nella pagina');
        }
    })
    .then((books) => {
        const libRow = document.getElementById('lib');
        books.forEach(book => {
            let newCol = document.createElement('div');
            newCol.classList.add('col', 'col-12','col-md-6','col-lg-3');
  
            newCol.innerHTML = 
            `<div class="card border-0 shadow">
                <img src="${book.img}" class="card-img-top" alt="book picture">
                <div class="card-body d-flex flex-column justify-content-around">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">${book.price + ' €'}</p>
                   <div>
                        <button class="btn btn-primary mb-2 addCart">Compra</button>
                        <button class="btn btn-secondary discard">Scarta</button>
                   </div>
                </div>
            </div>` ;    
            libRow.appendChild(newCol);   

            const btns = document.querySelectorAll('.discard');

            btns.forEach((btn) => {

                const card = btn.closest('.col');

                btn.addEventListener('click', function() {
                    card.classList.add('d-none');
                });
            });
        });
            const addBtn = document.querySelectorAll('.addCart');
            const list = document.querySelector('.list-group');
            
            for (let i = 0; i < addBtn.length; i++) {
                const button = addBtn[i];
            
                button.addEventListener('click', function() {
                    const card = button.closest('.col');
                    const titleCard = card.querySelector('.card-title').textContent;

                    const li = document.createElement('li');
                    li.innerText = titleCard;
                    li.classList.add('list-group-item'); 
                    list.appendChild(li);
                });
            }
            

        
    })
    .catch((error) =>{
        console.log(error);
    })
};

getLibrary();

