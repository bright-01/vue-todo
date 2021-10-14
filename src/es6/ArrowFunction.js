// es5 함수 정의 방식
var sum = function (a,b){
    return a+b;
}

//es6의 함수 정의 방식
var sum = (a,b) => {
    return a + b;
}
sum ( 10, 20);


//es5
var arr = ["a", "b", "c"];
arr.forEach(function(value){
    console.log(value);
})

//es6
arr.forEach(value => console.log(value));


var dictionary = {
    word : 100,
    lookup : function(){
        console.log('found');
    } ,
    lookup2(){
        console.log("향상된 객체 리터럴.")
    }
}