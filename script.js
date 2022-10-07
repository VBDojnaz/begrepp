const collapsables = document.getElementsByClassName("collapsable");

for (let i = 0; i < collapsables.length; i++) {
  const collapsable = collapsables[i];
  const content = collapsable.querySelector(".content");

  collapsable.addEventListener("click", () => {
    if (content.classList.contains("collapsable-hidden"))
      content.classList.remove("collapsable-hidden");
    else content.classList.add("collapsable-hidden");
  });
  content.classList.add("collapsable-hidden");
}
