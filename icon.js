/* via http://stackoverflow.com/a/12809146 */

(
	function () {
		var canvas = document.createElement('canvas');
		canvas.width = canvas.height = 16;
		var ctx = canvas.getContext('2d');
		ctx.fillStyle = "#ffd700";
		ctx.fillRect(0, 0, 15, 15);
		var link = document.createElement('link');
		link.type = 'image/x-icon';
		link.rel = 'shortcut icon';
		link.href = canvas.toDataURL(link.type);
		document.getElementsByTagName('head')[0].appendChild(link);
	}
)();
