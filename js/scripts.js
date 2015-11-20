// boiler plate for using jquery
$(document).ready(function(){
	//all jquery functions start with $
	
	$("#fade").click(function(){
		$("#fade").fadeOut();
	});
		
	$("#slide").click(function(){
    	$("#panel").slideDown("slow");
		});

    $("#hide").click(function(){
        $(".page").hide();
    });
    $("#show").click(function(){
        $(".page").show();
    });
        
	$("#ball").hover(function(){
        $("#ball").effect( "bounce", {times:3}, 300 );
            });

});	