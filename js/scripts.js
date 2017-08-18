(function() {

	var DATA = vimeo;
	var $videos = document.querySelector('main .timeline');
	var $filterDescription = document.getElementById('filterDescription');
	var $filterNumber = document.getElementById('filterNumber');
	var $filter10Likes = document.getElementById('filter10Likes');

	function render() {
		maxitems = $filterNumber.value || 10;
		filter10 = $filter10Likes.checked;


		//empting videos div
		$videos.innerHTML = '';

		for(var i = 0; i<maxitems; i++) {
			if(!filter10 && DATA.data[i].metadata.connections.likes.total >= 10)
				continue;

			if(DATA.data[i].description== null)
				continue;

			if($filterDescription.value!=''  && DATA.data[i].description.indexOf($filterDescription.value)==-1)
				continue;

			var htmlToRender = templateStructure(DATA.data[i]);
			$videos.innerHTML += htmlToRender
		}

		if($videos.innerHTML == '')
			$videos.innerHTML = 'Nothing found'
	}


	function init() {
		
		//handlers
		$filterNumber.onchange = render;
		$filter10Likes.onchange = render;
		$filterDescription.onchange = render;
	}

	init()
	render();
})();