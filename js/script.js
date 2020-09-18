    window.onscroll = function(){
    var menu = window.document.getElementById("menu")
    var tamanho = window.innerWidth
    var top = window.pageYOffset || document.querySelector(".menu").scrollTop
    if( top > 125 && tamanho >=1225) {
        menu.style.position = "fixed";
        menu.style.backgroundColor = "rgba(124, 41, 165, 0.759)"
        menu.style.width = "100%"
        menu.style.zIndex = "2"
        menu.style.top = "0"
        menu.style.transform = "translateY(-20vh)"
        menu.style.animation = "500ms 500ms animacaoMenu forwards"
        document.getElementById("inicio").style.marginTop = "12vh"
    }
    else 
    {
        menu.style.position = "static"
        menu.style.transform = "translateY(0)"
        menu.style.animation ="none"
        document.getElementById("inicio").style.marginTop = "0vh"
        if(tamanho >= 2020)
        {
            menu.style.backgroundColor = "rgba(124, 41, 165, 0.91)"
        }
        else
        {
            menu.style.backgroundColor = "rgba(0, 0, 0, 0)"
        }
        
    }
 }

function abrir1()
{
    var display_1 = window.document.getElementById("display_1");
    if(display_1.style.display == "none")
    {
        display_1.style.display = "block"
        display_1.style.animation = "animacaoCaixa 2s forwards"
    }   
    else 
    {
        display_1.style.display = "none"
        display_1.style.animation = "animacaoCaixa 2s backwards"
    }
}

function abrir2()
{
    var display_2 = window.document.getElementById("display_2");
    if(display_2.style.display == "none")
    {
        display_2.style.display = "block"
        display_2.style.animation = "animacaoCaixa 2s forwards"
    }   
    else 
    {
        display_2.style.display = "none"
        display_2.style.animation = "animacaoCaixa 2s backwards"
    }
}
