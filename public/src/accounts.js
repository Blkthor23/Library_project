function findAccountById(accounts, id) {
  return accounts.find((item) => item.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((name, name1) =>
    name.name.last < name1.name.last ? -1 : 1
  );
}

function getTotalNumberOfBorrows(account, books) {
/*takes an object. takes an array of books. returns a number that represents the number of times the account's ID appears in any book's `borrows` array
*/
//sum is saving or place in code 
let sum = 0
    //iterating over the books object
   books.forEach(book => {
     //creates a constant variable of counter
    const counter = (book.borrows.reduce((count, item) => {
      if(account.id === item.id){
        //for each instance adds one to the count
        count += 1
        return count
      }else{
        //console.log("or", count)
        return count
      }
    }, 0))
 sum += counter})
 return sum
}

function getBooksPossessedByAccount(account, books, authors) {
//must return an array of objects
//Books that count are only the ones checked out by the given account 
//the author object is nested inside the book object
return books.reduce((item, book) => {
  if(!book.borrows[0].returned && book.borrows[0].id === account.id){
    book.author = authors.find((author) => {
      if(author.id === book.authorId){
        return item.push(book)
      }
    })
  }
  return item
}, [])
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
