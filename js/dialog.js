'use strict';

// Открытие/закрытие окна настройки мага
(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var formWizard = window.setup.setupWizard.querySelector('.setup-wizard-form');

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  var openPopup = function () {
    window.setup.setupWizard.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    window.setup.setupWizard.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  // Отправка формы
  var sendForm = function () {
    window.setup.setupWizard.classList.add('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');

    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;

    document.body.insertAdjacentElement('afterbegin', node);
  };

  var onFormSubmit = function (evt) {
    evt.preventDefault();

    window.backend.save(new FormData(formWizard), sendForm);
  };

  formWizard.addEventListener('submit', onFormSubmit, errorHandler);
})();
