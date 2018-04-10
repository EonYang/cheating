var quesion, answer;

var _set = (ques) => {
  // let i = Math.floor(Math.random()*qa.length);
  document.getElementById('question').innerHTML = ques;
  answer = cjst.chineseToPinyin(ques);
}

var showResult = () => {
  var input = document.getElementById('input');
  
  var text = input.value == answer ? 'Correct!':'Wrong';
  var result = document.getElementById('result').innerHTML = text;
  setTimeout(()=>{
    document.getElementById('result').innerHTML = ' ';
    input.value = '';
  },3000);
  // console.log(text);
};

_set('天');