var incrementBtn = document.getElementById('incrementBtn');
var incrementBtn1 = document.getElementById('incrementBtn1');
var resetBtn = document.getElementById('resetBtn');
var counter1 = document.getElementById('counter1');
var counter2 = document.getElementById('counter2');
incrementBtn.addEventListener('click', function () {
    var _a;
    var currentCount = parseInt((_a = counter1.textContent) !== null && _a !== void 0 ? _a : '0', 10);
    counter1.textContent = (currentCount + 1).toString();
});
incrementBtn1.addEventListener('click', function () {
    var _a;
    var currentCount = parseInt((_a = counter2.textContent) !== null && _a !== void 0 ? _a : '0', 10);
    counter2.textContent = (currentCount + 1).toString();
});
resetBtn.addEventListener('click', function () {
    counter1.textContent = '0';
    counter2.textContent = '0';
});
