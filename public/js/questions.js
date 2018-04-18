var questionRepo = {
  level0 : `一`,
  level1 : `二口人入八十儿又七六水天日`,
  level2 : `三干于工个土下上山巾千川广亡已小大太犬卫门王文中子只丰夫丫匕木石`,
  level3 : `火可亏与亿久凡义丸乡乞玉弓也飞叉习丈才寸马刃女勺万半左乐羊不介
父凸另田囚由主兄台旦甲井廿凹古白斗且旧占双兰`,
  level4 : `耳四巴本比尺仇丑歹反方分戈公勾互今亢孔毛内牛匹片洋甘
欠切仇仁卅少什氏手瓦五午勿兮心凶牙以尹引月匀允爪支止斤丹风气氏车美出北书`,
  level5 : `扒本弁汃丙布册叱幻斥丛打代叨电叼叮东对尔犯冯付功瓜归汉号弘
乎卉击饥记加叫节纠句刊叩立龙灭民皿末母目鸟宁奴皮平巧丘去让闪讪申生圣失明
史矢世仕市示术丝司他它叹讨头外未写玄训业叶仪议印永用右幼乍仗召正汁`,
  level6 : `处匆矛死孕讯包必边冬发甩礼器`
};

var getHanzi = (questionRepo_level) => {
  let questions = questionRepo_level.split('');
	console.log(questions);
  let i = Math.floor(Math.random() * questions.length);
  return questions[i];
};
