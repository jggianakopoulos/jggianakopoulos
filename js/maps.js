function addMap() {
	var startingPoint = {lat:40.5, lng:-96.6};
	var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: startingPoint});
};


