//object 
let data = {
    bookId: 10,
    bookName: "Java",
}
console.log(data.bookId);
// destruct of object 
let { id, name } = data;
console.log(id + "  " + name);
let { bookId: id1 } = data;
let { bookName: name2 } = data;
console.log(id1); 
