var tones = [
  ['ā','a'],
  ['á','a'],
  ['ǎ','a'],
  ['à','a'],
  ['ē','e'],
  ['é','e'],
  ['ě','e'],
  ['è','e'],
  ['ō','o'],
  ['ó','o'],
  ['ǒ','o'],
  ['ò','o'],
  ['ī','i'],
  ['í','i'],
  ['ǐ','i'],
  ['ì','i'],
  ['ū','u'],
  ['ú','u'],
  ['ǔ','u'],
  ['ù','u'],
  ['ü','v'],
  ['ǘ','v'],
  ['ǚ','v'],
  ['ǜ','v'],
  ['ń','n'],
  ['ň','n'],
  ['','m']
]

var removeTone = (pinyin) => {
  let result;
  for (let i = 0; i < tones.length; i++){
    result = pinyin.replace(tones[i][0], tones[i][1]);
    console.log(result);
  }
  return result;
}
