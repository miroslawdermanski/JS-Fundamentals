function chessBoard(n){

    let html = `<div class="chessboard">\n`;

    for(let row = 0; row < n; row++){

        html += ` <div>\n`
        let colour = row % 2 == 0 ? 'black':'white';

        for(let column = 0; column < n; column++){

            html += `  <span class="${colour}"></span>\n`
            colour = colour == 'white' ?  'black':'white';
        }

        html += ` </div>\n`
    }
    console.log(html +  `</div>`);

}

chessBoard(3)