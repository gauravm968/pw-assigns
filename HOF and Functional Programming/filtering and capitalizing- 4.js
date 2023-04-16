const books = [
    {
        title: "c in depth",
        author: "sk srivastav",
        year: 2012
    },
    {
        title: "Steve jobs",
        author: "walter",
        year: 2001
    },
    {
        title: "Java complete reference",
        author: "james",
        year: 2000
    },
    {
        title: "Fifty shades of grey",
        author: "el james",
        year: 2007
    },
    {
        title: "The hunger game",
        author: "suzanne",
        year: 2004
    },
    {
        title: "Rapidesc computer course",
        author: "ankur hiranandani",
        year: 2016
    }
];

const filteredBooks = books.filter(book =>
    book.year >= 2010 );

let capAuthorName = filteredBooks.map( (book)=>{
    return {
        title: book.title,
        author: book.author.split(' ').map(name => name.toUpperCase()).join(' '),
        year: book.year
    }
});

console.log(capAuthorName);