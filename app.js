//1.
// $(function () {
//     console.log("Let's get ready to party with jQuery!");
//.2
$('article img').addClass('image-center');
//3.
$('p:last-child').remove();
//4.
$('#title').css('font-size',Math.random()*100);
//5.
$('ol').append('<li>OOOO PIECE OF CANDY!</li>')
//6.
$('aside').children().remove()
$('aside').append('<p>No lists here anymore my bad boo boo</p>')
//.7
$('.form-control').on('change',function(){
const red=$('input').eq(0).val()
const blue=$('input').eq(1).val()
const green=$('input').eq(2).val()
$("body").css("background-color", "rgb(" + red + "," + green + "," + blue + ")");
})
//.8 
$('img').on('click',function(){
    $(this).remove()
})