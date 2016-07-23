/* 
	Приклеить каждый заголовок <h2> к последующему блоку
*/
(
	function () {
		$('h2').each(function () {
			var el = $(this);
			el = el.add(el.next());
			el.wrapAll('<div class="lit-hp"></div>');
		});
	}
)();

/* 
	Приклеить каждый список <ul> и <ol> к предшествующему блоку
*/

