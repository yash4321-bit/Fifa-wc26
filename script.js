const fixtures = [
  "June 11, 2026 - Mexico vs South Africa",
  "June 12, 2026 - Canada vs TBD",
  "June 12, 2026 - USA vs TBD"
];

const broadcasters = [
  "India - Zee5 / official TV partner",
  "USA - FOX Sports",
  "UK - BBC / ITV"
];

document.getElementById("fixtures").innerHTML =
  fixtures.map(match => `<p>${match}</p>`).join("");

document.getElementById("broadcasters").innerHTML =
  broadcasters.map(channel => `<p>${channel}</p>`).join("");

document.getElementById("liveScore").innerHTML =
  "Live score API will be connected here";
