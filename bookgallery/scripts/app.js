let books = [
    {
        name: 'Behavioural Sciences',
        picture: 'images/behavioural.jpg',
        author: 'Parvesh salmi',
        price: 'N3000',
    },
    {
        name: 'Creating the World We wnat to live in',
        picture: 'images/creating-amazon.png',
        author: 'Bridget Grenville-Cleave',
        price: 'N2900',
    },
    {
        name: 'General Psychology',
        picture: 'images/genpsycho.jpg',
        author: 'Gully Baba',
        price: 'N2500',
    },
    {
        name: 'Human Psychology',
        picture: 'images/howardwarren-amazon.jpg',
        author: 'Howard C. Warren',
        price: 'N3500',
    },
    {
        name: 'Emotional Intelligence',
        picture: 'images/goleman.jpg',
        author: 'Daniel Goleman',
        price: 'N4550',
    },
    {
        name: 'Human Psychology',
        picture: 'images/human-amazon.jpg',
        author: 'Sarabjeet Kaur',
        price: 'N3900',
    },
    {
        name: 'Human Behaviour',
        picture: 'images/human.jpg',
        author: 'helen E. Longino',
        price: 'N3200',
    },
    {
        name: 'The Psychology of Money',
        picture: 'images/moneyspycho-amazon.jpg',
        author: 'Morgan Housel',
        price: 'N3500',
    },
    {
        name: 'The Victim',
        picture: 'images/victim.jpg',
        author: 'Alan Jacobson',
        price: 'N2500',
    },
    {
        name: 'Manipulation',
        picture: 'images/ryan.jpg',
        author: 'Ryan Dark',
        price: 'N2900',
    },
    {
        name: 'The Psychology of Money',
        picture: 'images/moneyspycho-amazon.jpg',
        author: 'Morgan Housel',
        price: 'N3500',
    },
    {
        name: 'Emotional Intelligence',
        picture: 'images/goleman.jpg',
        author: 'Daniel Goleman',
        price: 'N4550',
    }
]

let bookGallery = document.getElementById('book-gallery');
let html = "";
books.forEach(e => {
    html += `
    <div class="container col-sm-4 col-md-3 col-lg-3">
                <div class="book-image">
                    <img src="${e.picture}" alt="" class="img-fluid">
                </div>
                <div class="p-2">
                    <h6>Name: ${e.name}</h6>
                    <h6>Author: ${e.author}</h6>
                    <h5 class="text-info">Price: ${e.price}</h5>
                    <div class="d-inline-flex justify-content-center">
                  <button class="btn btn-primary">Add to cart</button>
                    <button class="btn btn-danger ms-2">Buy Now</button>
                    </div>
                </div>
            </div>
    `
    console.log(e)

    bookGallery.innerHTML = html
});