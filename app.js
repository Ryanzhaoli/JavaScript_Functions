console.log("Hello World!\n==========\n");

// Exercise 1 Section

console.log("EXERCISE 1:\n==========\n");
function printOdd(count) {
    for(let i = 1; i<= count; i++ ){
      if(i%2 != 0){
          console.log(i)
      }
    }
  }
   printOdd(100);
  
  


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName , age){
    let sixteenAbove = `Congrats ${userName}, you can drive!`;
    let sixteenBlow = `Sorry ${userName}, but you need to wait until you're 16.`;

    if(age > 16 ){
        console.log(sixteenAbove);
    }else if(age < 16){
        console.log(sixteenBlow);
    }
}
checkAge("Ryan", 27);

//Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function checkQuadrant(x, y){
    switch(true){
        case x > 0 && y > 0: return "Quadrant 1";
        case x < 0 && y > 0: return "Quadrant 2";
        case x > 0 && y < 0: return "Quadrant 3";
        case x < 0 && y < 0: return "Quadrant 4";
        case x == 0 && y != 0: return "x axis ";
        case x != 0 && y == 0: return "y axis";
        default : origin;
    }

}
console.log(checkQuadrant(11 ,1));

console.log("EXERCISE 4:\n==========\n");

function isValidTriangle (a, b, c) {
    return a + b > c || a + c > b || c + b > a;
}
function checkTriangle (a, b, c) {
    let isValid = isValidTriangle(a,b,c);
    if (isValid){
       if(a == b && b == c) {
        return " Quilateral";
       }else if(a == b || b == c || c == a){
        return "Isosceles";
       }else{
        return "Scalene";
       }
    }else{
        return "Not a valid triangle";
    }
}

console.log(checkTriangle(2,3,4));
console.log(checkTriangle(1,2,2));
console.log(checkTriangle(1,1,2));

