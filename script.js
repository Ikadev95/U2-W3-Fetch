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
            let i = 0;
            newCol.innerHTML = 
            `<div class="card">
                <img src="${book.img}" class="card-img-top" alt="book picture">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">${book.price + ' €'}</p>
                    <a href="#" class="btn btn-primary">Scarta</a>
                </div>
            </div>` ;    
            libRow.appendChild(newCol);   
            const btns = document.querySelectorAll('.btn');
            btns.forEach((btn) => {
                const card = btn.parentNode.parentNode.parentNode;
                console.log(card);
                btn.addEventListener('click', function() {
                    card.classList.add('d-none');
                });
            });
        });
    })
    .catch((error) =>{
        console.log(error);
    })
};

getLibrary();

