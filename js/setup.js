'use strict';

var namesWizards = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var surnamesWizards = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var coatColorWizards = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var eyesColorWizards = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var wizards = [];
var amountWizards = 4;

var setupWizard = document.querySelector('.setup');
setupWizard.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var templateWizards = document.querySelector('#similar-wizard-template').content;
templateWizards.querySelector('.setup-similar-item');

//Функция рандомного выбора
var getRandomElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

for (var i = 0; i < amountWizards; i++) {
  wizards.push({
    name: getRandomElement(namesWizards) + ' ' + getRandomElement(surnamesWizards),
    coatColor: getRandomElement(coatColorWizards),
    eyesColor: getRandomElement(eyesColorWizards)
  });
}

var renderWizard = function (wizard) {
  var wizardElement = templateWizards.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}
similarListElement.appendChild(fragment);

setupWizard.querySelector('.setup-similar').classList.remove('hidden');
