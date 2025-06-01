declare var $: any;

export const themeLoad = () => {
    $("#preloader").on(500).fadeOut();
    $(".preloader").on(600).fadeOut("slow");
	$('.loader-container').addClass('done');
	$('.progress-br').addClass('done');
}