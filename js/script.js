function initMap() {
  var mapDiv = document.getElementById('contacts__map');
  var myLatLng = {lat: 59.938810, lng: 30.323400};
  var map = new google.maps.Map(mapDiv, {
    center: myLatLng,
    zoom: 15
  });
  var image = "img/icons/icon-marker.png";
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}

var button_contacts_show = document.querySelector(".contacts__info .btn--contacts");
var modal_content = document.querySelector(".feedback-wrapper");
var button_close = document.querySelector(".feedback .feedback__btn--close");
var button_submit = document.querySelector(".feedback .btn--submit");
var textarea = document.querySelectorAll(".textarea");
var feedback_form = document.querySelector(".feedback");
var user_name, user_email;

if (feedback_form != null) {
  user_name = feedback_form.querySelector("[type=text]");
  user_email = feedback_form.querySelector("[type=email]");
}

if (button_contacts_show != null) {
  button_contacts_show.addEventListener("click", function(event) {
    event.preventDefault();
    modal_content.classList.add("feedback-wrapper__show");
  });
}

if (button_close != null) {
  button_close.addEventListener("click", function(event) {
    event.preventDefault();
    modal_content.classList.remove("feedback-wrapper__show");
    feedback_form.classList.remove("modal-error");
  });
}

if (button_submit != null) {
  button_submit.addEventListener("click", function(event) {
    event.preventDefault();
    modal_content.classList.remove("feedback-wrapper__show");
    feedback_form.classList.remove("modal-error");
  });
}

for (var i = 0; i < textarea.length; i++) {
  textarea[i].addEventListener("focusout", function(event) {
    var elem = this;
    var placeholder = this.nextElementSibling;
    var form_hint = placeholder.firstElementChild;
    if(elem.value.length == 0) {
      form_hint.classList.remove("lostfocus");
    } else {
      form_hint.classList.add("lostfocus");
    }
  }, false);
}

if (feedback_form != null) {
  feedback_form.addEventListener("submit", function(event) {
    if (!user_name.value || !user_email.value) {
      event.preventDefault();
      feedback_form.classList.remove("modal-error");
      feedback_form.offsetWidth = feedback_form.offsetWidth;
      feedback_form.classList.add("modal-error");
      console.log("Нужно ввести логин и пароль");
    }
  });
}

if (modal_content != null) {
  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (modal_content.classList.contains("feedback-wrapper__show")) {
        modal_content.classList.remove("feedback-wrapper__show");
        feedback_form.classList.remove("modal-error");
      }
    }
  });
}
