function UploadController() {
	$(function() {
		$('#file').change( function () {
			$('#file_name').html(this.value.substring(12));
		});

		$("#choose-video").on("click", function(){
			$("#file").trigger("click");
		});

		$('#form-upload').fileupload({
			dataType: 'json',
			done: function (e, data) {
				$('#li-no-video').remove();
				$('<li>' + data.result.name + '</li>').appendTo('#uploaded');                    
				$('#progress_status').html(' Upload Finished');
				$('#last_video').html(data.result.name);
				$('#player').attr('src', 'https://fast.wistia.net/embed/iframe/' + data.result.hashed_id + '?videoFoam=true');
				$('#choose-video').removeAttr('disabled');
			},
			send: function (e, data) {
				$('#choose-video').attr('disabled', '');
			},
			progressall: function (e, data) {
				var progress = parseInt(data.loaded / data.total * 100, 10);
				$('.progress-bar').attr('aria-valuenow', progress);
				$('.progress-bar').css('width', progress + '%');
				$('#progress_status').html(' Uploading File: ' + progress + '%');
			}
		});  
	});
}

angular.module('App').component('blueimpUploadWistia', {
	templateUrl: 'views/blueimp-upload-wistia.html',
	controller: UploadController,
	bindings: {
	}
});