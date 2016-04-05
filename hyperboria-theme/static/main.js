$( document ).ready(function() {
	
    var windowsHeight = $(window).height();
	var subMenuHeight = windowsHeight/2 - $('#searchbox').height() - $('.sphinxsidebarwrapper > div > h3').height()/2;
	
	$('#page-menu > ul').height(subMenuHeight);
	if ($.trim( $('#page-menu').html() ).length ){
		$('#website-menu > ul').height(subMenuHeight);
	}
});