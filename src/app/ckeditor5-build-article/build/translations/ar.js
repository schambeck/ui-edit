(function(d){	const l = d['ar'] = d['ar'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"",Bold:"عريض","Bulleted List":"قائمة نقطية",Cancel:"إلغاء","Change image text alternative":"غير النص البديل للصورة","Choose heading":"اختر عنوان","Dropdown toolbar":"","Editor toolbar":"","Enter image caption":"ادخل عنوان الصورة",Heading:"عنوان","Heading 1":"عنوان 1","Heading 2":"عنوان 2","Heading 3":"عنوان 3","Heading 4":"","Heading 5":"","Heading 6":"","image widget":"عنصر الصورة",Italic:"مائل",Next:"","Numbered List":"قائمة رقمية",Paragraph:"فقرة",Previous:"",Redo:"إعادة","Rich Text Editor, %0":"معالج نصوص، 0%",Save:"حفظ","Show more items":"","Text alternative":"النص البديل",Undo:"تراجع"}	);l.getPluralForm=function(n){return n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 && n%100<=99 ? 4 : 5;;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));