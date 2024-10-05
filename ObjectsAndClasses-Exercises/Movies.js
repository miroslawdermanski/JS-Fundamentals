function movies(array){

    let moviesInfo = []
    for(let curCommand of array){

        if(curCommand.includes('addMovie')){

            let movie = curCommand.split('addMovie ')[1]
            let movieObject = {
                name: movie
            }
            moviesInfo.push(movieObject)

        } else if(curCommand.includes('directedBy')){

            let [movieName, directorName] = curCommand.split(' directedBy ')
            
            let movie = moviesInfo.find(folder => folder.name == movieName)
            if(movie){

                movie.director = directorName
            }
        } else if(curCommand.includes('onDate')){

            let [movieName, releaseDate] = curCommand.split(' onDate ')

            let movie = moviesInfo.find(folder => folder.name == movieName)
            if(movie){

                movie.date = releaseDate
            }
        }
    }

    for(let folder of moviesInfo){

        if(Object.keys(folder).length == 3){
            console.log(JSON.stringify(folder))
        }
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'])

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'])