$(function () {
    $('#about').click(function () {
        $('#aboutModal').modal('show');
    });

    $('#instr').click(function () {
        $('#instructionsModal').modal('show');
    });

    $('#navbar li').click(function () {
        $(this).toggleClass('active');
        setTimeout(function () {
            $('#navbar li').removeClass('active');
        }, 2000);
    });

    $(".cta-button").mousedown(function () {
        $(this)
            .velocity({
                scale: "1.5"
            }, 150, "easeInOut")
            .velocity("reverse");
    });

});
