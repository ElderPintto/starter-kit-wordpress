;(function ($) {

	$(document).ready(function() {
		$('.elm-button').on('click', function (e) {
			e.preventDefault();

			var $that = $(this),
				url = $that.attr('data-href'),
				nextPage = parseInt($that.attr('data-page'), 10) + 1,
				maxPages = parseInt($that.attr('data-max-pages'), 10);

			$that.addClass('is-loading');

			if (url.indexOf('?') > 0) {
				url += '&';
			} else {
				url += '?';
			}

			url += 'paged=' + nextPage;

			$.ajax({
				type : 'POST',
				url : url,
				dataType: 'text'
			}).done(function (data) {
				var loadedEvent = new Event('elm-load'),
					lastPageEvent = new Event('elm-lastPage');

				$that.removeClass('is-loading');

				if ($(elm_button_vars.wrapper).length) {
					$(elm_button_vars.wrapper).append($($.parseHTML(data)).find(elm_button_vars.wrapper).addBack(elm_button_vars.wrapper).html());
					document.dispatchEvent(loadedEvent);
				} else {
					console.log('Please update Easy Load More settings with post list wrapper selector.');
				}

				if ( nextPage == maxPages ) {
					$that.remove();
					document.dispatchEvent(lastPageEvent);
				} else {
					$that.attr('data-page', nextPage);
				}

			}).fail(function () {
				var failEvent = new Event('elm-fail');
				document.dispatchEvent(failEvent);
				console.log('Ajax failed. Navigating to ' + url + '.');
				document.location.href = url;
			});

			return false;
		});
	});

}(jQuery));