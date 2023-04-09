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
    $('.icon-inner').click(function(){
        $('.icon-inner').removeClass('option_buy')
        $(this).addClass('option_buy')
    });
});