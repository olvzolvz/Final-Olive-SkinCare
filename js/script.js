// toggle class active

const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// CARA BACA: kita panggil conts hamburger, tolong carikaan saya element,
// yang nama selektornya adalah tanda pagar menu, yg idnya hamburger menu,,
// jd saya akan ngasi event listner ketika di klick di luar sidebar,
//   menu akan hilang dari sidebar.
//   ketika dokumenya Documennya.eventlistner, ketika klik di mana aja, di luar halaman
//   kita pakai function supaya bisa ambil eventnnya, kemudian kurum kurawal,
// jika klik di luar navbar.contains, yang di klik maus qta dan bukan navbar na konteins e target,
//   (if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)))
// nabar na class list REMOVE,, yang di remove kelas active
// navbarNav.classList.remove("active");
