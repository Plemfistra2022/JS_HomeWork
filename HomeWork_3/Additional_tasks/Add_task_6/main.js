// створити масив книжок (назва, кількість сторінок, автори, жанри).
// знайти найбільшу книжку.
// знайти книжку/ки з найбільшою кількістю жанрів
// знайти книжку/ки з найдовшою назвою
// знайти книжку/ки, які писали 2 автори
// знайти книжку/ки, які писав 1 автор

let books = [
    {
        title: "Війна і мир",
        pages: 1225,
        authors: ["Лев Толстой"],
        genres: ["історичний роман", "класика"]
    },
    {
        title: "Таємниці старого замку",
        pages: 380,
        authors: ["Марія Коваленко", "Олексій Сидоренко"],
        genres: ["художня література", "пригоди"]
    },
    {
        title: "1984",
        pages: 328,
        authors: ["Джордж Орвелл"],
        genres: ["антиутопія", "наукова фантастика"]
    },
    {
        title: "Гаррі Поттер і філософський камінь",
        pages: 309,
        authors: ["Джоан Роулінг"],
        genres: ["фентезі", "пригоди", "художня література"]
    },
    {
        title: "Маленький принц",
        pages: 96,
        authors: ["Антуан де Сент-Екзюпері"],
        genres: ["філософська казка", "дитяча література"]
    },
    {
        title: "Пісня льоду і полум’я: Гра престолів",
        pages: 694,
        authors: ["Джордж Мартін"],
        genres: ["фентезі", "епопея"]
    }
];

let maxpages = 0;
for (let book of books) {
        if (book.pages > maxpages) {
            maxpages = book.pages;
    }
}
for (let a = 0; a < books.length; a++) {
    if (books[a].pages === maxpages){
        console.log("Hайбільшa книжкa: ", books[a].title, maxpages, "сторiнок" ) ;
    }
}

console.log('------------------');

let ganremax = 0
for (let book of books) {
    if (book.genres.length > ganremax) {
        ganremax = book.genres.length;
    }
}
for (let book of books) {
    if (book.genres.length === ganremax) {
        console.log("Книга з найбільшою кількістю жанрів: ", book.title);
    }
}

console.log('------------------');

let longtitle = 0;
for (let book of books) {
    if (book.title.length > longtitle) {
        longtitle = book.title.length;
    }
}
for (let book of books) {
    if (book.title.length === longtitle) {
        console.log("Книга з найдовшою назвою: ", book.title)
    }
}

console.log('------------------');

for (let book of books) {
    if (book.authors.length === 2) {
        console.log(book.title, ' ', book.authors);
    }
}

console.log('------------------');

for (let book of books) {
    if (book.authors.length === 1) {
        console.log(book.title, ' ', book.authors)
    }
}
