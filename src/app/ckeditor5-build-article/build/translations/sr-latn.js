(function(d){	const l = d['sr-latn'] = d['sr-latn'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 of %1",Bold:"Podebljano","Bulleted List":"Lista sa tačkama",Cancel:"Odustani","Change image text alternative":"Izmena alternativnog teksta","Choose heading":"Odredi stil","Dropdown toolbar":"Padajuća traka sa alatkama","Editor toolbar":"Uređivač traka sa alatkama","Enter image caption":"Odredi tekst ispod slike",Heading:"Stilovi","Heading 1":"Naslov 1","Heading 2":"Naslov 2","Heading 3":"Naslov 3","Heading 4":"Naslov 4","Heading 5":"Naslov 5","Heading 6":"Naslov 6","image widget":"modul sa slikom",Italic:"Kurziv",Next:"Sledeći","Numbered List":"Lista sa brojevima",Paragraph:"Pasus",Previous:"Prethodni",Redo:"Ponovo","Rich Text Editor, %0":"Prošireni uređivač teksta, %0",Save:"Sačuvaj","Show more items":"Prikaži još stavki","Text alternative":"Alternativni tekst",Undo:"Povlačenje"}	);l.getPluralForm=function(n){return (n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));