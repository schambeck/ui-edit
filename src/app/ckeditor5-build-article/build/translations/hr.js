(function(d){	const l = d['hr'] = d['hr'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 od %1",Bold:"Podebljano","Bulleted List":"Obična lista",Cancel:"Poništi","Change image text alternative":"Promijeni alternativni tekst slike","Choose heading":"Odaberite naslov","Dropdown toolbar":"Traka padajućeg izbornika","Editor toolbar":"Traka uređivača","Enter image caption":"Unesite naslov slike",Heading:"Naslov","Heading 1":"Naslov 1","Heading 2":"Naslov 2","Heading 3":"Naslov 3","Heading 4":"Naslov 4","Heading 5":"Naslov 5","Heading 6":"Naslov 6","image widget":"Slika widget",Italic:"Ukošeno",Next:"Sljedeći","Numbered List":"Brojčana lista",Paragraph:"Paragraf",Previous:"Prethodni",Redo:"Ponovi","Rich Text Editor, %0":"Rich Text Editor, %0",Save:"Snimi","Show more items":"Prikaži više stavaka","Text alternative":"Alternativni tekst",Undo:"Poništi"}	);l.getPluralForm=function(n){return n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2;;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));