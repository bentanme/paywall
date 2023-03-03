console.log('Ben\'s NZ Herald script is running');

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {cancel: details.url.indexOf("://www.nzherald.co.nz/") != -1};
  },
  {urls: ["://www.nzherald.co.nz/pf/dist/engine/*"]},
  ["blocking"]
);

setTimeout(function() {

	console.log('Ben\'s NZ Herald script has run');
	
	var elClassName = "";
	$(".article__ad-wrapper").each(function() { elClassName = this.className.split(" ")[1] });

	console.log("Class name: " + elClassName);

	$('.' + elClassName).removeAttr('style').css('opacity', '1').css('display', 'block').css('color', '#000');

}, 2000);