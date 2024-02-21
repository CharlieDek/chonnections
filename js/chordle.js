/*
⬛⬛⬛⬛⬛
🟨⬛⬛⬛🟨
🟨⬛⬛🟩🟨
🟩🟩🟩🟩🟩
*/

$("#wordle_input").focus();

const c_EMOJI_MAPPING = {
  "☁️": ["☁️","⛅", "☀️"],
  "🌱": ["🌱","🌾", "🫐", "🪻"],
  "👾": ["🦠","👨‍🚀", "🌏", "👾"],
  "🍇": ["🥒","🍯", "🧊", "🍇"],
  "🦄": ["🐉","🌞", "🦕", "🦄"],
  "📒": ["📗","📒", "📘", "📕"],
  "🐡": ["🦠","🐡", "🪼", "🐙"],
  "🤢": ["🤢","🫠", "🥶", "😈"],
}

// more ideas: blue stuff, water buffalo moose

// 🧿🔑🔳⬛️⬜️

function makeReplacements(s) {
  const themeArr = c_EMOJI_MAPPING[$("#themeSelect").val()];
  var greenReplace = themeArr[0]; // $("#blackSelect").val()
  var yellowReplace = themeArr[1];
  var blueReplace = themeArr[2];
  var purpleReplace = themeArr[3];

  greenReplace = s.replace(/🟩/g, greenReplace);
  yellowReplace = greenReplace.replace(/🟨/g, yellowReplace);
  blueReplace = yellowReplace.replace(/🟦/g, blueReplace);
  return blueReplace.replace(/🟪/g, purpleReplace);
}

function doReplacements() {
  var newText = $("#wordle_input").val().replace(/\n/g, "<br>");
  $("#result_picture").html(makeReplacements(newText));
}

$("#wordle_input").on('input',function(e){
  doReplacements();
});

$("#copyBtn").click( function(){
  var niceText = $("#result_picture").html().replace(/<br>/g, "\n").trim();
  navigator.clipboard.writeText(niceText);
//   $("#WaLink").show();
});

$("#WaLink").click( function(){
    window.open("https://wa.me/");
});

$( ".emojiSelect" ).change(function() {
  doReplacements();
});

doReplacements();