
    var popularSlidesListQuery = document.querySelectorAll(".popular-item");
    var popularControlsListQuery = document.querySelectorAll(".popular-slider-button");

    var popularControlsList = Array.prototype.slice.call(popularControlsListQuery);
    var popularSlidesList = Array.prototype.slice.call(popularSlidesListQuery);




    popularControlsList.forEach( function(item, id) {
        popularControlsList[id].addEventListener("click", function (evt) {
            popularControlsList.forEach(function(buttonNum, slideNumber) {
                if (popularControlsList[slideNumber].checked) {
                          popularSlidesList[slideNumber].classList.remove("popular-slide-hidden");
                } else if (!popularControlsList[slideNumber].checked) {
                          popularSlidesList[slideNumber].classList.add("popular-slide-hidden");
                }
            });
        });
    });


    var servicesSlidesListQuery = document.querySelectorAll(".services-item");
    var servicesControlsListQuery = document.querySelectorAll(".services-slider-button");

    var servicesSlidesList = Array.prototype.slice.call(servicesSlidesListQuery);
    var servicesControlsList = Array.prototype.slice.call(servicesControlsListQuery);

    servicesControlsList.forEach( function(item, id) {
        servicesControlsList[id].addEventListener("click", function (evt) {
            servicesControlsList.forEach(function(buttonNum, slideNumber) {
                if (servicesControlsList[slideNumber].checked) {
                          servicesSlidesList[slideNumber].classList.remove("services-slide-hidden");
                } else if (!servicesControlsList[slideNumber].checked) {
                          servicesSlidesList[slideNumber].classList.add("services-slide-hidden");
                }
            });
        });
    });


    var writeUsLink = document.querySelector(".button-link-contacts");

    var writeUsModal = document.querySelector(".modal-feedback");
    var writeUsClose = writeUsModal.querySelector(".feedback-close");

    var writeUsForm = writeUsModal.querySelector(".feedback-form");
    var feedbackName = writeUsModal.querySelector("[name=feedback-name]");
    var feedbackEmail = writeUsModal.querySelector("[name=feedback-email]");
    var feedbackText = writeUsModal.querySelector(".textarea-field");

    var isStorageSupport = true;
    var storage = "";

    try {
        storage = localStorage.getItem("feedback-name");
    } catch (err) {
        isStorageSupport = false;
    }

    writeUsLink.addEventListener("click", function (evt) {
        evt.preventDefault();
        writeUsModal.classList.add("modal-show");
        feedbackName.removeAttribute("required");
        feedbackEmail.removeAttribute("required");
        feedbackText.removeAttribute("required");
        feedbackName.focus();
    });

    if (storage) {
        feedbackName.value = localStorage.getItem("feedback-name");
        feedbackEmail.value = localStorage.getItem("feedback-email");
        if (feedbackEmail.value) {
            feedbackText.focus();
        } else {
            feedbackEmail.focus();
        }
    } else {
          feedbackName.focus();
      };

    writeUsForm.addEventListener("submit", function (evt) {
        if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
              evt.preventDefault();
              writeUsModal.classList.remove("modal-error");
              writeUsModal.offsetWidth = writeUsModal.offsetWidth;
              writeUsModal.classList.add("modal-error");
        }
        else {
            if (isStorageSupport) {
                  localStorage.setItem("feedback-name", feedbackName.value);
                  localStorage.setItem("feedback-email", feedbackEmail.value);
            }
          }

    });

    writeUsClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        writeUsModal.classList.remove("modal-show");
        writeUsModal.classList.remove("modal-error");
        feedbackName.setAttribute("required","");
        feedbackEmail.setAttribute("required","");
        feedbackText.setAttribute("required","");
    });


    var modalMapLink = document.querySelector(".contacts-map");

    var mapModal = document.querySelector(".modal-map");
    var mapModalClose = mapModal.querySelector(".map-close");

    modalMapLink.addEventListener("click", function (evt) {
        evt.preventDefault();
        mapModal.classList.add("modal-show");
    });

    mapModalClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        mapModal.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            if (mapModal.classList.contains("modal-show")) {
              mapModal.classList.remove("modal-show");
            }
            if (writeUsModal.classList.contains("modal-show")) {
              writeUsModal.classList.remove("modal-show")
              writeUsModal.classList.remove("modal-error");
            }
        }
    });
