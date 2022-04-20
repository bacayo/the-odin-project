// Add book button
const addBookBtn = document.querySelector(".submit-form");
// Remove book from the shelf
const removeBook = document.querySelector(".remove-book");

// Getting input for the book info
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read");

//book container
const bookContainer = document.querySelector(".container");

// Store objects into this array
let myLibrary = [];
// Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Add books to Library
function addBookToLibrary() {
  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;
  const read = readInput.checked;

  let newBook = new Book(title, author, pages, read);

  // emptyForm();

  myLibrary.push(newBook);

  formReset();
  updateLibrary();
}

function formReset() {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInput.value = "";
}

function updateLibrary() {
  const container = document.querySelector(".container");
  container.querySelectorAll("div").forEach((n) => n.remove());

  for (let index = 0; index < myLibrary.length; index++) {
    createBook(myLibrary[index]);
  }
}

function createBook(item) {
  //book container
  const div = document.createElement("div");
  div.className = "book";
  bookContainer.appendChild(div);

  //creating title
  const title = document.createElement("p");
  title.className = "book-title";
  div.appendChild(title);
  // title.innerText = item.title;
  title.innerText = `Title: ${item.title}`;

  // creating author
  const author = document.createElement("p");
  author.className = "author-name";
  div.appendChild(author);
  // author.innerText = item.author;
  author.innerText = `Author: ${item.author}`;

  const page = document.createElement("p");
  page.className = "page-number";
  div.appendChild(page);
  // page.innerText = item.pages;
  page.innerText = `Pages: ${item.pages}`;

  // Check Read
  const read = document.createElement("button");
  read.classList = "read-status";
  div.appendChild(read);
  if (item.read == true) {
    read.innerText = "Read";
    read.className = "read-status-read";
  } else {
    read.innerText = "Not Read";
    read.className = "read-status-not-read";
  }

  // create button
  const removeBtn = document.createElement("button");
  removeBtn.classList = "remove-book";
  div.appendChild(removeBtn);
  removeBtn.innerText = "Remove";

  read.addEventListener("click", () => {
    // read.className == "read-status-read"
    if (item.read == true) {
      read.className = "read-status-not-read";
      item.read = false;
      read.innerText = "Not Read";
    } else {
      read.className = "read-status-read";
      item.read = true;
      read.innerText = "Read";
    }
  });

  removeBtn.addEventListener("click", () => {
    div.remove();
    myLibrary.splice(myLibrary.indexOf(item), 1);
  });
}

function emptyForm() {
  var reg = /^-?\d+\.?\d*$/;

  if (titleInput.value == "") {
    alert("Book name cannot be empty");
    return false;
  }
  if (authorInput.value == "") {
    alert("Author name cannot be empty");
    return false;
  }
  if (pagesInput.value == "" || !reg.test(pagesInput.value)) {
    alert("Please enter valid page number");
    return false;
  }
  return true;
}

addBookBtn.addEventListener("click", () => {
  if (emptyForm() == true) {
    addBookToLibrary();
  }
});
