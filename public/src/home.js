function getTotalBooksCount(books) {
  if (!books) {
    return 0;
  }

  return books.length;
}

function getTotalAccountsCount(accounts) {
    //Used the getTotalBooksCount as a helper function  
    return getTotalBooksCount(accounts)
}

function getBooksBorrowedCount(books) {
  let sum = 0;
  //iterating over the books object
  books.forEach((book) => {
    //creates a constant variable of counter
    const counter = book.borrows.reduce((count, item) => {
      if (item.returned === false) {
        //for each instance adds one to the count
        count += 1;
        return count;
      } else {
        //console.log("or", count)
        return count;
      }
    }, 0);
    sum += counter;
  });
  return sum;
}

function getMostCommonGenres(books) {
  const mapper = books.reduce((count, book) => {
    if (count[book.genre]) {
      count[book.genre] += 1;
    } else {
      count[book.genre] = 1;
    }
    return count;
  }, []);
  const genre = Object.keys(mapper).map((key) => ({
    name: key,
    count: mapper[key],
  }));
  return genre
    .sort((bookA, bookB) => (bookA.count < bookB.count ? 1 : -1))
    .slice(0, 5);
}

function getMostPopularBooks(books) {
  let result = [];
  books.forEach((book) => {
    result.push({ name: book.title, count: book.borrows.length });
  });

  return result
    .sort((bookA, bookB) => (bookA.count < bookB.count ? 1 : -1))
    .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  let sum = 0
  
  for(let author of authors){
      let creators ={
        name: `${author.name.first} ${author.name.last}`,
        count: sum
      }
      for(let book of books){
      if(author.id === book.authorId){
        creators.count += book.borrows.length
        } 
      }
      result.push(creators)
  }
  return result.sort((authorA, authorB) => authorA.count  < authorB.count ? 1:-1).slice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
