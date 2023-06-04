const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 },
  ];
  
  function logTitles(titles) {
    console.log(titles.sort());
  }
  
  // Extract the titles from the book object using the map func
  const titles = books.map(book => book.title);
  
  logTitles(titles);
  
