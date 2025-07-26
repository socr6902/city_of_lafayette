function SplashModalRender() {
	var splashContentHash = null;

	SplashModalRender.prototype.triggerRender = function (filter) {

		var self = this;

		this._bindModalClicks();
		
		const params = new URLSearchParams(filter);
		params.set('requestMode', '0')

		$.ajax({
			url: '/api/v1/SplashModal/Get?' + params.toString(),
			type: 'GET',
			cache: false,
			async: false,
			success: function (response) {
				self._setSplashContent(response);
				$('#SplashMessage button.cp-Splash-Btn--NoShow').focus();
			},
			error: function (xhr, textStatus, exception) {
				console.log("Error: " + xhr.statusText + "\nStatus: " + xhr.status);
			},
			beforeSend: function () {
				ajaxPostBackStart('Loading');
			},
			complete: function () {
				ajaxPostBackEnd();
			}
		});
	};

	SplashModalRender.prototype._bindModalClicks = function () {
		function fadeOut() {
			$("#SplashMessageWrapper").fadeOut(300, function () {
				$(this).remove();
				$('html, body').css('overflow', '');
				$('#skipToContentLinks a.skipToContentLink').focus();
			});
		}

		$('.cp-Splash-Btn--Close, .cp-Splash-close').click(function () {
			fadeOut();
		});

		$('.cp-Splash-Btn--Close').focusout(function () {
			$('#SplashMessage').focus();
		});

		$('.cp-Splash-Btn--NoShow').click(function () {
			localStorage.setItem("splashModalDontShowAgain" + splashContentHash, "true");
			fadeOut();
		});

		$(document).keydown(function (event) {
			if (event.keyCode === 27 && $('#SplashMessageWrapper').is(':visible') === true) {
				fadeOut();
			}
		});
	}

	SplashModalRender.prototype._setSplashContent = function (splashModal) {
		if (this._canBeRendered(splashModal)) {
			$('#cp-Splash-title').text(splashModal.Title);
			$('#editorContentDesc').html(splashModal.Content);
			$('.cp-Splash-wrapper').css('display', 'flex');
			$('html, body').css('overflow', 'hidden');
			$('#SplashMessage').focus();

			var modal = document.getElementById("SplashMessage");
			modal.style.display = "block";

			splashContentHash = this._getEditorContentHash(splashModal.Content + splashModal.Title);
		}
	};

	SplashModalRender.prototype._validateStartAndEndDates = function (splashModal) {
		if (!splashModal.DateFormat)
			return false;

		var today = moment();
		var startDate = moment(splashModal.StartDate + ' ' + splashModal.StartTime, splashModal.DateFormat.toUpperCase() + ' hh:mm A');
		var endDate = moment(splashModal.EndDate + ' ' + splashModal.EndTime, splashModal.DateFormat.toUpperCase() + ' hh:mm A');

		return (!startDate.isValid() && !endDate.isValid()) || (startDate.isValid() && endDate.isValid() && startDate.isBefore(today) && endDate.isAfter(today))
			|| (startDate.isValid() && !endDate.isValid() && startDate.isBefore(today)) || (!startDate.isValid() && endDate.isValid() && endDate.isAfter(today));
	}

	SplashModalRender.prototype._getEditorContentHash = function (editorContent) {
		var hash = 0;

		if (editorContent == null || editorContent.length === 0) return hash;

		for (i = 0; i < editorContent.length; i++) {
			char = editorContent.charCodeAt(i);
			hash = ((hash << 5) - hash) + char;
			hash = hash & hash;
		}

		return hash;
	}

	SplashModalRender.prototype._canBeRendered = function (splashModal) {
		var contentHash = this._getEditorContentHash(splashModal.Content + splashModal.Title);
		var cachedDontShowAgainConfig = localStorage.getItem("splashModalDontShowAgain" + contentHash);
		var validDates = this._validateStartAndEndDates(splashModal);
		var hasContent = splashModal.Content != null && splashModal.Content.length !== 0;
		var visible = (splashModal.Visibility > 0 && splashModal.Visibility !== 2) || (splashModal.Visibility === 2 && $("#pagePageID").val() === "1");
		return visible && hasContent && validDates && cachedDontShowAgainConfig == null;
	}
}
