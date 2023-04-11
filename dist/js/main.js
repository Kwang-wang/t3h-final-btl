var input_space_1 =document.querySelectorAll("#input_space");
var text_space =document.querySelectorAll("#text_a");
function anchukhiclickvaoinput(input_space,text)
{
    if(event.target !== input_space && input_space.value == false)
    {
        text.style.visibility = "visible";
    }
    else{
        text.style.visibility = "hidden";

    }
}

document.addEventListener('click',function(event){
    for(var i = 0;i<input_space_1.length;i++)
    {
        anchukhiclickvaoinput(input_space_1[i],text_space[i]);

    }
})

$(document).ready(function(){
    
    $('.soluongdon-number').text($('.cart_stockk').text())
    $('.ic1').addClass('option_buy')  
    $('.icon-inner').click(function(){
        $('.icon-inner').removeClass('option_buy')
        $(this).addClass('option_buy')
    });
    $('.btn_type_1').addClass('mouseleave')
    /*btn loai 1*/
    $('.btn_type_1').mouseenter(function(){
        $(this).removeClass('mouseleave')
        $(this).addClass('hover_button')
    }).mouseleave(function(){
        $(this).removeClass('hover_button');
        $(this).addClass('mouseleave')
      });
      /*button_0n_slide */
    $('.dot_active').addClass('hieu_ung_btn_slide')
    $('.btn_slider_change-element').click(function(){
        $('.btn_slider_change-element').removeClass('hieu_ung_btn_slide')
        $(this).addClass('hieu_ung_btn_slide')
    })
    $('.btn_type_2').addClass('hover_button')
    $('.btn_active').addClass('mouseleave')

    $('.btn_type_2').click(function(){
        $(".btn_type_2").removeClass('mouseleave')
        $(this).addClass('mouseleave')
    })
    
    
});