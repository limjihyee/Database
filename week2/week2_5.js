//random 숫자 도출
function generateRandomNumber(min, max) { // 함수 이름 수정
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomnum; // 전역 변수로 무작위 숫자 저장하기 위함
//input 요소에서 사용자가 선택한 숫자 범위 중 무작위 숫자 생성 후 저장

function getchoose(){
    let inputData = document.getElementById("js-range").value;
    randomnum = generateRandomNumber(0, inputData); //선택한 숫자 범위 안에서 무작위 숫자 생성
    return randomnum; // 생성한 숫자 해당 변수에 저장
}

// 사용자가 선택한 숫자와 기계가 선택한 숫자 비교
function compare() {
    document.getElementById("js-result").innerHTML = ""; // 결과 표시 내용 초기화
    var inputnum = document.getElementById("num").value;

    document.getElementById("js-result").innerHTML = `You choose: ${inputnum}, the machine choose: ${randomnum}.`;

    if (randomnum == inputnum) {
        document.getElementById("js-result").innerHTML += '<br>you win!';
    }
    else {
        document.getElementById("js-result").innerHTML += '<br>you Lost!';
    }
}