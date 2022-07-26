$(document).ready(function(){
    $(".three-cl").addClass("color");
    $(".bottom-line").addClass("bottom-active2");
  //   First active item
    $(".btn-one").click(function(){
       $(".bottom-line").addClass("bottom-active");
       $(".one-cl").addClass("color");
       $(".two-cl").removeClass("color1");
       $(".three-cl").removeClass("color2");
       $(".bottom-line").removeClass("bottom-active1 bottom-active2");
    });
    
    //  Second active item
    $(".btn-two").click(function(){
        $(".bottom-line").addClass("bottom-active1");
        $(".two-cl").addClass("color1");
        $(".one-cl").removeClass("color");
        $(".three-cl").removeClass("color2");
        $(".bottom-line").removeClass("bottom-active bottom-active2");
    });
    
    // Third active item
     $(".btn-three").click(function(){
          $(".bottom-line").addClass("bottom-active2");
          $(".three-cl").addClass("color2");
          $(".one-cl").removeClass("color");
          $(".two-cl").removeClass("color1");
          $(".bottom-line").removeClass("bottom-active bottom-active1");
    });
  });