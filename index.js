

class Book {
    constructor(title,author,isbn){
         this.title = title,
         this.author = author,
         this.isbn = isbn
    }
}

class UI {
    constructor(){

    }
    addBook(BookDetails){
        let form = document.getElementById('book-list');

        let row = document.createElement('tr');
         
        row.innerHTML = `<td> ${BookDetails.title} </td> 
        <td> ${BookDetails.author} </td>
        <td> ${BookDetails.isbn} </td>
        <td> <a href="#" class="delete" >X</a> </td> `;
        
        document.getElementById('book-list').appendChild(row);
    }
    clearField(){
    document.getElementById("title").value = '';
    document.getElementById("author").value = '';
    document.getElementById("isbn").value = '';
    }

}


let formID = document.getElementById("book-form");

formID.addEventListener('submit',newBook);

function newBook (e){

    let x = document.getElementById("title").value;
    let y = document.getElementById("author").value;
    let z = document.getElementById("isbn").value;
   
    let BookDetails = new Book(x,y,z); 

    let ui = new UI();
    ui.addBook(BookDetails);
    
    ui.clearField();

    e.preventDefault();
    
}