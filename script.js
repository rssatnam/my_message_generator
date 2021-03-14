// data
const horoscope = {
  signInfo: ["star", "moon", "sun", "comet"],
  fortuneOutput: [
    "terrible luck",
    "bad luck",
    "ok luck",
    "good luck",
    "great luck",
  ],
  advice: ["go out and eat", "not read this", "play more", "trust no one"],
};

// random selection from array
const randomSelection = (arr) => arr[Math.floor(Math.random() * arr.length)];

const generateHoroscope = () => {
  let strArray = [];

  for (const info in horoscope) {
    // console.log(info);
    let itemSelection = randomSelection(horoscope[info]);
    switch (info) {
      case "signInfo":
        strArray.push(`Your sign is ${itemSelection}.`);
        break;
      case "fortuneOutput":
        strArray.push(`You are having ${itemSelection}.`);
        break;
      case "advice":
        strArray.push(`Your sign is ${itemSelection}.`);
        break;
      default:
        console.log(`Something went wrong!`);
        break;
    }
  }

  console.log(strArray.join("\n\r"));
};

generateHoroscope();
