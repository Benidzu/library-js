function Book(title,author,description) {
  // the constructor...
 	this.title = title;
	this.author = author;
	this.description = description;
	this.read = false;
}

let book1 = new Book("There There: A novel", "Tommy Orange", "Fierce, angry, funny, heartbreaking—Tommy Orange’s first novel is a wondrous and shattering portrait of an America few of us have ever seen, and it introduces a brilliant new author at the start of a major career. ",);
let book2 = new Book("When Life Gives You Lululemons","Lauren Weisberger", "Welcome to Greenwich, Connecticut, where the lawns and the women are perfectly manicured, the Tito’s and sodas are extra strong, and everyone has something to say about the infamous new neighbor.");

let myLibrary = [];

myLibrary.push(book1);
myLibrary.push(book2);

Book.prototype.changeread = function(){
	if (this.read) {
		this.read = false;
	}
	else {
		this.read = true;
	}
}

let body = document.querySelector("#mainbody");

let render = function(arr) {
	for (key in arr){
		body.innerHTML += 
		'<div class="card">\
			<h1>'+ arr[key].title + "</h1>\
			<h2>"+ arr[key].author + "</h2>\
			<p>"+ arr[key].description +'</p>\
			<input type="button" value="delete" class="btn" data-attribute="'+key+'" onclick="deleteBook(event)"> \
			<input type="button" value="Read" data-attribute="'+key+'" onclick="readstatus(event)"> \
		</div>' 
	}
}

function addBookToLibrary() {
  // do stuff here
  let title = document.getElementById("title").value;
  let author = document.querySelector("#author").value;
  let description = document.querySelector("#description").value;
  let newBook = new Book(title,author,description);
  myLibrary.push(newBook);

  while (body.firstChild){
  	body.removeChild(body.firstChild);
  }
  render(myLibrary);
}

function deleteBook(e) {
	let i = e.target.getAttribute('data-attribute');
	myLibrary.splice(i,1);
	
	while (body.firstChild){
  		body.removeChild(body.firstChild);
  	}
  	render(myLibrary);
}

function readstatus(e) {
	myLibrary[e.target.getAttribute('data-attribute')].changeread();
	if (myLibrary[e.target.getAttribute('data-attribute')].read){
		e.target.value = "Not Read";
	}
	else {
		e.target.value = "Read";
	};
}

render(myLibrary);