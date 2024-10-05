function triangleArea(side1, side2, side3){

    let semiParam = 0.5*(side1 + side2 + side3)

    let area = Math.sqrt(semiParam*(semiParam-side1)*(semiParam-side2)*(semiParam-side3))

    console.log(area);
}

triangleArea(2, 3.5, 4)
triangleArea(3, 5.5, 4)