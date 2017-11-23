/*
1. car and cat
2. pop and prop
3. ferret, ferry, and ferrari
4. Any word ending in ious
5. A whitespace character followed by a dot, comma, colon, or semicolon
6. A word longer than six letters
7. A word without the letter e
*/

verify(/ca[r,t]s?/, ["my car", "bad cats"], ["camper", "high art"]);

verify(/pr?ops?/, ["pop culture", "mad props"], ["plop"]);

verify(/ferr[y,et,ari]/, ["ferret", "ferry", "ferrari"], ["ferrum", "transfer A"]);

verify(/ious\b/, ["how delicious", "spacious room"], ["ruinous", "consciousness"]);

verify(/\s[.,:,;]/, ["bad punctuation ."], ["escape the dot"]);

verify(/\w{7}/, ["hottentottententen"], ["no", "hotten totten tenten"]);

verify(/\b[^e\s]+\b/, ["red platypus", "wobbling nest"], ["earth bed", "learning ape"]);

function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  yes.forEach(function (s) {
    if (!regexp.test(s)) {
      console.log("Failure to match '" + s + "'");
    }
  });
  no.forEach(function (s) {
    if (regexp.test(s)) {
      console.log("Unexpected match for '" + s + "'");
    }
  });
}