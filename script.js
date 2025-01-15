const facts = [
    "the eiffel tower can grow more than 6 inches during the summer due to heat expansion!",
    "honey never spoils. archaeologists have found pots of honey in ancient egyptian tombs that are over 3000 years old!",
    "octopuses have three hearts, and two of them stop beating when they swim.",
    "bananas are berries, but strawberries are not.",
    "a bolt of lightning contains enough energy to toast 100,000 slices of bread!"
  ];
  
  const factText = document.getElementById("fact-text");
  const nextFactButton = document.getElementById("next-fact");
  
  nextFactButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factText.textContent = facts[randomIndex];
  });
  

const factsButton = document.getElementById('facts-button');
const categoriesSection = document.getElementById('categories');
const factCard = document.getElementById('fact-card');


factsButton.addEventListener('click', () => {
  if (categoriesSection.style.display === 'none' || categoriesSection.style.display === '') {
    categoriesSection.style.display = 'block';
    factCard.style.display = 'none';
  } else {
    categoriesSection.style.display = 'none';
    factCard.style.display = 'block';
  }
});