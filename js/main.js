const weaponsButtonClassName = "weapon-button"
const weaponsButton = Array.from(document.getElementsByClassName(weaponsButtonClassName))
console.log(weaponsButton)

weaponsButton.forEach((weaponButton) => {
    weaponButton.addEventListener("click", () => {
        alert(weaponButton.id);
      });
});