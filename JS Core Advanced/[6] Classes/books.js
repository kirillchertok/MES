class Book{
    constructor(title, author, publishedYear){
        this.title = title[0] !== title[0].toUpperCase() ? title[0].toUpperCase() + title.slice(1, title.length) : title
        this.author = author[0] !== author[0].toUpperCase() ? author[0].toUpperCase() + author.slice(1, author.length) : author
        this.publishedYear = publishedYear
    }

    getBookInfo(){
        return `Title: ${this.title}\nAuthor: ${this.author}\nPublished year: ${this.publishedYear}\n`
    }
}

class Ebook extends Book{
    constructor(price, title, author, publishedYear){
        super(title, author, publishedYear)
        this.price = price
    }

    getBookInfo(){
        return super.getBookInfo() + `Price: ${this.price}`
    }
}

const book = new Ebook(100, 'book', 'author', 2025)

console.log(book.getBookInfo())

// Title: book
// Author: author
// Published year: 2025
// Price: 100