//1
$('body').append('<p></p>');
$('p').text('Hello World').attr('id','my-id');

//2
$('body').append('<a>Google</a>');
$('a').attr('href','http://google.com');

//3
$('body').append('<div></div>');

$('div').width('100px').height('100px').attr('id','my-div').css('background-color','pink').append('<div></div>','<div></div>','<div></div>','<div></div>');
$('#my-div').children().eq(1).text('div2')