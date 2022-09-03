"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.)
const players1 = game.players[0];
const players2 = game.players[1];

//2.)
const [gk, ...fieldPlayers] = [...players1];

//3.)
const allPlayers = [...players1, ...players2];

//4.)
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

//5.)
const { team1: team1, x: draw, team2: team2 } = game.odds;

//6.)
function printGoals(...x) {
  console.log(...x, `scored: ${x.length}`);
}

//7.)
console.log(
  `${
    (team2 > team1 && game.team2) || (team1 > team2 && game.team1)
  } is more likely to win the game`
);

printGoals(...game.scored);
console.log(team1, team2, draw);
console.log(players1Final);
console.log(allPlayers);
console.log(gk);
console.log(fieldPlayers);
