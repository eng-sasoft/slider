function initilizeSlider(slides,HtmlId, time, path) {
	sliderHTML(HtmlId);
	slider(slides, time, path);
}

function slider(slides, time, path) {
	var imgLink = document.getElementById('slider-img')
	var headingLink = document.getElementById('slider-heading')
	var paragLink = document.getElementById('slider-parag')
	var length = slider.length;
	var idx = 0;
	setInterval(function () {
		imgLink.src = path + "/" + slides[idx].imgLink;
		headingLink.innerText = slides[idx].desc.heading;
		paragLink.innerText = slides[idx].desc.parag;
		idx++;
		if (idx > (length - 1)) {
			idx = 0;
		}
	}, time)
}
function sliderHTML(HtmlId) {
	var sliderLink = document.getElementById(HtmlId);
	var sliderWraper = createElementWithAttributes('div', {className:'slider-wraper'}, sliderLink);
	var slider = createElementWithAttributes('div', {className:'slider'}, sliderWraper);
	var imgWrapper = createElementWithAttributes('div', {className:"img-wraper"}, slider);
	var img = createElementWithAttributes('img', {id:"slider-img", width:600, height:400}, imgWrapper, );
	var descrpt = createElementWithAttributes('div', {className:'description-wraper'}, slider);
	var heading = createElementWithAttributes('h1', {id:'slider-heading'}, descrpt,);
	var parg = createElementWithAttributes('p', {id:'slider-parag'}, descrpt, );
}

function createElementWithAttributes(HtmlElement, attributes, appendElement) {
	var newElement = document.createElement(HtmlElement);
	for (var key in attributes) {
		newElement[key] = attributes[key];
	}
	if (appendElement) {
		return appendElement.appendChild(newElement);
	}
	return newElement;
}


function createElementWithClass(HtmlElement, className, appendElement, id) {
	var newElement = document.createElement(HtmlElement);
	if (className && className !== "none") {
		newElement.className = className;
	}
	if (id && id !== "none") {
		newElement.id = id;
	}
	if (appendElement) {
		return appendElement.appendChild(newElement);
	}

}
