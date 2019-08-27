$(document).ready(function()
{
    $('#slides').superslides(
        {
            'play':4000,
            'animation':'fade'
            
        }
    );
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    
     
            var skillsTopOffset = $('.skillsSection').offset().top;
            $(window).scroll(function(){
                if(window.pageYOffset > skillsTopOffset - $(window).height()+200){
                    $('.chart').easyPieChart({
                        easing: 'easeInOut',
                        barColor:'#fff',
                        trackColor:false,
                        scaleColor:false,
                        lineWidth:4,
                        size: 152,
                        onStep:function(from,to,percent){
                            $(this.el).find('.percent').text(Math.round(percent));
                        }
                    });
                }
            });
    
 
        
       

});


   
   

