$j = jQuery.noConflict();
$j(document).ready(function () {
    
        var oHandlerHorizontal = $j("#carouseldiv").msCarousel({boxClass: 'div.set', width: 907, height: 302, scrollSpeed: 500}).data("msCarousel");
        $j("#next").click(function () {
            oHandlerHorizontal.next();
        });
        $j("#previous").click(function () {
            oHandlerHorizontal.previous();
        });

   

});