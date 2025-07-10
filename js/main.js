(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
    }
  });

  // Dropdown on mouse hover
  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";

  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  $(document).ready(function () {
    console.log("Initializing facts counter");

    $('[data-toggle="counter-up"]').each(function () {
      var $this = $(this);
      var countTo = parseInt($this.attr("data-count"), 10);
      var countNum = 0;
      var increment = countTo / 200;

      function updateCounter() {
        countNum += increment;
        $this.text(Math.floor(countNum));
        if (countNum < countTo) {
          requestAnimationFrame(updateCounter);
        } else {
          $this.text(countTo);
        }
      }

      console.log("Element found for counter-up:", this);
      requestAnimationFrame(updateCounter);
    });

    console.log("Facts counter initialized");
  });

  // Modal Video
  $(document).ready(function () {
    var $videoSrc;
    $(".btn-play").click(function () {
      $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);

    $("#videoModal").on("shown.bs.modal", function (e) {
      $("#video").attr(
        "src",
        $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
      );
    });

    $("#videoModal").on("hide.bs.modal", function (e) {
      $("#video").attr("src", $videoSrc);
    });
  });

  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    margin: 24,
    dots: true,
    loop: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
})(jQuery);

// footer your email validation

document.getElementById("signup-btn").addEventListener("click", function () {
  const emailInput = document.getElementById("newsletter-email");
  const errorDiv = document.getElementById("email-error");
  const email = emailInput.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    errorDiv.textContent = "Email is required.";
    emailInput.classList.add("is-invalid");
  } else if (!emailRegex.test(email)) {
    errorDiv.textContent = "Please enter a valid email.";
    emailInput.classList.add("is-invalid");
  } else {
    errorDiv.textContent = "";
    emailInput.classList.remove("is-invalid");
    alert("Thanks for subscribing!");
    emailInput.value = "";
  }
});

// booking table validation

document
  .getElementById("booking-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("datetime-error").textContent = "";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const datetime = document.getElementById("datetime").value.trim();

    let valid = true;

    if (name === "") {
      document.getElementById("name-error").textContent = "Name is required.";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      document.getElementById("email-error").textContent = "Email is required.";
      valid = false;
    } else if (!emailRegex.test(email)) {
      document.getElementById("email-error").textContent =
        "Invalid email format.";
      valid = false;
    }

    if (datetime === "") {
      document.getElementById("datetime-error").textContent =
        "Please select date & time.";
      valid = false;
    }

    if (valid) {
      alert("Booking submitted successfully!");
      this.reset();
    }
  });


  
// contact page validation

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Clear all error messages
    ["name", "email", "subject", "message"].forEach((id) => {
      document.getElementById(id + "-error").textContent = "";
    });

    // Fetch input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    let isValid = true;

    // Name validation
    if (name === "") {
      document.getElementById("name-error").textContent = "Name is required.";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      document.getElementById("email-error").textContent = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      document.getElementById("email-error").textContent =
        "Invalid email format.";
      isValid = false;
    }

    // Subject validation
    if (subject === "") {
      document.getElementById("subject-error").textContent =
        "Subject is required.";
      isValid = false;
    }

    // Message validation
    if (message === "") {
      document.getElementById("message-error").textContent =
        "Message is required.";
      isValid = false;
    } else if (message.length < 10) {
      document.getElementById("message-error").textContent =
        "Message must be at least 10 characters.";
      isValid = false;
    }

    if (isValid) {
      alert("Message sent successfully!");
      this.reset(); // Clear the form
    }
  });
