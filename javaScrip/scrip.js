// script.js

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");
  
    if (name && email && message) {
      formMessage.textContent = "Terima kasih! Pesan Anda telah dikirim.";
      formMessage.style.color = "green";
      this.reset();
    } else {
      formMessage.textContent = "Mohon isi semua kolom.";
      formMessage.style.color = "red";
    }

//     const hamburger = document.getElementById('hamburger');
// const navbar = document.getElementById('navbar');

// hamburger.addEventListener('click', () => {
//   navbar.classList.toggle('active');
// });

  });