document.addEventListener('DOMContentLoaded', () => {
    const timelineData = [
        { year: 1881, event: "Albus Dumbledore is born" },
        { year: 1926, event: "Tom Riddle (Lord Voldemort) is born" },
        { year: 1980, event: "Harry Potter is born" },
        { year: 1991, event: "Harry Potter begins at Hogwarts" },
        { year: 1998, event: "Battle of Hogwarts, Voldemort is defeated" }
    ];

    const booksData = [
        { title: "Philosopher's Stone", year: 1997 },
        { title: "Chamber of Secrets", year: 1998 },
        { title: "Prisoner of Azkaban", year: 1999 },
        { title: "Goblet of Fire", year: 2000 },
        { title: "Order of the Phoenix", year: 2003 },
        { title: "Half-Blood Prince", year: 2005 },
        { title: "Deathly Hallows", year: 2007 }
    ];

    const charactersData = [
        { name: "Harry Potter", description: "The Boy Who Lived" },
        { name: "Hermione Granger", description: "Brightest witch of her age" },
        { name: "Ron Weasley", description: "Harry's loyal best friend" },
        { name: "Albus Dumbledore", description: "Headmaster of Hogwarts" },
        { name: "Lord Voldemort", description: "The Dark Lord" }
    ];

    function populateTimeline() {
        const container = document.querySelector('.timeline-container');
        timelineData.forEach(item => {
            const div = document.createElement('div');
            div.className = 'timeline-item';
            div.innerHTML = `<h3>${item.year}</h3><p>${item.event}</p>`;
            container.appendChild(div);
        });
    }

    function populateBooks() {
        const container = document.querySelector('.book-grid');
        booksData.forEach(book => {
            const div = document.createElement('div');
            div.className = 'book-item';
            div.innerHTML = `<h3>${book.title}</h3><p>Published: ${book.year}</p>`;
            container.appendChild(div);
        });
    }

    function populateCharacters() {
        const container = document.querySelector('.character-grid');
        charactersData.forEach(character => {
            const div = document.createElement('div');
            div.className = 'character-item';
            div.innerHTML = `<h3>${character.name}</h3><p>${character.description}</p>`;
            container.appendChild(div);
        });
    }

    populateTimeline();
    populateBooks();
    populateCharacters();
});

