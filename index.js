//function exists
//uses the default activity 'roller-skate' when no arguments are passed
//permits the default activity to be overriden

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

console.log(saturdayFun());
console.log(saturdayFun("bathe my dog"));

//function exists
//uses the default activity 'go to the office' when no arguments are passed
//permits the default activity to be overriden

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

console.log(mondayWork());

//function exists
//when initialized with '*' creates a function that, when called, wraps an adjective in a highlight
//when initialized with '||' creates a function that, when called, wraps an adjective in a highlight

function wrapAdjective(symbol) {
    return function(adjective) {
        return `You are ${symbol}${adjective}${symbol}!`;
    };
}

const wrappedWithStars = wrapAdjective("*");
console.log(wrappedWithStars("a hard worker"));

const wrappedWithBars = wrapAdjective("||");
console.log(wrappedWithBars("a dedicated person"));