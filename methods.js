$(document).ready(function(){
    $('#clickbutton').click(function(){
        // $('#methoddescription').css('color', 'red');
        $('#redtexthere').css('color', 'red');
    })
    // name of button
    $('#hide').click(function(){
        $('#hidep').hide();
    })

    // name of button to listen for click
    $('#show').click(function(){
        //where to go, what to do.
        $('#showp').show()
    })

    // name of button
    $('#togglenoparams').click(function(){
        $('#togglenpp').toggle();
    })

    $('#toggleparams').click(function(){
        $('#togglep').toggle("slow");
    })

    $('#toggleparams2').click(function(){
        $('#toggle2paramsalert').toggle(function(){
            alert("firt time");},function(){
                alert("second time");})
            })

    $('#slidedown').click(function(){
        $('#slidep').slideDown();
    })
      
    $('#slideup').click(function(){
        $('#slideupp').slideUp(1000, function(){
            alert("4 left and 4 right!");
        });
    })

    $('#slidetoggle').click(function(){
        $('#slidetogglep').slideToggle();
    })

    $('#fadein').click(function(){
        $('#fadeinp').fadeIn();
    })

    $('#fadeout').click(function(){
        $('#fadeoutp').fadeOut()
    })

    $('#addClass').click(function(){
        $('#addClassp').addClass("addedClass")
    })

    $('#before').click(function(){
        $('#beforep').before("<p>Glen Goulter</p>");
    })

    $('#after').click(function(){
        $('#afterp').after("<p>Goulter</p>");
    })

    $('#append').click(function(){
        $('#appendp').append("wow, I appended this");
    })

    $('#html').click(function(){
        $('#htmlp').html("<h3>....this is the html</h3>");
    })

   
    $('#attr').click(function(){
        $("img").attr("width", "500px");
    })

      
    $('#value').click(function(){
        var text=$(this).text();
        $("input").val(text);
    })

    $('#text').click(function(){
        var temp=$("#texttest").text();
        $("#textp").html(temp);
    })

    $('#dataset').click(function(){
        $("#datap").data("temp", "Hello");
    });
    $('#dataget').click(function(){
        alert($("#datap").data("temp"));
    })


})




