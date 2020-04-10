$(function() {
    //BOLD NORMAL
    $('.uil-bold').click(function() {
    $('.text').css('fontWeight','bold');
}),

    // ITALIC 
    $('.uil-italic').click(function () {
        $('.text').css('fontStyle', 'italic');
    }),

    //UNDERLINE 
    $('.uil-underline').click(function() {
        $('.text').css('textDecoration', 'underline');
    }),

    //LINE THROUGH
    $('.uil-minus').click(function() {
        $('.text').css('textDecoration', 'line-through');
    }),


    //LEFT SIDE
    $('.uil-align-left').click(function() {
        $('.text').css({
            display: 'block',
            textAlign: 'left'
        })
    }),

    //CENTER
    $('.uil-align-center').click(function() {
        $('.text').css({
            display: 'block',
            textAlign: 'center'
        })
    }),

    //RIGHT SIDE
    $('.uil-align-right').click(function() {
        $('.text').css({
            display: 'block',
            textAlign: 'right'
        })
    }),

    //FONT FAMILT
    $('.uil-text-fields').click(function() {
     $('.modal-font').css('display', 'block')
    }),

    $('.modal-font').change(function() {
        $('.text').css('fontFamily', $(this).val())
    }),


    //FONT SIZE
    $('#size').change(function() {
        $('.text').css('fontSize', $(this).val() + 'px')
    }),


    //COLOR TEXT

    $('.uil-palette').click(function() {
        $('.list__color').slideDown(600)
    })


    $('.text__color').each(function(ind, elem){
        $(elem).click(function() {
            $('.text').css('backgroundColor', $(this).color())
        })
    })

})


// let textColor = document.querySelector('.text__color');
// let text = document.querySelector('.text');

// for(let i = 0; i < textColor.children.length; i++) {
//     textColor.children[i].onclick = function() {
//         text.style.color = getComputedStyle(this).backgroundColor;
//     }
// }
