var IMG_PATH = 'img/';
var nicknames = [{name: 'Berry'}, {name: 'Lolo'}, {name: 'Anni'}, {name: 'Tutti'}, {name: 'Hegi'}];

var Cat = function() {
    this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable(IMG_PATH + 'kitten-1.jpg');
	
	this.title = ko.computed(function() {
      return this.name() + ": " + this.clickCount();
	}, this);

	this.level = ko.computed(function() {
		var catLevel = ['Newborn', 'Infant', 'Teen', 'Adult'],
		    max = catLevel.length - 1,
		    i = 0;
        
        i = Math.floor(this.clickCount() / 10);

        if (i > max) { i = max; }

		return catLevel[i];

	}, this);

	this.nickname = ko.observableArray();

	for (var n in nicknames) {
		this.nickname.push(nicknames[n].name);
	}
};

var ViewModel = function() {
    this.currentCat = ko.observable(new Cat());

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};	
};

ko.applyBindings(new ViewModel());