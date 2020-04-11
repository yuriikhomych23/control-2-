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
        $('body').css({
            opacity: '.7',
            filter: 'alpha(opacity=50)',
            backgroundColor: 'black',
            transition: 'all .6s'
        }),
        $('.btn').css('display', 'none')
        
    }),


    //CROSS
    $('.uil-times-square').click(function() {
        $('.list__color').slideUp(500)
            $('body').css({
            opacity: '',
            filter: '',
            backgroundColor: '',
            transition: 'all .5s'
        })
    }), 



    //ІКОНКА З КАРТИНКИАМИ І КОЛЬОРАМИ
    $('.uil-picture').click(function() {
        $('.list__color').slideDown(600).css('height', '380px')
        $('body').css({
            opacity: '.7',
            filter: 'alpha(opacity=50)',
            backgroundColor: 'black',
            transition: 'all .6s'
        }),
        $('.btn').css('display', 'flex')

    }),


    //КАРТИНКИ
    $('.images').click(function() {
        $('.text__color').css('display', 'none')
        $('.picture').css('display', 'grid')
    }),


    $('.uil-padlock').click(function() {
        $('.sign__in').slideDown(500).css('display', 'block')
        $('body').css({
            opacity: '.7',
            filter: 'alpha(opacity=50)',
            backgroundColor: 'black',
            transition: 'all .5s'
        })
    }),

    
    $('#btn__sign__in').click(function(){
        console.log('Привіт')
        if($('#login').val() == '' || $('#password').val() == '') {
            $('.empty__value').css({
                display: 'flex',
                opacity: '1'
            }) // доробити border red

        } else if ($('#login').val() != '' && $('#password').val() != '') {
            $('.empty__value').css('display', 'none')
            $('.sign__in').slideUp(500).css({
                display: 'none', // доробити 
                opacity: '1'
            })
            $('body').css({
            opacity: '',
            filter: '',
            backgroundColor: '',
            transition: 'all .5s',
            })
        //change icon
        $('.uil-lock-open-alt').css('display', 'block')
        $('.uil-padlock').css('display', 'none')
        }
            

    }),
    $('.uil-expand-left').click(function(){
            $('.header').css('display', 'none')
            $('.second__header').css('display', 'flex')
    }),


    $('.uil-package').click(function() {
        $('.parameters').slideDown(500).css('display', 'block')
        $('body').css({
            opacity: '.7',
            filter: 'alpha(opacity=50)',
            backgroundColor: 'black',
            transition: 'all .5s'
        })
    }), 
    $('.uil-times-square').click(function() {
        $('.parameters').slideUp(500).css('display', 'none')
        $('body').css({
            
            transition: 'all .5s',
        })
    })












    //доробити перша іконка що змінює текст
    // $('.uil-expand-left').click(function(){
    //         $('.header').css('display', 'none')
    //         $('.second__header').css('display', 'flex')
    //         $('div.text:has(p)').html('<p></p>');
    // })
    





    //ЗМІНА КОЛІР ТЕКСТУ НЕ ПРАЦЮЄ ВИПРАВИТИ
    
    // $('.text__color').each(function(ind, elem){
    //     $(ind).click(function() {
    //         $('.text').css('backgroundColor', $(this).elem())
    //     })
    // })

    

})
























// COLOR TEXT JS 
// let textColor = document.querySelector('.text__color');
// let text = document.querySelector('.text');
// let list = document.querySelector('.list__color');
// for(let i = 0; i < textColor.children.length; i++) {
//     textColor.children[i].onclick = function() {
//         text.style.color = getComputedStyle(this).backgroundColor;
//     }
// }