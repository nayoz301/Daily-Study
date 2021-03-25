//03-18-2021 Basic Algorithm 리뷰

문제1

배열을 입력받아 차례대로 배열의 첫 요소와 마지막 요소를 키와 값으로 하는 객체를 리턴해야 합니다.

function transformFirstAndLast(arr) {
  let newArr = {};

  if(arr.length===0){
    return {};
  }

  //배열의 첫요소=키, 마지막 요소=값
  newArr[arr[0]] = arr[arr.length-1]
  return newArr;
}
//전달받은 배열의 첫번째를 



문제2

function computeWhenDouble(interestRate) {
  //원금 * 이자(이자를 년만큼제곱)
  if(interestRate>=100){
    return 1;
  }
  let principal = 100;
  let count = 0
  while(principal<=200){ //while조건문은 true여야 계속 진행 / while문이 돌아가서 원금이 2배 바로전일때 한번 더 돌려서 2배 이상이 되게끔한다.
    principal = principal + principal * interestRate/100;
    count++;
  }
  return count;
}


문제3

//다시 한번 풀기
//풀면서 너무 어지러움

function powerOfTwo(num) {
  if(num===1){
    return true;
  }else if(num%2===1){
    return false;
  }else { //짝수들만 있는 상태
    while(num%2===0){
      num = num/2
    }
    if(num===1){
      return true;
    }
    else{
      return false;
    }
  }
}

문제4

function firstCharacter(str) {
  if(str===''){
    return ''
  }
  let newString = ''
  //각단어 첫글자의 문자열
  let splited_str = str.split(' ');
  for(let i = 0; i < splited_str.length; i++ ){
    newString = newString + splited_str[i][0];
  }
  return newString;
}

문제5

function firstReverse(str) {
  let newStr = str.split('');
  let reverseStr = newStr.reverse();
  let result = reverseStr.join('');
  return result;
}

문제6

function letterCapitalize(str) {
  //0번 인덱스의 글자 / 공백 다음 문자열을 upperCase
  if(str.length===0){
    return '';
  }
  let newStr = str.split(''); //글자 단위로 나눠서 배열에 넣어줌
  newStr[0] = newStr[0].toUpperCase();
  for(let i = 1; i<newStr.length;i++){
    if(newStr[i-1]===' '){
      newStr[i] = newStr[i].toUpperCase();
    }
  }
  return newStr.join('');
  
}


function letterCapitalize(str) {
  //0번 인덱스의 글자 / 공백 다음 문자열을 upperCase
  let splitedStr = str.split(' '); //글자 단위로 나눠서 배열에 넣어줌
  for(let i = 0; i<splitedStr.length;i++){ //[ 'javascript', '', 'is', 'sexy', '' ]
    if(splitedStr[i].length!==0){
      splitedStr[i][0] = splitedStr[i][0].toUpperCase();
    }
  }  
  return splitedStr;
}

문제7

//한번 더 풀어보기
function convertListToObject(arr) {
  let result = {};
  for(let i = 0; i<arr.length; i++){
    let newArr = arr[i]
    if(newArr.length!==0){
      if(!(Object.keys(result).includes(newArr[0]))){
        result[newArr[0]] = newArr[1];
      }
    }
  }
  return result;
}



내 코드 중복처리 실패 헬프데스크 이용
function convertListToObject(arr) {
  let result = {};
  for(let key in arr){
    let newArr = arr[key]
    if(newArr.length!==0){
      result[newArr[0]] = newArr[1];
    }
  }
  return result;
}

양권님 코드
function convertListToObject(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let resultObj = {}
  if (arr.length === 0) {
    return resultObj
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length !== 0) {
        if (!(Object.keys(resultObj).includes(arr[i][0]))) {
          resultObj[arr[i][0]] = arr[i][1]
        }
      }
      console.log(Object.keys(resultObj))
    }
  }
  console.log(resultObj)
  return resultObj
}

문제8

function convertDoubleSpaceToSingle(str) {
  let str_nospace = str.split('  ');
  str_nospace = str_nospace.join(' ');
  return str_nospace;
}

문제9

function ABCheck(str) {
  str = str.toLowerCase();
  for(let i = 0; i<str.length; i++){
    if(str[i]==='a'){
      if(str[i+4]==='b'){
        return true;
      }
    }
    else if(str[i]==='b'){
      if(str[i+4]==='a'){
        return true;
      }
    }
  }
  return false;
}

문제10

function insertDash(str) {
  for(let i = 1 ;  i < str.length ; i++){
   if(Number(str[i-1])%2 === 1 && Number(str[i])%2 === 1){
      str = str.substr(0,i).concat('-').concat(str.substr(i,str.length-1))
    }
  }
  return str;
}

해결 못함 무한의 루프 늪에 빠짐
function insertDash(str) {
  str = str.split('');
  // console.log(str)
  for(let i =0; i<str.length; i++){
    // console.log(str[i])
    if(str[i]%2===1){
      // console.log(str[i],i)
      let front =[];
      let minus = '-'
      let back =[];
      if(str[i+1]%2===1){
      front = str.slice(0,str[i])
      back = str.slice(str[i+1],str.length-1)
      front = front.concat(minus);
      str = front.concat(back);
      console.log(i,i+1)
      
      }
    }
  }
  str = str.join('');
  // console.log(str)
  return str;
}

문제11

function removeExtremes(arr) {
  let maxNum = 0;
  let minNum = 0;
  let newArr = [];
  let elLen = arr.map(function(el){
    return el.length;
  }) // [arr의 엘리먼트 길이로만 이루어진 배열 완성]
  maxNum = Math.max(...elLen);
  minNum = Math.min(...elLen);
  for(let i = arr.length-1; i>=0; i--){
    if(arr[i].length===maxNum){
      arr.splice(i,1)
      break
    }
  }
  for(let i = arr.length-1; i>=0; i--){ //arr.length-2를 안하는 이유는 어차피 10번 포문에서 다 끝나고 16번으로 오면 똑같이 -1이기 떄문ㅇ.
    if(arr[i].length===minNum){
      arr.splice(i,1)
      break
    }
  }
  return arr;
}

문제12

function findBugInApples(arr) {
  let coord = [];
  for(let i = 0; i<arr.length;i++){
    for(let j = 0; j<arr[i].length;j++){
      if(arr[i][j]==='B'){
        coord.push(j);
        coord.unshift(i);
      }
    }
  }
  return coord;
}

문제13

function readVertically(arr) {
  let mixedWord = '';
  let maxLen
  let elLen = arr.map(function(el){
    return el.length;
  })
  maxLen = Math.max(...elLen);

  for(let i = 0; i<maxLen;i++){ //최고로 긴 글자 숫자 구하기
    for(let j=0; j<arr.length;j++){
      if(arr[j][i]===undefined){ //undefined를 먼저 해줘야 미리 짜르고 넘어간다. 추가 하고 undefined를 검사했는데 그러면 이미 추가된 상태라 무용지물
        mixedWord = mixedWord;
      }
      else{
        mixedWord = mixedWord + (arr[j][i]);
      }
    }
  }
  return mixedWord;
}

문제14

function superIncreasing(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let preArr
  let preSum
  for(let i = 1 ; i < arr.length ; i++){
    preArr = arr.slice(0,i)
    preSum = preArr.reduce((acc,cur) => acc+cur)
    console.log(preArr)
    console.log(arr[i])
    if(arr[i] <= preSum){
      return false
    }
  }
  return true
}

이거 고쳐보기 리듀스 이용하는거
function superIncreasing(arr) {
  let reducer = arr.reduce(function(acc,cur){
    acc = acc + cur;
    if(acc<cur){
      return true;
    }
    else {
      return false;
    }
  })
  return reducer;
}

문제15

function modulo(num1, num2) {
  let remainder;
  if(num2===0){
    return 'Error: cannot divide by zero';
  } else {
    if(num1>num2){
      remainder = num1 - num2;
      while(remainder>=num2){
        remainder = remainder - num2;
      }
      return remainder
    }else if(num1=num2){
      return 0;      
    }else{
      return 0;
    }
  }
}

문제16

function isIsogram(str) {
  str = str.toLowerCase();
  for(let i=0;i<str.length;i++){
    for(let j=0;j<str.length;j++){
      if(str[j]===str[i]&&j!==i){
        return false;
      }
    }
  }
  return true;
}

function isIsogram(str) {
  str = str.toLowerCase();
  for(let i=0;i<str.length;i++){
    for(let j=0;j<str.length;j++){
      if(j!==i && str[j]===str[i]){
        return false;
      }
    }
  }
  return true;
}

문제17

function computeSquareRoot(num) {
  //초기값을 설정하여 그거의 제곱이 num과 비슷해질때까지 조금씩 더하며 비교하는 방법
  let ini = 1;
  let sq = 1
  while(num >= sq){
    ini = ini + 0.001;
    sq = ini * ini;
    if(sq>=num){
      return parseFloat(ini.toFixed(2));      
    }
  }
}

문제18

function numberSearch(str) {
  let char = ''
  let num = 0;
  if(str.length===0){
    return 0;
  }
  for(let i =0; i<str.length;i++){
    if(!(isNaN(str[i]))){ //숫자가 아닌것은 다 NaN... 문자포함 등등 다 isNaN
      num = num + Number(str[i]);
    }else{
      char = char + str[i];
    }
  }
  char = char.replace(' ','');
  char = char.length;
  return Math.round(num/char);
}


이건 if(typeof Number(str[i])==='number'){ 이부분이 도저히 안먹음. 
function numberSearch(str) {
  let char = ''
  let num = 0;
  for(let i =0; i<str.length;i++){
    if(typeof Number(str[i])==='number'){
      num = num + Number(str[i]);
    }else if(typeof str[i]==='string'){
      char = char + str[i];
    }
  }
  char = char.replace(' ','');
  char = char.length;
  return parseInt(num/char);
}

문제19

function decryptCaesarCipher(str, secret) {
    //97부터 122까지 26개 알파벳 /
    sercret = secret%26 // 26보다 크면 골치 아프므로 이미 나눠주고 시작
    let subtract = 26 - secret;
    let numArr = []; //글자를 아스키코드로 바꿔서 넣어줄 빈 배열
    let charArr = []; //아스키코드를 글자로 바꿔서 넣어줄 빈 배열
    for(let i=0;i<str.length;i++){ //문자 하나하나를 아스키코드로 변환하고 시크릿 빼서 원래대로 돌려줌.
      if(str.charCodeAt(i)===32){
        numArr.push(str.charCodeAt(i));
      }
      else {
        numArr.push(str.charCodeAt(i)-secret);
      } // console.log(i,numArr);
    }
    for(let j=0;j<numArr.length;j++){
      if(numArr[j]!==32&&numArr[j]<97){
        numArr[j]=numArr[j]+26;
      }
    }
    // console.log(numArr);//여기까지 됨. 그럼 다시 글자로 변환하기
    for(let k=0;k<numArr.length;k++){
      charArr.push(String.fromCharCode([numArr[k]]));
    }
    //console.log(charArr) //여기까지 됨.
    charArr = charArr.join('');
    return charArr;
  }

문제20

function compressString(str) {
    let result = '';
    let n = str[0];
    if(str===''){
      return '';
    }
    for (let i = 1; i < str.length; i++) {
      if (str[i-1] === str[i]) {
        n = n + str[i];
        // console.log(result,i)
        // console.log(n,i)
      }else{ //이번 글자가 저번 글자랑 다른 경우 a s d
        if(n.length>=3){
          result = result + n.length + n[0];
          n = str[i]
        }else if(n.length===2){
          result = result + n[0]+n[1];
          n = str[i];
          //console.log(result)
        }else { //if(n.length===1)
          result = result + n[0];
          // console.log(result,n)
          n = str[i];
        }
        // n = str[i]
      }
    }
    if(n.length>=3){
      result = result + n.length + n[0];
      //console.log(result)
    } 
    else {
      result = result + n;
      //console.log(result)
    }
    // console.log(n.length)
  
    // console.log(result)
    return result;
  }