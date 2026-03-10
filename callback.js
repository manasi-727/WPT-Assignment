const square = n => n * n;
// arrow 
//console.log(square(4));  // 16
const cube = n => n * n * n;

//console.log(cube(4));
function a1(n, callback) {
    console.log(callback(n));//square   cube 
}
a1(3, square); // square 
a1(3, cube);  // Event 