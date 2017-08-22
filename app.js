'use strict';

var bag = {
  name: 'bag',
  path: 'img/bag.jpg',
  timesDisplayed: 0,
  timesClicked: 0,
};

var banana = {
  name: 'banana',
  path: 'img/banana.jpg',
  timesDisplayed: 0,
  timesClicked: 0,
};

var bathroom = {
  name: 'bathroom',
  path: 'img/bathroom.jpg',
  timesDisplayed: 0,
  timesClicked: 0,
};

var boots = {
  name: 'boots',
  path: 'img/boots.jpg',
  timesDisplayed: 0,
  timesClicked: 0,
};

var breakfast = {
  name: 'breakfast',
  path: 'img/breakfast.jpg',
  timesDisplayed: 0,
  timesClicked: 0,
};

var bubblegum = {
  name: 'bubblegum',
  path: 'img/bubblegum.jpg',
  timesDisplayed: 0,
  timesClicked: 0,
};

var chair = {
  name: 'chair',
  path: 'img/chair.jpg',
  timesDisplayed: 0,
  timesClicked: 0,
};

var cthulhu = {
  name: 'cthulhu',
  path: 'img/cthulhu.jpg',
  timesDisplayed: 0,
  timesClicked: 0,
};

var dogduck = {
  name: 'dogduck',
  path: 'img/dogduck.jpg',
  timesDisplayed: 0,
  timesClicked: 0,
};

var dragon = {
  name: 'dragon',
  path: 'img/dragon.jpg',
  timesDisplayed: 0,
  timesClicked: 0,
};

var pen = {
  name: 'pen',
  path: 'img/pen.jpg',
  timesDisplayed: 0,
  timesClicked: 0,
};

var petsweep = {
  name: 'petsweep',
  path: 'img/petsweep.jpg',
  timesDisplayed: 0,
  timesClicked: 0,
};

var scissors = {
  name: 'scissors',
  path: 'img/scissors.jpg',
  timesDisplayed: 0,
  timesClicked: 0,
};

var shark = {
  name: 'shark',
  path: 'img/shark.jpg',
  timesDisplayed: 0,
  timesClicked: 0,
};

var sweep = {
  name: 'sweep',
  path: 'img/sweep.png',
  timesDisplayed: 0,
  timesClicked: 0,
};

var tauntaun = {
  name: 'tauntaun',
  path: 'img/tauntaun.jpg',
  timesDisplayed: 0,
  timesClicked: 0,
};

var unicorn = {
  name: 'unicorn',
  path: 'img/unicorn.jpg',
  timesDisplayed: 0,
  timesClicked: 0,
};

var usb = {
  name: 'usb',
  path: 'img/usb.gif',
  timesDisplayed: 0,
  timesClicked: 0,
};

var watercan = {
  name: 'watercan',
  path: 'img/watercan.jpg',
  timesDisplayed: 0,
  timesClicked: 0,
};

var wineglass = {
  name: 'wineglass',
  path: 'img/wineglass.jpg',
  timesDisplayed: 0,
  timesClicked: 0,
};

var allItems = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, usb, watercan, wineglass];

var availableItems = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogduck, dragon, pen, petsweep, scissors, shark, sweep, tauntaun, unicorn, usb, watercan, wineglass];

var unavailableItems = [];

var totalClicks = 0;

function randomItem() {
  return Math.floor(Math.random() * (availableItems.length - 1));
}

function createAppend(obj) {
  obj.timesDisplayed ++;
  var parent = document.getElementById('display');
  var child = document.createElement('img');
  child.setAttribute('class', 'img');
  child.setAttribute('id', obj.name);
  child.setAttribute('src', obj.path);
  child.setAttribute('type', 'submit');
  parent.appendChild(child);

};

function removeOld() {
  for(var i = 0; i < 3; i++) {
    var parent = document.getElementById('display');
    var child = document.getElementsByTagName('img')[0];
    parent.removeChild(child);
    availableItems.push(unavailableItems[0]);
    unavailableItems.splice(0, 1);
  };
};

function randomThree() {
  for(var i = 0; i < 3; i++) {
    var which = randomItem();
    console.log(which);
    unavailableItems.push(availableItems[which]);
    availableItems.splice(which, 1);
    createAppend(availableItems[which]);
    var button = document.getElementById('display');
    var click = document.getElementsByClassName('img')[i];
    click.addEventListener('click', handleClick);
  };
};

function handleClick(event) {
  if(totalClicks < 24) {
    event.preventDefault();
    totalClicks ++;
    removeOld();
    for (i = 0; i < allItems.length; i++) {
      if(allItems[i].name === event.target.id) {
        allItems[i].timesClicked ++;
      }
    }
    randomThree();
  }
  else {
    removeOld();
    var parent = document.getElementById('display');
    var child = document.createElement('ul');
    child.setAttribute('id', 'ul');
    parent.appendChild(child);
    for(var i = 0; i < allItems.length; i++) {
      var ul = document.getElementById('ul');
      var li = document.createElement('li');
      li.innerText = allItems[i].name.toUpperCase() + ': Times displayed: ' + allItems[i].timesDisplayed + ' ------- Times clicked: ' + allItems[i].timesClicked;
      ul.appendChild(li);
    }
  }
}

randomThree();
