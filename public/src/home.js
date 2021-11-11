function getTotalBooksCount(books) {
  if (!books) {
    return 0;
  }

  return books.length;
}

function getTotalAccountsCount(accounts) {
  if (!accounts) {
    return 0;
  }

  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let sum = 0
  //iterating over the books object
 books.forEach(book => {
   //creates a constant variable of counter
  const counter = book.borrows.reduce((count, item) => {
    if(item.returned === false){
      //for each instance adds one to the count
      count += 1
      return count
    }else{
      //console.log("or", count)
      return count
    }
  }, 0)
sum += counter})
return sum
}

function getMostCommonGenres(books) {
  let sum = 0 
  let result = []
  let item = books.forEach(book => {
    const createdObj = books.reduce((acc, book)=>{
      if(acc[book.genre]){
          acc.push({count: acc.length})
      } else{
          acc = {
            name: `${book.genre}`,
          };
      }
      return acc;
    },{})
  })
  console.log(item)
}

function getMostPopularBooks(books) {

}

function getMostPopularAuthors(books, authors) {

}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
