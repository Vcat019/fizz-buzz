$(document).ready(function() {
	$('button').click(function(){
	for ( var i = 1; i <= 100; i++)  
	if	(i % 3 === 0 && i % 5 == 0)  {
	$('ul').append('<li class="fizz-buzz">' + 'FizzBuzz' + '</li>');
	$('div').hide("");
	$('input').val("");

} else if ( i % 5 === 0) {
	$('ul').append('<li class="buzz">' + 'Buzz' + '</li>');
	$('div').hide("");
	$('input').val("");
} else if 
	( i % 3  === 0) {
$('ul').append('<li class="fizz">' + 'Fizz'+'</li>' );
$('div').hide();
$('input').val("");
}


else {
	$('ul').append('<li>' + i + '</li>');
		$('input').val("");
		$('div').hide();
		};
	});
});


