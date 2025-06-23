window.onload = () => {
  const song = document.getElementById("birthday-song");
  document.body.addEventListener("click", () => {
    song.play().catch((e) => console.log("User must click to play:", e));
  });
};
