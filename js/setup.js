'use strict';

(function () {
  window.setup = {
    COAT_COLORS: [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)'
    ],
    EYES_COLORS: [
      'black',
      'red',
      'blue',
      'yellow',
      'green'
    ],
    setupWizard: document.querySelector('.setup')
  };

  var AMOUNT_WIZARDS = 4;

  var similarListElement = window.setup.setupWizard.querySelector('.setup-similar-list');
  var templateWizards = document.querySelector('#similar-wizard-template').content;
  templateWizards.querySelector('.setup-similar-item');

  // Генерация шаблона волшебника
  var renderWizard = function (wizard) {
    var wizardElement = templateWizards.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = window.util.getRandomElement(window.setup.COAT_COLORS);
    wizardElement.querySelector('.wizard-eyes').style.fill = window.util.getRandomElement(window.setup.EYES_COLORS);

    return wizardElement;
  };

  window.backend.load(function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var j = 0; j < AMOUNT_WIZARDS; j++) {
      fragment.appendChild(renderWizard(wizards[j]));
    }
    similarListElement.appendChild(fragment);

    window.setup.setupWizard.querySelector('.setup-similar').classList.remove('hidden');
  });
})();
