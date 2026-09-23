(function () {
  "use strict";

  // Horario: [apertura, cierre] en minutos, índice = getDay() (0 = domingo)
  var HOURS = [null, [540, 1260], [540, 1260], [540, 1260], [540, 1260], [540, 1260], [600, 1200]];
  var DAYS = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

  function fmt(min) {
    var h = Math.floor(min / 60), m = min % 60;
    return h + ":" + (m < 10 ? "0" : "") + m;
  }

  function nextOpening(day) {
    for (var i = 1; i <= 7; i++) {
      var d = (day + i) % 7;
      if (HOURS[d]) return (i === 1 ? "mañana" : "el " + DAYS[d]) + " a las " + fmt(HOURS[d][0]);
    }
    return "";
  }

  function updateStatus() {
    var el = document.querySelector("[data-status]");
    if (!el) return;
    var txt = el.querySelector("[data-status-text]");
    var now = new Date();
    var day = now.getDay();
    var min = now.getHours() * 60 + now.getMinutes();
    var today = HOURS[day];

    el.classList.remove("is-open", "is-closed");
    if (today && min >= today[0] && min < today[1]) {
      el.classList.add("is-open");
      txt.textContent = "Abierto ahora · cierra a las " + fmt(today[1]);
    } else {
      el.classList.add("is-closed");
      txt.textContent = today && min < today[0]
        ? "Cerrado · abre hoy a las " + fmt(today[0])
        : "Cerrado · abre " + nextOpening(day);
    }

    var rows = document.querySelectorAll(".hours tr");
    for (var i = 0; i < rows.length; i++) {
      rows[i].classList.toggle("is-today", rows[i].getAttribute("data-day") === String(day));
    }
  }

  updateStatus();
  setInterval(updateStatus, 60000);

  // Borde de la cabecera al desplazarse
  var top = document.querySelector(".top");
  function onScroll() { if (top) top.classList.toggle("is-scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Entrada suave de tarjetas
  var items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    for (var j = 0; j < items.length; j++) items[j].classList.add("is-in");
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px" });
  for (var k = 0; k < items.length; k++) io.observe(items[k]);
})();
