const fs = require("fs");

const numberWords = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const array = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .filter((a) => a);

let response = array
  .map((s) =>
    [
      ...s.matchAll(
        /((?=(one|two|three|four|five|six|seven|eight|nine))|\d)/gm // for the first one removekeep only the \d
      ),
    ].map((a) => a.filter((i) => i)[0])
  )
  .map((s) =>
    parseInt(
      [s[0], s[s.length - 1]]
        .map((n) =>
          numberWords.includes(n) ? (numberWords.indexOf(n) + 1).toString() : n
        )
        .join(""),
      10
    )
  )
  .reduce((a, b) => a + b);

console.log(response);
