// Character Frequency Counter: Take a string input and show how many times each character occurs (use an object/map to count).

const freqCounter = (str) => {
  let freq = {};

  for (let word of str) {
    if (freq[word]) {
      freq[word] += 1;
    } else {
      freq[word] = 1;
    }
  }
  return freq;
};

const frequency = freqCounter("Hello world");
console.log(frequency);
