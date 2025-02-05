const facts = [
    "the first computer bug was an actual bug - a moth trapped in a relay of a harvard university computer in 1947",
    "the internet weighs 50 grams, as much as a strawberry",
    "Samsung started as a grocery store in 1938",
    "the first computer mouse was rectangular and made of wood",
    "the first computer virus was created in 1971 and was called 'Creeper'",
    "domain name registration was free until 1995",
    "the first alarm clock could only ring at one time, 4am",
    "CAPTCHA stands for: Completely Automated Public Turing test to tell Computers and Humans Apart",
    "over 5 billion snaps are sent on Snapchat every day",
    "more than 16% of Facebook accounts are fake or duplicates",
    "about 319.6 billion emails are sent and received each day",
    "Bill Gates' house was designed using a Mac computer",
    "the first ever VCR was the size of a piano",
    "the first domain name registered was symbolics.com",
    "the first ever text message was sent on the 3rd of December in 1992, it said 'Merry Christmas'",
    "the first ever webcam was used to watch a coffee pot",
    "the most popular search query on Bing is 'Google'",
    "the first search engine was called Archie",
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