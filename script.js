var qa = [{
    q: '好',
    a: 'hao'
  },
  {
    q: '中',
    a:'zhong'
  },
  {
    q:'死',
    a:'si'
  },
  {
    q:'串',
    a:'chuan'
  },
  {
    q:'天',
    a:'tian'
  },
  {
    q:'手',
    a:'shou'
  },
  {
    q:'水',
    a:'shui'
  },
  {
    q:'王',
    a:'wang'
  },
  {
    q:'陈',
    a:'chen'
  },
  {
    q:'晰',
    a:'xi'
  },
]
var quesion = '好', answer = 'hao';

var _set = () => {
  let i = Math.floor(Math.random()*qa.length);
  document.getElementById('question').innerHTML = qa[i].q;
  answer = qa[i].a;
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

_set();