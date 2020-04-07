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
    $('#underline').click(function() {
        $('.text').css({'textDecoration': this.checked?'underline':''});
    }),

    //LINE THROUGH
    $('#line__through').click(function() {
        $('.text').css({'textDecoration': this.checked?'line-through':''});
    }),


    //LEFT SIDE
    $('#left').click(function() {
        $('.text').css({
            display: 'block',
            textAlign: 'left'
        })
    }),

    //CENTER
    $('#center').click(function() {
        $('.text').css({
            display: 'block',
            textAlign: 'center'
        })
    }),

    //RIGHT SIDE
    $('#right').click(function() {
        $('.text').css({
            display: 'block',
            textAlign: 'right'
        })
    }),
    //FONT FAMILT
    $('#font').change(function() {
        $('.text').css('fontFamily', $(this).val())
    }),


    //FONT SIZE
    $('#size').change(function() {
        $('.text').css('fontSize', $(this).val() + 'px')
    })

})
