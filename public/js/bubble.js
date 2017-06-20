//balloon
document.getElementById('area1').addEventListener("click", () => {
  var bubble = document.getElementById('bubble1');
  if (bubble.style.display === 'none') {
    bubble.style.display = 'block';
  } else {
    bubble.style.display = 'none';
  }
});