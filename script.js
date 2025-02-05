const facts = [
    "there are loads of facts here, about almost everything!",
    "we have so many categories, to change category click the 'facts' button",
    "have fun learning new facts!",
    "to get started, click the facts button and choose a category",
    "every fact has been manually entered and verified",
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