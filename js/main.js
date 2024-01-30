// Toggle & Responsive Navigation
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");
  
    burger.addEventListener("click", () => {
      // Toggle nav list and burger class
      navLists.classList.toggle("nav-active");
      burger.classList.toggle("toggle-burger");
    });
  };
  
  navSlide();
  
  // Clear form before unload
  window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
      form.reset();
    };
  };
    

  
  const header = document.querySelector("header");
  header.style.backgroundImage = "url('images/bikk.jpg')"; // Ganti dengan lokasi gambar Anda
  header.style.backgroundRepeat = "no-repeat"; // Jika Anda tidak ingin gambar diulang
  header.style.backgroundSize = "cover";
