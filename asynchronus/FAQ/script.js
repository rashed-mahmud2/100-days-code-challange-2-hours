const quiestionGroup = document.querySelectorAll(".quiestion-group");

quiestionGroup.forEach((singleGroup) => {
  const icon = singleGroup.querySelector(".icon");
  const answer = singleGroup.querySelector(".answer");

  singleGroup.addEventListener("click", () => {
    icon.classList.toggle("active");
    answer.classList.toggle("active");
  });
});
