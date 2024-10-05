function bookShelf(array){

    let shelves = {}

    for(let string of array){

        if(string.includes('->')){

            let [shelfID, shelfGenre] = string.split(' -> ')
            if(!shelves.hasOwnProperty(shelfID)){
                shelves[shelfID] = {}
                shelves[shelfID].genre = shelfGenre
                shelves[shelfID].books = []
            }
        } else {
            let [title, info] = string.split(': ')
            let [author, genre] = info.split(', ')
            for(let shelf in shelves){
                if(shelves[shelf].genre == genre){
                    shelves[shelf].books.push({title, author})
                }
            }
        }
    }

    let sortedShelves = Object.entries(shelves)
    .sort((a, b) => b[1].books.length - a[1].books.length)
    sortedShelves.forEach(([id, data]) => {

        console.log(`${id} ${data.genre}: ${data.books.length}`);
        data.books.sort((a, b) => a.title.localeCompare(b.title))
        .forEach(book => {
            console.log(`--> ${book.title}: ${book.author}`);
        })
    })
}

// bookShelf(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', 
//         '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 
//         'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 
//         'Lions and Rats: Gabe Roads, history', '2 -> romance', 
//         'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 
//         'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history'])

bookShelf(['1 -> mystery', '2 -> sci-fi',
        'Child of Silver: Bruce Rich, mystery',
        'Lions and Rats: Gabe Roads, history',
        'Effect of the Void: Shay B, romance',
        'Losing Dreams: Gail Starr, sci-fi',
        'Name of Earth: Jo Bell, sci-fi'])