function ageInDays () {
	var birthYear = prompt ("what year were you born...boss?");
	var ageInDayss = (2021 - birthYear) * 365;
	var h1 = document.createElement('h1');
	var textAnswer = document.createTextNode ('You are ' + ageInDayss +' days old,And still single.\n Find love boss');
	h1.setAttribute('id', 'ageinDays');
	h1.appendChild(textAnswer);
	document.getElementById('flex-box-result').appendChild(h1);
	         }
 function reset() {
	 document.getElementById('ageInDays').remove()
 }