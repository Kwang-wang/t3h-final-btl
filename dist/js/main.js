var input_space_1 =document.querySelectorAll("#input_space");
var text_space =document.querySelectorAll("#text_a");
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn_delete')) {
      var parent = event.target.closest('.danhmucocv');
      parent.style.display = 'none';
    }
  });
  
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
function xuligiasanpham(giasp){
    var price = parseInt(giasp.replace(/,/g, ""));
    var priceFormatted = price.toLocaleString("vi-VN");
    return priceFormatted;

}

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
    

    

    $('.add_to_cart').click(function()
    {   var container = $(this).closest(".product-list-element");
        var price_div = container.find('div');
        var name_sp = container.find('h3').text();
        var price_sp = price_div.find('.cr-price').text();
        var price_sp_solved = xuligiasanpham(price_sp)
        var imgSrc = container.find('img').attr('src');
       
        var danhmuc_ocv =  $('<div/>', { class: 'danhmucocv', html :'<div class = "name_ocv">'+name_sp+'</div><div class = "price_ocv">' + price_sp_solved +"đ"+ '</div>' });
        var img_danhmuc_ocv = $('<div/>',{class : 'img_ocv',html : '<img src='+'"'+ imgSrc +'"'+ '</img> '})
        var btn_confirm = $('<div/>',{class : 'btn_confirm_a'})
        danhmuc_ocv.append(btn_confirm)
        $('.offcanvas-body').append(danhmuc_ocv)
        danhmuc_ocv.append(img_danhmuc_ocv)
        danhmuc_ocv.append('<button class = "btn_delete">Xóa</button>')
        

    })
    
    
});
$(document).on('click', '.btn_confirm_a', function() {
    $(this).toggleClass('chosen');
    $(this).closest('.danhmucocv').toggleClass('chosen2')
  });