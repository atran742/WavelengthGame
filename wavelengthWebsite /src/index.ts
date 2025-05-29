const incrementBtn = document.getElementById('incrementBtn') as HTMLButtonElement;
const incrementBtn1 = document.getElementById('incrementBtn1') as HTMLButtonElement;
const resetBtn = document.getElementById('resetBtn') as HTMLButtonElement;
const counter1 = document.getElementById('counter1') as HTMLSpanElement
const counter2 = document.getElementById('counter2') as HTMLSpanElement

let count1 = 0;
let count2 = 0;

incrementBtn.addEventListener("click", function() {
    count1++;
    counter1.textContent = count1.toString();
});
incrementBtn1.addEventListener("click", function() {
    count2++;
    counter2.textContent = count2.toString();
});

/*
incrementBtn.addEventListener('click', () => {
    const currentCount = parseInt(counter1.textContent ?? '0', 10);
    counter1.textContent = (currentCount + 1).toString();
});

incrementBtn1.addEventListener('click', () => {
    const currentCount = parseInt(counter2.textContent ?? '0', 10);
    counter2.textContent = (currentCount + 1).toString();
});
*/

/*resetBtn.addEventListener('click', () => {
    counter1.textContent = '0';
    counter2.textContent = '0';
});*/

