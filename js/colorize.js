'use strict';

(function () {
  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var wizardCoat = window.setup.setupWizard.querySelector('.wizard-coat');
  var wizardEyes = window.setup.setupWizard.querySelector('.wizard-eyes');
  var setupFireball = document.querySelector('.setup-fireball-wrap');
  var wizardCoatInput = document.querySelector('input[name=coat-color]');
  var wizardEyesInput = document.querySelector('input[name=eyes-color]');
  var setupFireballInput = setupFireball.querySelector('input[name=fireball-color]');

  // Рандомная настройка мага(цвет глаз, мантии, файрбола)
  var onWizardCoatClick = function () {
    var fill = window.util.getRandomElement(window.setup.COAT_COLORS);
    wizardCoat.style.fill = fill;
    wizardCoatInput.value = fill;
  };

  var onWizardEyesClick = function () {
    var fill = window.util.getRandomElement(window.setup.EYES_COLORS);
    wizardEyes.style.fill = fill;
    wizardEyesInput.value = fill;
  };

  var onFireballClick = function () {
    var fill = window.util.getRandomElement(FIREBALL_COLORS);
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
})();
