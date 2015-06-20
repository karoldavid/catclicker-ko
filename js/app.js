var IMG_PATH = 'img/';

var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable(IMG_PATH + 'kitten-1.jpg');
	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	}
	this.title = ko.computed(function() {
      return this.name() + ": " + this.clickCount();
	}, this);

	this.level = ko.computed(function() {
		var catLevel = ['Newborn', 'Infant', 'Teen', 'Adult'],
		    length = catLevel.length,
		    i = 0;
        
        i = Math.floor(this.clickCount() / 10);

        if (i > (length -1)) {
        	i = length -1;
        }

		return catLevel[i];

	}, this);
};

ko.applyBindings(new ViewModel());