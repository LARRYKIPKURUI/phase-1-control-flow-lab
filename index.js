function scuberGreetingForFeet(ride) {
  if (ride <= 400) {
    return 'This one is on me!';
  } else if (ride > 400 && ride <= 2000) {
    return 'That will be twenty bucks.';
  } else if (ride > 2000 && ride <= 2500) {  // Now correctly handles 2001-2500 range
    return 'I will gladly take your thirty bucks.';
  } else if (ride > 2500) {
    return 'No can do.';
  }
}
console.log(scuberGreetingForFeet(199));
console.log(scuberGreetingForFeet(1500));
console.log(scuberGreetingForFeet(2100));
console.log(scuberGreetingForFeet(2501));

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

console.log(ternaryCheckCity('Pittsburgh'));
console.log(ternaryCheckCity('NYC'));

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}

console.log(switchOnCharmFromTip("generous"));       
console.log(switchOnCharmFromTip("not as generous")); 
console.log(switchOnCharmFromTip("cheap"));          