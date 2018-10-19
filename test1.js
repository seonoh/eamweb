
function log(msg){
    console.log(msg);
}

// 배열 선언
var fruits = ['apple','banana','orange'];
log("fruits length : "+fruits.length);
// fruits length : 3

//인덱스로 배열의 항목에 접근
var first = fruits[0];
log("first fruits : "+first);
// first fruits : apple

//배열 forEach
fruits.forEach(function(value,index,array){
    log(value+" "+index+" "+array);    
});

//배열 끝에 항목 추가
fruits.push('kiwi');
log(fruits);
// [ 'apple', 'banana', 'orange', 'kiwi' ]

//배열 끝 항목 제거
var lastFruits = fruits.pop();
log(lastFruits);
log(fruits);
// orange
// [ 'apple', 'banana', 'orange' ]

//배열 앞에서부터 항목 제거
var first = fruits.shift();
log(first);
log(fruits);
// apple
// [ 'banana', 'orange' ]

//배열 앞에서부터 항목 추가
fruits.unshift('melon');
log(fruits);
//[ 'melon', 'banana', 'orange' ]

fruits.push('mango');
//[ 'melon', 'banana', 'orange', 'mango' ]


// 배열 안 항목의 인덱스 찾기
var pos = fruits.indexOf('orange');
log(pos);
//2

// 인덱스 위치에 있는 항목 제거
var removedFruit = fruits.splice(pos,1)
log(removedFruit);
log(fruits);
// [ 'orange' ]
// [ 'melon', 'banana', 'mango' ]


// 인덱스 위치에서부터 여러개의 항목 제거하기
var pos = 1, n = 2;

var removedFruits = fruits.splice(pos,n);
log(removedFruits);
log(fruits);
[ 'banana', 'mango' ]
[ 'melon' ]

// 배열 복사
var copyFruits = fruits.slice;
log(copyFruits);





