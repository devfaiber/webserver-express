(function(){
    // ============================================
    // = ELIMINACION
    // ============================================

    $("#headerPrincipal nav a").each(function(index,elem){
        
        $(this).animate({
            top:"-200px"
        })
        
        $(this).animate({
            top:"0px"
        },500+(index*200))
    })


    // ============================================
    // = HEADER CON EFECTO
    // ============================================
    var altoHeader = $("#headerPrincipal").height()
    window.addEventListener("scroll",function(){
        if($(window).width()> 576){
            if(this.scrollY>altoHeader-30){
                
                $("#headerPrincipal").css({
                    
                    "height": (66/2)+"px",
                    "transition":"all 0.7s ease",
                    "z-index":"99"
                },100)

                
                $("#headerPrincipal").addClass("fixed-top")
            }else{
                $("#headerPrincipal").removeClass("fixed-top")
                $("#headerPrincipal").css({
                    "top":"0px",
                    "height": (66)+"px",
                    
                })
            }
        }
        
    },false)
    
   
}())
