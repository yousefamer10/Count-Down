


$(document).ready(function () {
    // first section
    let myWidth = $(".links").innerWidth();
    $(".links").css("left", -myWidth);
    $(".content").css("marginLeft", "0px");
    $('.spn').click(function () {
        $(".links").css("display", "block");
        if ($(".links").css("left") == "0px") {
            $(".links").animate({ "left": -myWidth }, 500)
            $(".content").animate({ "marginLeft": "0px" }, 500);
        } else {
            $(".links").animate({ "left": 0 }, 500);
            $(".content").animate({ "marginLeft": "250px" }, 500);
        }
    })
    $(".closeIcon i").click(function () {
        if ($(".links").css("left") == "0px") {
            $(".links").animate({ "left": -myWidth }, 500)
            $(".content").animate({ "marginLeft": "0px" }, 500);
        } else {
            $(".links").animate({ "left": 0 }, 500);
            $(".content").animate({ "marginLeft": "250px" }, 500);
        }
    })



    // ##########################################################



    // second section 


    $(".item1").click(function () {
        $(".content1").slideToggle(500);
        $(".content2").slideUp(500);
        $(".content3").slideUp(500);
        $(".content4").slideUp(500);
    })
    $(".item2").click(function () {
        $(".content2").slideToggle(500);
        $(".content1").slideUp(500);
        $(".content3").slideUp(500);
        $(".content4").slideUp(500);
    })
    $(".item3").click(function () {
        $(".content3").slideToggle(500);
        $(".content1").slideUp(500);
        $(".content2").slideUp(500);
        $(".content4").slideUp(500);
    })
    $(".item4").click(function () {
        $(".content4").slideToggle(500);
        $(".content1").slideUp(500);
        $(".content3").slideUp(500);
        $(".content2").slideUp(500);
    })
    // ##########################################

    let myStartTime = new Date("mar 22,2023 24:00:00").getTime();
    let counter = setInterval(() => {
        let dateNow = new Date().getTime();
        let differentseconds = myStartTime - dateNow;
        let days = Math.floor(differentseconds / (1000 * 60 * 60 * 24));
        let hours = Math.floor(differentseconds % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        let miutes = Math.floor(differentseconds % (1000 * 60 * 60) / (1000 * 60))
        let seconds = Math.floor(differentseconds % (1000 * 60) / (1000));

        document.querySelector(".inner1 h3").innerHTML = days < 10 ? `0${days}` : `${days}`;
        document.querySelector(".inner2 h3").innerHTML = hours < 10 ? `0${hours}` : hours;
        document.querySelector(".inner3 h3").innerHTML = miutes < 10 ? `0${miutes}` : miutes;
        document.querySelector(".inner4 h3").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
        if (differentseconds < 0) {
            clearInterval(counter);
            $(".layer2").slideUp(1000);
            $(".parent-layer").slideUp(1000, function () {
                $(".mycontaier").slideDown(1000);
            });
        }
    }, 1000)

    // ################################

    let mycount = $(".spn33");
    $("textarea").keyup(function () {
        let NumberOfWords = this.value;
        numberCount = 100 - NumberOfWords.length;
        if (numberCount < 0) {
            mycount.html("your available character finished ")
        } else {
            mycount.html(numberCount);
        }
    })
})
