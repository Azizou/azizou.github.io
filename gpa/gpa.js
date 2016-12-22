function ComputeEngGPA(argument) {
	// body...
	form = document.forms[0];
	year1 = parseInt(form.elements[0].value);
	year2 = parseInt(form.elements[1].value);
	year3 = parseInt(form.elements[2].value);
	year4 = parseInt(form.elements[3].value);
	var sum = (year4*4) + (year3*3) + (year2*2) + year1;
	avg = sum/10.0;
	// alert("Eng GPA is " + avg);

	var result = document.getElementById('result');
	var res = "Your GPA according to the Engineering department's formula is: " + avg;
	div.innerHTML += res;
}