//show modal with selected video
$(".btn-youtube").click(function () {
    var theModal = $(this).data("target"),
    videoSRC = $(this).attr("data-video"),
    videoSRCauto = videoSRC;
    $(theModal + ' iframe').attr('src', videoSRCauto);
});

//stop video when modal is closed
$('#videoModal').on('hidden.bs.modal', function (e) {
	$('#videoModal').find('iframe').attr('src', '');
});
