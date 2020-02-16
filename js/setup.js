'use strict';

var NAMES_WIZARDS = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var SURNAMES_WIZARDS = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var AMOUNT_WIZARDS = 4;
var wizards = [];

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var MIN_NAME_LENGTH = 2;

var setupWizard = document.querySelector('.setup');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var setupFireball = document.querySelector('.setup-fireball-wrap');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var userNameInput = setupWizard.querySelector('.setup-user-name');
var wizardCoatInput = document.querySelector('input[name=coat-color]');
var wizardEyesInput = document.querySelector('input[name=eyes-color]');
var setupFireballInput = setupFireball.querySelector('input[name=fireball-color]');

var similarListElement = document.querySelector('.setup-similar-list');
var templateWizards = document.querySelector('#similar-wizard-template').content;
templateWizards.querySelector('.setup-similar-item');

// Открытие/закрытие окна настройки мага
var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  setupWizard.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setupWizard.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function() {
  openPopup();
});

setupOpen.addEventListener('keydown', function(evt) {
  if(evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('keydown', function(evt) {
  if(evt.key === ENTER_KEY) {
    closePopup();
  }
});

setupClose.addEventListener('click', function() {
  closePopup();
});

// Валидация формы
userNameInput.addEventListener('invalid', function (evt) {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < MIN_NAME_LENGTH) {
    target.setCustomValidity(
        'Имя должно состоять минимум из ' +
      MIN_NAME_LENGTH +
      '-х символов'
    );
  } else {
    target.setCustomValidity('');
  }
});

// Функция рандомного выбора
var getRandomElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

for (var i = 0; i < AMOUNT_WIZARDS; i++) {
  wizards.push({
    name: getRandomElement(NAMES_WIZARDS) + ' ' + getRandomElement(SURNAMES_WIZARDS),
    coatColor: getRandomElement(COAT_COLORS),
    eyesColor: getRandomElement(EYES_COLORS)
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

// Рандомная настройка мага(цвет глаз, мантии, файрбола)
var onWizardCoatClick = function () {
  var fill = getRandomElement(COAT_COLORS);
  wizardCoat.style.fill = fill;
  wizardCoatInput.value = fill;
};

var onWizardEyesClick = function () {
  var fill = getRandomElement(EYES_COLORS);
  wizardEyes.style.fill = fill;
  wizardEyesInput.value = fill;
};

var onFireballClick = function () {
  var fill = getRandomElement(FIREBALL_COLORS);
  setupFireball.style.background = fill;
  setupFireballInput.value = fill;
};

wizardCoat.addEventListener('click', function () {
  onWizardCoatClick();
});

wizardEyes.addEventListener('click', function () {
  onWizardEyesClick();
});

setupFireball.addEventListener('click', function () {
  onFireballClick();
});
