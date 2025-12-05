document.getElementById("soundButton").addEventListener("click", function () {
  //the name of the animal from the input
  const animal = document.getElementById("animalInput").value.toLowerCase();
  //Sound output
  const output = document.getElementById("soundOutput");

  //logic
  switch (animal) {
    case "dog":
      output.textContent = "Woof! Woof!";
      break;
    case "cat":
      output.textContent = "Meow! Meow!";
      break;
    case "sheep":
      output.textContent = "Baa! Baa!";
      break;
    case "duck":
      output.textContent = "Quack! Quack!";
      break;
    default:
      output.textContent = "Sorry I don't know that animal sound";
  }
});
