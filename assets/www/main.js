function init() {
    // the next line makes it impossible to see Contacts on the HTC Evo since it
    // doesn't have a scroll button
    // document.addEventListener("touchmove", preventBehavior, false);
    document.addEventListener("deviceready", function() {
    	var main = document.getElementById('main'),
    		buttons = document.getElementsByTagName('button');
    	for (var i = 0; i < buttons.length; i++) {
    		(function() {
        		var button = buttons[i];
        		button.addEventListener('click', function() {
        			var url = button.textContent;
        			main.src = url;
        		}, false);
    		})();
    	}
    }, true);
}
