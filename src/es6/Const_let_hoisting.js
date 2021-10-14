/*es5*/

// scope
var sum = 0;
for ( var i = 0; i<=5 ; i++){
    sum = sum + i;
}

console.log(sum);
console.log(i) // es5 의 var는 이게 접근이 된다.


// 호이스팅 (  hoisting )
// 선언한 함수와 변수가 해석기가 가장 상단에 있는것처럼 해석
// js 해석기는 코드의 라인 순서와 관계 없이 함수선언식과 변수를 위한 메모리 공간을 먼저 확보 한다
// 따라서 funciton a () 와 var는 코드의 최상단으로 끌여 올려진것 처럼 보인다.

function willBeOveridden(){
    return 10;
}

willBeOveridden(); // 5

function willBeOveridden(){
    return 5;
}


// 함수 선언식 ==> 호이스팅에 해당된다
function sum(){
    return 10+20;
}

//함수 표현식 ==> 표현식은 호이스팅에 해당되지 않는다.
var sum = function(){
    return 10+20;
}
sum();


///////////////////////////////////// 호이스팅 예
var sum = 5;
sum = sum + i; // i가 없지면 호이스팅 때문에 밑에 i가 올라온다

function sumAllNumbers(){
    //
}

var i = 10;

// ==> 호이스팅하면 이렇게 바뀜
// #1함수 선언식과 변수 선언을 hoisting
var sum;
function sumAllNumbers(){

}
var i;
// #2 변수 대입 및 할당
sum = 5;
sum = sum+i;
i = 10;
//////////////////////////////////


// const와 let
// #1 let
let sum =0;
for ( let i = 0; i <=5 ; i++){
    sum = sum+i;
}
console.log(i); // << 접근이 안된다

//#2 const - 객체나 배열의 내부는 변경할 수 있다
const a = 10;
// a = 20; // 에러남
const b = {};
a.num = 10;
console.log(a) // {num : 10}

const c = [];
c.push(20);
console.log(c) // [20]
///////////////////////////////////////////










