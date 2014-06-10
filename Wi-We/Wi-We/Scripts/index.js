$(document).ready(function () {

    //-------------------------------------------RED CLICKS

    $("#r1click").on("click", function (evt) {


        $('#r1').modal('show');


    })

    $("#r2click").on("click", function (evt) {


        $('#r2').modal('show');


    })




    //-------------------------------------------GREEN CLICKS

    $("#g1click").on("click", function (evt) {


        $('#g1').modal('show');

    })

    $("#g2click").on("click", function (evt) {


        $('#g2').modal('show');

    })

    $("#g3click").on("click", function (evt) {


        $('#g3').modal('show');

    })





    //-------------------------------------------BLUE CLICKS

    $("#b1click").on("click", function () {


        $('#b1').modal('show');

    })

    $("#b2click").on("click", function () {


        $('#b2').modal('show');

    })


    $('#submit-button').on('click', function () {
        var $btn = $(this);
        $btn.button('loading');
        $.post("feedbackForm.aspx", {
            name: $('#name').val(),
            email: $('#email').val(),
            enquiry: $('#enquiry').val(),
            message: $('#messageTextArea').val()
        }).done(function () {
            $btn.button('reset');
        });


    })

    $("#contactUsModal").on("shown.bs.modal", function () {
        document.getElementById("ctMap").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1651.7174883669231!2d18.467442964942926!3d-34.10961236579689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc40516b55cb6d%3A0xb45c343c54732acb!2sRevenueRED+(Cape+Town)!5e0!3m2!1sen!2s!4v1401378041413"
        document.getElementById("ptaMap").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14364.401086078774!2d28.135765000000003!3d-25.833240999999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQ5JzU5LjciUyAyOMKwMDgnMDguOCJF!5e0!3m2!1sen!2s!4v1401380772378"
    });
    $('.clientLogos').slick({
        arrows:false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        speed:700
        

       
});
    
})
//var value = $("textarea[id$='textarea-id']").val();