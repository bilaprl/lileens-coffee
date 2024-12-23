const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// search
document.getElementById("search").addEventListener("click", function (event) {
  event.preventDefault(); // Mencegah link default
  const query = document.getElementById("search-input").value;
  if (query) {
    // Lakukan sesuatu dengan query, misalnya, redirect ke halaman pencarian
    console.log("Mencari:", query);
    // window.location.href = search.html?q=${encodeURIComponent(query)};
  } else {
    alert("Silakan masukkan kata kunci pencarian.");
  }
});
