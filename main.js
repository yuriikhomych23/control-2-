$(function() {
    //BOLD NORMAL
    $('#bold').change(function() {
    $('.text').css({'fontWeight': this.checked?'bold':'normal'});
}),

    // ITALIC 
    $('#I').click(function () {
        $('.text').css({'fontStyle': this.checked?'italic':'normal'});
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
