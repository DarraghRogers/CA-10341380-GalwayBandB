$("#slideshowrooms>img:gt(0)").hide();
setInterval(function() {
 $('#slideshowrooms>img:first')
 .fadeOut(1000)
 .next()
 .fadeIn(1000)
 .end()
 .appendTo('#slideshowrooms');
}, 3000);

$("#slideshowtourism>img:gt(0)").hide();
setInterval(function() {
 $('#slideshowtourism>img:first')
 .fadeOut(1000)
 .next()
 .fadeIn(1000)
 .end()
 .appendTo('#slideshowtourism');
}, 3000);

$(document).ready(function() {
$("p").hide();
$("h3").click(function()
{
$(this).next("p").slideToggle(500);
});
});

$(document).ready(function() {
$(".fancybox").fancybox();
});