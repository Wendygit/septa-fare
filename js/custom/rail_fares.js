$(document).ready(function() {
   var price=0;

  $(".ride").keyup(function() {
   ajaxCall();   
  });

  $("select").change(function() {
   ajaxCall(); 
  });

  $("input[name='fare']").change(function() {
   ajaxCall();  
  });


  function ajaxCall(){
    $.ajax({
            url: "js/json/fares.json",
            type: "POST",
            dataType: "json",
            success: function(data) {

                $.each(data.zones, function(index, value) {
                    if(value.name==$(".zone").find("option:selected").text()){
                      
                            for(var i=0;i<value.fares.length;i++){
                                if((value.fares[i].type==$(".time").val()) && (value.fares[i].purchase==$("input[name='fare']:checked").val())){
                                   price= value.fares[i].price;
                                   var number = $(".ride").val();  
                                   $(".price").text("$"+ (price*number).toFixed(2));
                            }

                     }    
                                
                       // }
                 }
                        

            });
                 
        },
            error: function() {
                $('body').html('<h1 class="error"><strong>Oops!</strong> Try that again in a few moments.</h1>');
            }
        });

    }   
});