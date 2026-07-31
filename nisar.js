const noBtn = document.getElementById("no");

    function moveButton() {
      const maxX = window.innerWidth - noBtn.offsetWidth;
      const maxY = window.innerHeight - noBtn.offsetHeight;

      const newX = Math.floor(Math.random() * maxX);
      const newY = Math.floor(Math.random() * maxY);

      noBtn.style.left = newX + "px";
      noBtn.style.top = newY + "px";
    }

    noBtn.addEventListener("mouseover", moveButton);

    noBtn.addEventListener("click", moveButton);