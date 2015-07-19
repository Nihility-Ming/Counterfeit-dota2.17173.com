﻿/* jQuery function heroAll,this's home page show all hero
	by Biweiming
	2013-11-10 16:05*/
function hero(){
/* define all hero is 2D array,key only is easy number */
var heroAll=[
	['0','死亡骑士'],
	['1','炼金术师'],
	['2','极寒幽魂'],
	['3','敌法师'],
	['4','斧王'],
	['5','祸乱之源'],
	['6','蝙蝠骑士'],
	['7','兽王'],
	['8','嗜血狂魔'],
	['9','赏金猎人'],
	['10','熊猫酒仙'],
	['11','刚背兽'],
	['12','育母蜘蛛'],
	['13','半人马酋长'],
	['14','混沌骑士'],
	['15','圣骑士'],
	['16','骷髅射手'],
	['17','水晶室女'],
	['18','黑暗贤者'],
	['19','巫医'],
	['20','死亡先知'],
	['21','萨尔'],
	['22','末日使者'],
	['23','龙骑士'],
	['24','卓尔游侠'],
	['25','撼地神牛'],
	['26','上古之神'],
	['27','魅惑魔女'],
	['28','谜团'],
	['29','虚空假面'],
	['30','先知'],
	['31','矮人直升机'],
	['32','神灵武士'],
	['33','召唤师'],
	['34','双头龙'],
	['35','剑圣'],
	['36','光之守卫'],
	['37','统领船长'],
	['38','幻影长矛手'],
	['39','巫妖'],
	['40','吃尸鬼'],
	['41','莉娜'],
	['42','恶魔牧师'],
	['43','德鲁伊'],
	['44','月之骑士'],
	['45','狼人'],
	['46','半人猛犸'],
	['47','蛇发女妖'],
	['48','地卜师'],
	['49','月之女祭司'],
	['50','变体精灵'],
	['51','娜迦海妖'],
	['52','死灵法师'],
	['53','影魔'],
	['54','暗夜魔王'],
	['55','地穴刺客'],
	['56','黑曜毁灭者'],
	['57','吃人魔法师'],
	['58','全能骑士'],
	['59','幻影刺客'],
	['60','幻影长矛手'],
	['61','精灵龙'],
	['62','屠夫'],
	['63','死灵龙'],
	['64','痛苦女王'],
	['65','发条地精'],
	['66','闪电幽魂'],
	['67','莱恩'],
	['68','拉比克'],
	['69','沙王'],
	['70','暗影恶魔'],
	['71','暗影萨满'],
	['72','地精工程师'],
	['73','沉默骑士'],
	['74','骷髅王'],
	['75','龙鹰骑士'],
	['76','鱼人守卫'],
	['77','鱼人夜行者'],
	['78','矮人火枪手'],
	['79','幽鬼'],
	['80','裂魂人'],
	['81','风暴之灵'],
	['82','流浪剑客'],
	['83','圣堂刺客'],
	['84','潮汐猎人'],
	['85','地精撕裂者'],
	['86','山岭巨人'],
	['87','树精守卫'],
	['88','巨魔战将'],
	['89','巨牙海民'],
	['90','不朽尸王'],
	['91','熊战士'],
	['92','复仇之魂'],
	['93','剧毒术士'],
	['94','冥界亚龙'],
	['95','寒冰飞龙'],
	['96','术士'],
	['97','地穴编织者'],
	['98','风行者'],
	['99','精灵守卫'],
	['100','暗影牧师'],
	['101','众神之王']
];
var $heroList=$('#heroList'); // show stage
var $heroType=$('.hero-tag ul li a'); // type button
$heroType.click(function(e){
	e.preventDefault();
	var showItems='';// this is empty string,saving only show hero items
	var index=$heroType.index(this);
	switch(index){//judge click which button 
	case 0: // show all hero
		for(var i=0;i<heroAll.length;i++){
		showItems+=('<li><a href="#"><img src="images/default/hero/'+heroAll[i][0]+'.jpg" alt="'+heroAll[i][1]+'" title="'+heroAll[i][1]+'"/><p>'+heroAll[i][1]+'</p></a></li>');
		$heroList.html(showItems);
		}
		break;
	case 1:
		$heroList.html(sortHero([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,85,87,89,91,93,95,97,99,101]));
		break;
	case 2:
		$heroList.html(sortHero([0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100]));
		break;
	case 3:
		$heroList.html(sortHero([66,69,61,25,26,28,35,38,39,45,48,49,47,58,52,53,54,56,58,78,88,89,100]));
		break;
	case 4:
		$heroList.html(sortHero([3,4,7,8,10,40,42,43,88,59,55,77,79,101,31,24,11,12,13]));
		break;
	case 5:
		$heroList.html(sortHero([52,36,78,39,10,58,66,89,99,91,92,93,95,101,22,23,24]));
		break;
	case 6:
		$heroList.html(sortHero([3,2,9,10,11,12,13,14,21,72,78,79,96,63,71,85,86]));
		break;
	case 7:
		$heroList.html(sortHero([81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97]));
		break;
	case 8:
		$heroList.html(sortHero([101,71,72,75,78,79,61,62,63,67,51,52,43,44,52,12,19]));
		break;
	case 9:
		$heroList.html(sortHero([15,13,19,55,56,57,58,59,60,61,62,63,64,65,68,70,71,72]));
		break;
	case 10:
		$heroList.html(sortHero([91,92,93,94,95,96,97,98,99,100,1,2,3,4,5,6,7,8,9,10,11,12]));
		break;
	case 11:
		$heroList.html(sortHero([41,40,39,38,37,36,35,34,33,32,31,30,21,22,23,24,25,26,27]));
		break;
	case 12:
		$heroList.html(sortHero([71,72,79,78,77,76,75,74,73,69,68,67,65,64,63,62,61,60,59,58,57,51]));
		break;
	case 13:
		$heroList.html(sortHero([1,2,9,6,101,100,99,98,97,96,95,88,86,85,84,83,82,81,61,62,69,63,58,52]));
		break;
	case 14:
		$heroList.html(sortHero([101,71,72,75,52,43,44,52,78,79,61,62,63,67,51,12,19,67,65,64]));
		break;
	case 15:
		$heroList.html(sortHero([98,99,100,5,6,7,8,9,91,92,93,94,1,2,3,4,95,96,97,10,11,12]));
		break;
	case 16:
		$heroList.html(sortHero([1,2,9,6,101,99,100,5,97,96,95,88,86,85,84,83,82,81,82,81,61,62,69,63,58,52]));
		break;
	case 17:
		$heroList.html(sortHero([79,61,62,100,99,98,97,96,95,88,86,85,84,83,82,81,61,62,69,63,58,52]));
		break;
	}
	/* change button class */
	$heroType.removeClass('current');
	$(this).addClass('current');
	/* change location text */
	$('a.hero-current-type').text($(this).text());
}).eq(0).trigger('click');
/* sift show hero,parameter is 1D array */
function sortHero(array){
	var str='';
	for(var i=0;i<array.length;i++){
		var val=array[i];
		str+=('<li><a href="#"><img src="images/default/hero/'+heroAll[val][0]+'.jpg" alt="'+heroAll[val][1]+'" title="'+heroAll[val][1]+'"/><p>'+heroAll[val][1]+'</p></a></li>');
	}
	return str;
}
}