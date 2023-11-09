/*
서울시는 6월 1일부터 교통 혼잡을 막기 위해서 자동차 10부제를 시행한다. 
자동차 10부제는 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행을 금지하는 것이다. 
예를 들어, 자동차 번호의 일의 자리 숫자가 7이면 7일, 17일, 27일에 운행하지 못한다. 
또한, 자동차 번호의 일의 자리 숫자가 0이면 10일, 20일, 30일에 운행하지 못한다.
여러분들은 일일 경찰관이 되어 10부제를 위반하는 자동차의 대수를 세는 봉사활동을 하려고 한다. 
날짜의 일의 자리 숫자가 주어지고 5대의 자동차 번호의 일의 자리 숫자가 주어졌을 때 위반하는 자동차의 대수를 출력하면 된다. 

조건 : 첫 줄에는 날짜의 일의 자리 숫자가 주어지고 두 번째 줄에는 5대의 자동차 번호의 일의 자리 숫자가 주어진다. 
날짜와 자동차의 일의 자리 숫자는 모두 0에서 9까지의 정수 중 하나이다. 

주어진 날짜와 자동차의 일의 자리 숫자를 보고 10부제를 위반하는 차량의 대수를 출력한다.
 */

function solution(day, arr) {
  let answer = 0
  for (let x of arr) {
    // if (String(x).includes(String(day))) answer += 1  난 멍청이야
    if (x % 10 === day) answer += 1 //어떤 숫자든지 10으로 나누면 나머지는 1의 자리
  }
  return answer
}

arr = [25, 23, 11, 47, 53, 17, 33]
console.log(solution(3, arr))
