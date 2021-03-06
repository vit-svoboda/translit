(function(){
	function assert(expected,actual,message){
		if(expected !== actual){
			console.error(message);
		}
	}

	test_dict = {
		"c’ile" : "цїле",
		"kur’atko" : "курятко",
		"klynec’" : "клинець",
		"s’a" : "ся",
		"mis’ac’" : "місяць",
		"znajuť" : "знають",
		"ŷ": "ы",
		"štos’ka": "штоська",
		"jes’" : "єсь",
		"virnŷj" : "вірный",
		"Tr’om" : "Трём",
		"muľar’iv" : "мулярїв",
		"džmur’klo" : "джмурькло",
		"Teper’" : "Теперь",
		"vz’ala" : "взяла",
		"Voz’" : "Возь",
		"gazdŷňa" : "ґаздыня",
		"ľis’i" : "лїсї",
		"C’ilŷj" : "Цїлый",
		"ďity" : "дїти",
		"jich" : "їх",
		"str’is’i" : "стрїсї",
		"noz’i" : "нозї",
		"stojiť" : "стоїть",
		"merenďu" : "мерендю",
		"ňej" : "нєй",
		"Ňanu" : "Няну",
		"tvojoj" : "твоёй",
		"Braňo" : "Бранё",
		"Vlaďo" : "Владё",
		"Oťo" : "Отё",
		"veľo" : "велё",
		"car’u" : "царю",
		"text" : "текст",
		"taxi" : "таксі",
		"Chlopci":"Хлопці",
		"chyža":"хижа",
		"Joj": "Ёй",
		"Ji": "Ї",
		"joho" : "ёго",
		"Joho" : "Ёго",
		"jomu" : "ёму",
		"Jomu" : "Ёму",
		"ser’jozno" : "серьёзно",
		"zjazvene" : "зъязвене",
		"Zjavyla" : "Зъявила",
		"Myž’ko" : "Мижько",
		"ňoj" : "нёй",
		"Bardejov" : "Бардеёв",
		"naďijov" : "надїёв",
		"treťoj" : "третёй",
		"plaksyvo" : "плаксиво",
		"Čornyjova":"Чорниёва",
		"Obľľav" : "Облляв",
		"plaksyvo" : "плаксиво",
		"taksamo": "таксамо",
		"zjemňovaly":"зъємнёвали",
		"ňoho":"нёго",
		"blyžňoho":"ближнёго",
		"Nyžňoho":"Нижнёго",
		"zjojkla":"зъёйкла",
		"predjidlo":"предъїдло",
		"Myž’o" : "Мижё",
		"Myž’a" : "Мижя",
		"Myž’u" : "Мижю",
	}


	test_dict_apostrophe = {
		"str‘is‘i" : "стрїсї",
		"car‘u" : "царю",
		"Otec’" : "Отець",
		"Otec'" : "Отець",
	}


	// Test translations from latin to azbuka
	for (var key in test_dict){
		assert(translit_lat_azb(key), (test_dict[key]),"Assertion error: " + key + "\ntransliterates to: " + translit_lat_azb(key) + "\nshould trans’ to: " + test_dict[key]);
	}

	// Test translations from azbuka to latin
	for (var key in test_dict){
		assert(translit_azb_lat(test_dict[key]), (key),"Assertion error: " + test_dict[key] + "\ntransliterates to: " + translit_azb_lat(test_dict[key]) + "\nshould trans’ to: " + key);
	}

	// Test if script takes different apostrophes
	assert(streamline_apostrophes("ja‘nk‘o"),"ja’nk’o","Assertion error: apostrophe is not streamlined");
	for (var key in test_dict_apostrophe){
		assert(translit_lat_azb(key), (test_dict_apostrophe[key]),"Assertion error: " + key + "\ntransliterates to: " + translit_lat_azb(key) + ",\nshould trans’ to: " + test_dict[key] + "+\n— this is an apostrophe error.");
	}

})();
