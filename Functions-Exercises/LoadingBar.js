function loadingBar(number){

    let progressBar = ['[','.','.','.','.','.','.','.','.','.','.',']']
    let progressChars = number / 10
    for(let i = 1; i <= progressBar.length-1; i++){

        if(progressChars > 0){
            progressBar[i] = '%'
            progressChars--
        } else {
            break
        }
    } 
    console.log(number == 100 ? 
        `${number}% Complete!\n${progressBar.join('')}` :
        `${number}% ${progressBar.join('')}\nStill loading...`);

}

loadingBar(30)
loadingBar(50)
loadingBar(100)