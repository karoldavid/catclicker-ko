/* jshint ignore:start */
"use strict";
/* jshint ignore:end */

$(function(cats) {

var IMG_PATH = 'img/';
var nicknames = [{name: 'Berry'}, {name: 'Lolo'}, {name: 'Anni'}, {name: 'Tutti'}, {name: 'Hegi'}];

var initialCats = cats.kittens;

var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(IMG_PATH + data.imgSrc);

	this.title = ko.computed(function() {
		var catLevel = ['Newborn', 'Infant', 'Child', 'Teen', 'Adult', 'Elderly'],
		    max = catLevel.length - 1,
		    i = 0;
        
        i = Math.floor(this.clickCount() / 10);

        if (i > max) { i = max; }

		return catLevel[i];

	}, this);

	this.nicknames = ko.observableArray();

	for (var name in data.nicknames) {
		this.nicknames.push(data.nicknames[name]);
	}
};

var ViewModel = function() {
	var self = this;
	this.catList = ko.observableArray();

	initialCats.forEach(function(catItem) {
        self.catList.push(new Cat(catItem));
	});

    this.currentCat = ko.observable(this.catList()[0]);

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};	
	this.setCurrentCat = function(kitten) {
        self.currentCat(kitten);
	};
};

ko.applyBindings(new ViewModel());

}(cats));