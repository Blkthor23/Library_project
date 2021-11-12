function findAuthorById(authors, id) {
  return authors.find((item) => item.id === id)
}

function findBookById(books, id) {
  return books.find((item) => item.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let checkedIn =  books.filter((book) => book.borrows[0].returned === false)
  let checkedOut =  books.filter((book) => book.borrows[0].returned === true)
  return [checkedIn, checkedOut]
  }


function getBorrowersForBook(book, accounts) {
  //must return an array of accounts with the length 10 or less
  // each account object should include the `returned` entry from the corresponding transaction object in the `borrows` array
  let list = [] 
   for(let i = 0; i < book.borrows.length; i++){
    let finder = accounts.find((account) => {
      if(book.borrows[i].id === account.id){
        return account
        
      }
    })
    finder.returned = book.borrows[i].returned
    list.push(finder)
  }

  return list.slice(0, 10)
  }

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
