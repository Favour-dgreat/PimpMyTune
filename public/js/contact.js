// local reviews data
const reviews = [
    {
      id: 1,
      name: "DotCircle Labs",
    //   job: "web developer",
      img:
        "./images/Logo/dcl logo.png",
      text:
      "There's an urgent need in the industry for advertisements in the creative arts and PIMP MY TUNE bridges that gap and does it well."
    },
    {
      id: 2,
      name: "Outburst Media",
    //   job: "web designer",
      img:
        "./images/Logo/Outburst_Logo_PNG.png",
      text:
      "The most amazing part about the whole thing is there aren't many companies like this. I am confident that with what they were able to do for my company and with the skillset they possess, they'll soar in the industry."    },
    {
      id: 3,
      name: "Consumate Trader",
    //   job: "intern",
      img:
        "./images/Logo/Asset 6.png",
      text:
      "I was very pleased when I listened to the jingle this group of creative individuals created for my brand. The representation was very accurate and needed. They're a recommendation any day anytime."    },
    
  ];
  
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", () => {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  
  // show next person
  nextBtn.addEventListener("click", () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  
  // show prev person
  prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  