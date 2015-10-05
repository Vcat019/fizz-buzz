$(document).ready(function() {
	$('button').click(function(){
	if ($('input').val().trim().length === 0) {
	$('div').show();
	$('input').val("");

} else if 
		($('input').val().trim() % 15 === 0)  {
	$('ul').append('<li id="fizz-buzz">' + 'Fizz-Buzz' + '</li>');
	$('div').hide("");
	$('input').val("");

} else if 
($('input').val().trim() % 5 === 0) {
	$('ul').append('<li id="buzz">' + 'Buzz' + '</li>');
	$('div').hide("");
	$('input').val("");
} else if 
	($('input').val().trim() % 3  === 0) {
$('ul').append('<li id="fizz">' + 'Fizz'+'</li>' );
$('div').hide();
$('input').val("");
}


else {
	$('ul').append('<li>' + $('input').val() + '</li>');
		$('input').val("");
		$('div').hide();
	};
});
});


