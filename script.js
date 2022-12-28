function duploclick() {
  const container = document.querySelector(".container");
  if (container.classList.contains("ignite")) {
    container.classList.remove("ignite");
    container.classList.add("explorer");
  } else {
    container.classList.remove("explorer");
    container.classList.add("ignite");
  }
}
