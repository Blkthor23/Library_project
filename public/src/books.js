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
  //must return an
  
  let result = []
  for (let i = 0; i < 10 && book.borrows.length; i++){
    result.push(findAuthorById(accounts, book.borrows[i].id)
    )
  }
  return result
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
