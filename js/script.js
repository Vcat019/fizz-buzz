function getNumber() { 
	var yourNumber = parseInt(prompt("Enter a number"));
	if (isNaN(yourNumber)) {
		alert("Please enter a whole number");
		return false;

	}
	else {
		return yourNumber;

	}
}




         function fizzBuzz(number) {
	 for ( var i = 1; i <= number; i++)  {
		if	(i % 15 == 0)  {
			//$('ul').append('<li class="fizz-buzz">' + 'FizzBuzz' + '</li>');
	document.write('FizzBuzz'+"<br />");

} else if ( i % 5 == 0) {
	//$('ul').append('<li class="buzz">' + 'Buzz' + '</li>');
	document.write('Buzz'+"<br />");
} else if 
	( i % 3  == 0) {
//$('ul').append('<li class="fizz">' + 'Fizz'+'</li>' );
document.write('Fizz' + "<br />")
}


else {
	//$('ul').append('<li>' + i + '</li>');
document.write(i + "<br />")
	
			};
		}
	}
$(document).ready(function() {
var yourNumber = false;
while(yourNumber == false) {
yourNumber = getNumber();
}
fizzBuzz(yourNumber);
});
      






