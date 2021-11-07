
  $(document).click(function () {

    $("#btn1").click(function(){

      $(valor2).hide();
    
      $("#result").text("");

      let valor1=parseInt($("#valor1").val());

      var resultado = Math.sqrt(valor1);
      $("#result").append(`El resultado es:  ${resultado}`); 
    });

    $("#btn2").click(function(){

      $(valor2).hide();
    
      $("#result").text("");

      let valor1=parseInt($("#valor1").val());

      var resultado = Math.sin(valor1);
      $("#result").append(`El resultado es:  ${resultado}`); 
    });

    $("#btn3").click(function(){

      $(valor2).hide();
    
      $("#result").text("");

      let valor1=parseInt($("#valor1").val());
      
      var resultado = Math.cos(valor1);
      $("#result").append(`El resultado es:  ${resultado}`); 
    });

    $("#btn4").click(function(){

      $(valor2).hide();
    
      $("#result").text("");

      let valor1=parseInt($("#valor1").val());

      var resultado = Math.tan(valor1);
      $("#result").append(`El resultado es:  ${resultado}`); 
    });

    $("#btn5").click(function(){

      $(valor2).hide();
    
      $("#result").text("");

      let valor1=parseInt($("#valor1").val());

      var resultado = Math.sin(valor1) / Math.cos(valor1) * Math.tan(valor1);
      $("#result").append(`El resultado es:  ${resultado}`); 
    });

    $("#btn6").click(function(){
    
      $("#result").text("");

      let valor1=parseInt($("#valor1").val());
      let valor2=parseInt($("#valor2").val());

      var resultado = valor1 + valor2;
      $("#result").append(`El resultado es:  ${resultado}`); 
    });

    $("#btn7").click(function(){

      $("#result").text("");
    
      let valor1=parseInt($("#valor1").val());
      let valor2=parseInt($("#valor2").val());

      var resultado = valor1 - valor2;
      $("#result").append(`El resultado es: ${resultado}`); 
    });

    $("#btn8").click(function(){

      $("#result").text("");
    
      let valor1=parseInt($("#valor1").val());
      let valor2=parseInt($("#valor2").val());

      var resultado = valor1 * valor2;
      $("#result").append(`El resultado es: ${resultado}`); 
    });

    $("#btn9").click(function(){

      $("#result").text("");
    
      let valor1=parseInt($("#valor1").val());
      let valor2=parseInt($("#valor2").val());

      var resultado = valor1/valor2;
      $("#result").append(`El resultado es: ${resultado}`); 
    });
  });