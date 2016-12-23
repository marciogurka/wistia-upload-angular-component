function HeroDetailController() {

}

angular.module('App').component('blueimpUploadWistia', {
	templateUrl: 'app/components/blueimp-upload-wistia.html',
	controller: HeroDetailController,
	bindings: {
		video: '='
	}
});