function ComputeEngGPA(argument) {
	// body...
	form = document.forms[0];
	year1 = parseInt(form.elements[0].value);
	year2 = parseInt(form.elements[1].value);
	year3 = parseInt(form.elements[2].value);
	year4 = parseInt(form.elements[3].value);
	var sum = (year4*4) + (year3*3) + (year2*2) + year1;
	var avg = sum/10.0;
	// alert("Eng GPA is " + avg);
	document.getElementById('gpa-form').style.display = "none"; 
	var result = document.getElementById('result');
	result.className += " jumbotron"
	try_again = "<a class=\"btn btn-primary\" href=\"javascript:history.go(0)\">Compute another GPA?</a>"
	var res = "<p class='lead'>Your GPA according to the Engineering department's formula is: " + avg + "</p>";
	result.innerHTML = res + "<br />" + try_again;
}