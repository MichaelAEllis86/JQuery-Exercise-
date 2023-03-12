
$('#submit').on('click',function (e){
    e.preventDefault()
    let movieTitleInput=$('#title').val()
    console.log(movieTitleInput)
    let movieRatingInput=$('#rating').val()
    console.log(movieRatingInput)
   $('<li>').text(`${movieTitleInput}`+`${movieRatingInput}`).appendTo('ol')
    // $('ol').append('<li>`${movieTitleInput}`</li>')
    // $('ol').append('li').text(`${movieTitleInput}`+`${movieRatingInput}`)
    $('li').append('<button> Remove Movie')
    $('#title').val('')
    $('#rating').val('')
})

//add event listener on the ol were appending the li's to in order for event delegation to work to remove the li
$('ol').on('click', 'button', function(evt){
    $(this).closest('li').remove()
    $(this).remove() //removes btn
    
    


})