$(document).ready(function(){

    count = 0

    $(".quest-title ul li").on('click' , function(){
        $(".done0").hide()
        $(".done").show()
      
        $(this).css("background-color", "#30ADA5");

        if ($(this).attr('data-return') === "true"){

            $(this).css("background-color", "#30ADA5");
            $(this).css("color", "white");


            

            $(".done img").attr("src", "img/ok.png")
            var oks = Array("Правильно!", "Верно!", 'Отлично!', "Браво!", "Точно!", "Да!", "Так и есть!", "Изумительно!");
            var ok = oks[Math.floor(Math.random()*oks.length)];
            $(".done h2").text(ok)

            count++


            $(".rezult #quizNumber").text(count)

            $(".rezult #progress").val(count)

           
        }
        else{
            $(this).css("background-color", "#F44336");
            $(this).css("color", "white");
            $(".done img").attr("src", "img/wrong.png")
            var wr = Array("Неверно!", "Не совсем так!", 'Мимо!', "Упс!", "Нееет!", "Неправильно!");
            var wrs = wr[Math.floor(Math.random()*wr.length)];
            $(".done h2").text(wrs)
          
            
            
        }
        

        if (count == 0 ){
            $(".rezult #progress").val(0)
        }
        if(count <= 4 ){
            $(".rezult-blok-item-left img").attr("src", "img/minus-4.png")
            $(".rezult progress").addClass("progress-red")
            $('.rezult-blok-item-left h2').text('Родитель-первоклашка')
            $(".rez-img").attr("src", "img/rezult-4.png")
            $('.rezult-p').text('Для вас всё это впервые, и, кажется,вы волнуетесь не меньше ребенка.')

        }

        if(count == 5 || count == 6 ){
            $(".rezult-blok-item-left img").attr("src", "img/minus-6.png")
            $(".rezult progress").addClass("progress-yell")
            $('.rezult-blok-item-left h2').text('Родитель-прогульщик')
            $(".rez-img").attr("src", "img/rezult-6.png")
            $('.rezult-p').text('Некоторые вопросы подготовки ребенка к школе вам знакомы, но какие-то темы явно прогуляли.')

        }
        if(count == 7 || count == 8 ){
            $(".rezult-blok-item-left img").attr("src", "img/minus8.png")
            $(".rezult progress").addClass("progress-blue")
            $('.rezult-blok-item-left h2').text('Родитель-помнил, но забыл')
            $(".rez-img").attr("src", "img/rezult8.png")
            $('.rezult-p').text('Многие вопросы в подготовке ребенка к школе вы выучили наизусть, но кое-где есть белые пробелы.')

        }

        if(count == 9 || count == 10 ){
            $(".rezult-blok-item-left img").attr("src", "img/like.png")
            $(".rezult progress").addClass("progress-green")
            $('.rezult-blok-item-left h2').text('Родитель-отличник')
            $(".rez-img").attr("src", "img/rezult1.png")
            $('.rezult-p').text('В вопросах подготовки ребенка в школу вы – лучший. Садитесь. Пять.')

        }

        if( count == 10 ){
            $(".rezult .test-progress-item-number-black").text("")
            $(".rezult #quizNumber").text("10")

        }


        console.log(count)

      });


      ////////////////////////////
      $(document).on("click",".test-1 .go",function(){
        


       $(".test-1").hide()
       $(".done0").show()
       $(".done").hide()
       $(".test-2").show()
       $(".btn-h").hide()


        

       })

       $(document).on("click",".test-2 .go",function(){
        
        $(".test-2").hide()
        $(".done0").show()
        $(".done").hide()
        $(".test-3").show()
        $(".btn-h").hide()

 
        })


        $(document).on("click",".test-3 .go",function(){
        
            $(".test-3").hide()
            $(".done0").show()
            $(".done").hide()
            $(".test-4").show()

            $(".btn-h").hide()

     
            })
            $(document).on("click",".test-4 .go",function(){
        
                $(".test-4").hide()
                $(".done0").show()
                $(".done").hide()
                $(".test-5").show()

                $(".btn-h").hide()
         
            })

            $(document).on("click",".test-5 .go",function(){
        
                $(".test-5").hide()
                $(".done0").show()
                $(".done").hide()
                $(".test-6").show()
                $(".btn-h").hide()
         
            })

            $(document).on("click",".test-6 .go",function(){
        
                $(".test-6").hide()
                $(".done0").show()
                $(".done").hide()
                $(".btn-h").hide()
                $(".test-7").show()

            })


            $(document).on("click",".test-7 .go",function(){
        
                $(".test-7").hide()
                $(".done0").show()
                $(".done").hide()
                $(".btn-h").hide()
                $(".test-8").show()
         
            })

            $(document).on("click",".test-8 .go",function(){
        
                $(".test-8").hide()
                $(".done0").show()
                $(".done").hide()
                $(".test-9").show()
                $(".btn-h").hide()
         
            })

            $(document).on("click",".test-9 .go",function(){
        
                $(".test-9").hide()
                $(".done0").show()
                $(".done").hide()
                $(".btn-h").hide()
                $(".test-10").show()

         
            })


            $(document).on("click",".test-10 .go",function(){
        
                $(".test-10").hide()
                $(".done0").show()
                $(".done").hide()
                $(".rezult").show()
                $(".btn-h").hide()
         
            })

     ///////////////////////////////////
        $(document).on("click",".test-1 #back",function(){
            $(".test-1").show()
            $(".done0").show()
            $(".done").hide()
            $(".test-1 ul li").css("pointer-events" , "none");
            $(".go").show()
            $(".test-1 ul li").addClass("li-l")

            
        })
    
        $(document).on("click",".test-2 #back",function(){

            $(".test-2").show()
            $(".done0").show()
            $(".done").hide()
            $(".test-2 ul li").css("pointer-events" , "none");
            $(".go").show()
            $(".test-2 ul li").addClass("li-l")


        })

        $(document).on("click",".test-3 #back",function(){

            $(".test-3").show()
            $(".done0").show()
            $(".done").hide()
            $(".test-3 ul li").css("pointer-events" , "none");
            $(".go").show()
            $(".test-3 ul li").addClass("li-l")


        })

        
        $(document).on("click",".test-4 #back",function(){

            $(".test-4").show()
            $(".done0").show()
            $(".done").hide()
            $(".test-4 ul li").css("pointer-events" , "none");
            $(".go").show()
            $(".test-4 ul li").addClass("li-l")

        })

        $(document).on("click",".test-5 #back",function(){

            $(".test-5").show()
            $(".done0").show()
            $(".done").hide()
            $(".test-5 ul li").css("pointer-events" , "none");
            $(".go").show()
            $(".test-5 ul li").addClass("li-l")

        })

        $(document).on("click",".test-6 #back",function(){

            $(".test-6").show()
            $(".done0").show()
            $(".done").hide()
            $(".test-6 ul li").css("pointer-events" , "none");
            $(".go").show()
            $(".test-6 ul li").addClass("li-l")

        })


        $(document).on("click",".test-7 #back",function(){

            $(".test-7").show()
            $(".done0").show()
            $(".done").hide()
            $(".test-7 ul li").css("pointer-events" , "none");
            $(".go").show()
            $(".test-7 ul li").addClass("li-l")


        })

        
        $(document).on("click",".test-8 #back",function(){

            $(".test-8").show()
            $(".done0").show()
            $(".done").hide()
            $(".test-8 ul li").css("pointer-events" , "none");
            $(".go").show()
            $(".test-8 ul li").addClass("li-l")


        })

        $(document).on("click",".test-9 #back",function(){

            $(".test-9").show()
            $(".done0").show()
            $(".done").hide()
            $(".test-9 ul li").css("pointer-events" , "none");
            $(".go").show()
            $(".test-9 ul li").addClass("li-l")


        })

        $(document).on("click",".test-10 #back",function(){

            $(".test-10").show()
            $(".done0").show()
            $(".done").hide()
            $(".test-10 ul li").css("pointer-events" , "none");
            $(".go").show()
            $(".test-10 ul li").addClass("li-l")


        })
       
       

});

function myFunction() {
    var copyText = document.getElementById("myInput");
    var copyB = document.getElementById("copy");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    copyB.innerHTML = "Скопировано"
  }




  $(".go-test").click(function(){
    $('html, body').animate({
       scrollTop:$("#test-blok").position().top
     }, 500);
  });
