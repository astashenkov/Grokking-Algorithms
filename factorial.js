// Сhapter №3

function fuctorial(number) {
    return (number === 1) ? 1 : (number * fuctorial(number - 1));
}

console.log(fuctorial(9));