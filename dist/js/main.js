var input_space_1 =document.querySelectorAll("#input_space");
var text_space =document.querySelectorAll("#text_a");
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn_delete')) {
      var parent = event.target.closest('.danhmucocv');
      parent.remove();
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
    var price = parseInt(giasp.replace(/[,\.]/g, ""));
    var priceFormatted = price.toLocaleString("vi-VN");
    return priceFormatted;

}
function xuligiasanpham2(giasp){
    var price = parseInt(giasp.replace(/[,\.]/g, ""));
    return price;

}

$(document).ready(function(){
    
    
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

        
$('.add_to_cart').click(function()
    {
        var container = $(this).closest(".product-list-element");
        var name_sp = container.find('h3').text();
        var checksp  = $('.name_ocv').text()
        if (checksp.includes(name_sp)==false)
        {
            $(this).closest('.product-list-element').find('.thongbao').text('Đã thêm vào giỏ hàng!').fadeIn('slow').delay(10).fadeOut('slow');
            $('.cart_stockk').text(parseInt($('.cart_stockk').text())+1)
            
            var price_div = container.find('div');
            var price_sp = price_div.find('.cr-price').text();
            var price_sp_solved = xuligiasanpham(price_sp)
            var imgSrc = container.find('img').attr('src');
               
            var danhmuc_ocv =  $('<div/>', { class: 'danhmucocv', html :'<div class = "name_ocv">'+name_sp+'</div><div class = "price_ocv">' + price_sp_solved +"đ"+ '</div>' });
            var img_danhmuc_ocv = $('<div/>',{class : 'img_ocv',html : '<img src='+'"'+ imgSrc +'"'+ '</img> '})
            var btn_confirm = $('<div/>',{class : 'btn_confirm_a'})
            var adjust_stock = $('<div>',{class: 'adjust_stock',html : '<h6>Số lượng</h6><button class = "cong">+</button><h5>1</h5><button class = "tru">-</button>'})
            danhmuc_ocv.append(btn_confirm)
            $('.offcanvas-body').append(danhmuc_ocv)
            danhmuc_ocv.append(img_danhmuc_ocv)
            danhmuc_ocv.append(adjust_stock)
            danhmuc_ocv.append('<button class = "btn_delete">Xóa</button>')

        }
        else{
            $(this).closest('.product-list-element').find('.thongbao').text('Đơn hàng đã có trong giỏ hàng!').fadeIn('slow').delay(10).fadeOut('slow');
        }

        
       

    })
    var soluongdon = $('.soluongdon-number').text();
    var sl = xuligiasanpham2(soluongdon)
    var price_confirm = xuligiasanpham2($('.total_price').text())

$(document).on('click','.cong',function(){
    var check = $(this).closest('.adjust_stock').siblings('.btn_confirm_a')
    var pri = xuligiasanpham2($(this).closest('.adjust_stock').siblings('.price_ocv').text())
    var container2  = $(this).closest('.adjust_stock');
    var dem = parseInt(container2.find('h5').text())
    dem = dem +1;
    container2.find('h5').text(dem)
    if(check.hasClass('chosen'))
    {
        sl = sl+1;
        $('.soluongdon-number').text(sl);
        price_confirm = price_confirm + pri;
        var priceFormatteda = price_confirm.toLocaleString("vi-VN");
        $('.total_price').text(priceFormatteda + 'đ')
        

    }
    
})
$(document).on('click','.tru',function(){
    var check = $(this).closest('.adjust_stock').siblings('.btn_confirm_a')
    var pri = xuligiasanpham2($(this).closest('.adjust_stock').siblings('.price_ocv').text())
    var container2  = $(this).closest('.adjust_stock');
    var dem = parseInt(container2.find('h5').text())
    if(check.hasClass('chosen')&& dem!=1)
    {
        sl = sl-1;
        $('.soluongdon-number').text(sl);
        price_confirm = price_confirm - pri;
        var priceFormatteda = price_confirm.toLocaleString("vi-VN");
        $('.total_price').text(priceFormatteda + 'đ')
        
        
    }
    if(dem>1)
    {
        dem = dem -1;
    }
    container2.find('h5').text(dem)
    
})

console.log(price_confirm);
$(document).on('click', '.btn_confirm_a', function() {
    $(this).toggleClass('chosen')
    $(this).closest('.danhmucocv').toggleClass('chosen2')
    var pri = xuligiasanpham2($(this).closest('.danhmucocv').find('.price_ocv').text())
    var confirm_action = $(this).closest('.danhmucocv').find('.btn_confirm_a');
    var container3 = $(this).siblings('.adjust_stock')
    var soluong =parseInt(container3.find('h5').text())
    if(confirm_action.hasClass('chosen'))
    {
        sl = sl+soluong;
        price_confirm = price_confirm + pri*soluong;
        var priceFormatteda = price_confirm.toLocaleString("vi-VN");
        $('.total_price').text(priceFormatteda + 'đ')
        $('.soluongdon-number').text(sl);
    }
    else{
        sl = sl-soluong;
        $('.soluongdon-number').text(sl);
        price_confirm = price_confirm - pri*soluong;
        var priceFormatteda = price_confirm.toLocaleString("vi-VN");
        $('.total_price').text(priceFormatteda + 'đ')
    }
    

    
  });
$(document).on('click','.btn_delete', function(){
    var container3 = $(this).siblings('.adjust_stock')
    var soluong =parseInt(container3.find('h5').text())
    var confirm_action2 = $(this).closest('.danhmucocv').find('.btn_confirm_a');
    $('.cart_stockk').text(parseInt($('.cart_stockk').text())-1)
    if(confirm_action2.hasClass('chosen'))
        {
            var pri = xuligiasanpham2($(this).closest('.danhmucocv').find('.price_ocv').text())
            price_confirm = price_confirm - pri*soluong;
            var priceFormatteda = price_confirm.toLocaleString("vi-VN");
            $('.total_price').text(priceFormatteda + 'đ')
            sl = sl-soluong;
            $('.soluongdon-number').text(sl);
        }
    
})
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        margin:30,
        responsive:{
            0:{
                items:1
            },
            800:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
});





