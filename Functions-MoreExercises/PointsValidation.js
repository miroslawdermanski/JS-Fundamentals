function pointsValidation(input){

    let x1 = input[0]
    let y1 = input[1]
    let x2 = input[2]
    let y2 = input[3]

    let [point1ToCart, point2ToCart, point1ToPoint2] = calcDistanceBetweenPoints(x1, y1, x2, y2)
    console.log(`{${x1}, ${y1}} to {0, 0} is ${point1ToCart}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${point2ToCart}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${point1ToPoint2}`)

    function calcDistanceBetweenPoints(x1, y1, x2, y2){

        let distPoint1ToCart = Math.sqrt((x1 - 0) ** 2 + (y1 - 0) ** 2)
        let distPoint2ToCart = Math.sqrt((x2 - 0) ** 2 + (y2 - 0) ** 2)
        let distPoint1To2 = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)

        let point1ToCart = Number.isInteger(distPoint1ToCart) ? 'valid': 'invalid'
        let point2ToCart = Number.isInteger(distPoint2ToCart) ? 'valid': 'invalid'
        let point1ToPoint2 = Number.isInteger(distPoint1To2) ? 'valid': 'invalid'

        return [point1ToCart, point2ToCart, point1ToPoint2]
    }
    


}

pointsValidation([3, 0, 0, 4])
pointsValidation([2, 1, 1, 1])