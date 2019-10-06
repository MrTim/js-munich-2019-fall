Reveal.initialize({
	history: true,
	dependencies: [
		{ src: '../../reveal.js/plugin/highlight/highlight.js', async: false, callback: function () { hljs.initHighlightingOnLoad(); } },
	]
});

// Make each code example executable by clicking it:
$(document).ready(function () {
	$('code').click(function (event) {
		console.info('Click!', $(this).text());
		eval($(this).text());
	});
});