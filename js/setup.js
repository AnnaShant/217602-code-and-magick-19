'use strict';

let namesWizards = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
let surnamesWizards = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
let coatColorWizards = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
let eyesColorWizards = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
let wizards = [];
let amountWizards = 4;

let setupWizard = document.querySelector('.setup');
setupWizard.classList.remove('hidden');

let similarListElement = document.querySelector('.setup-similar-list');
let templateWizards = document.querySelector('#similar-wizard-template').content;
templateWizards.querySelector('.setup-similar-item');

const getRandomElement = function (arr) {  //Функция рандомного выбора
  return arr[Math.floor(Math.random() * arr.length)];
};

for (let i = 0; i < amountWizards; i++) {
  wizards.push({
    name: getRandomElement(namesWizards) + ' ' + getRandomElement(surnamesWizards),
    coatColor: getRandomElement(coatColorWizards),
    eyesColor: getRandomElement(eyesColorWizards)
  })
};

const renderWizard = function (wizard) {
  let wizardElement = templateWizards.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

let fragment = document.createDocumentFragment();
for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

setupWizard.querySelector('.setup-similar').classList.remove('hidden')
