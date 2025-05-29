const incrementBtn = document.getElementById('incrementBtn')
const incrementBtn1 = document.getElementById('incrementBtn1')
const decrementBtn = document.getElementById('decrementBtn')
const decrementBtn1 = document.getElementById('decrementBtn1')
const resetBtn = document.getElementById('resetBtn')
const counter1 = document.getElementById('counter1')
const counter2 = document.getElementById('counter2')
let count1 = 0;
let count2 = 0;
const randBut = document.querySelector('.RandBut');
const testDis = document.getElementById('test')
const val4 = document.getElementById('hour-hand')
let rand = 0;
const val3 = document.getElementById('hand3')
const val32 = document.getElementById('hand32')
const val2 = document.getElementById('hand2')
const val22 = document.getElementById('hand22')
const stateDisp = document.getElementById('StateDisp')




decrementBtn.addEventListener('click', () => {
    if (count1<1)
        counter1.textContent ='0';
    else{
        count1--
        counter1.textContent = count1.toString();
    }
});

decrementBtn1.addEventListener('click', () => {
    if (count2<1)
        counter2.textContent ='0';
    else{
        count2--
        counter2.textContent = count2.toString();
    }
});

incrementBtn.addEventListener("click", function() {
    count1++;
    counter1.textContent = count1.toString();
});
incrementBtn1.addEventListener("click", function() {
    count2++;
    counter2.textContent = count2.toString();
});


resetBtn.addEventListener('click', () => {
    counter1.textContent = '0';
    counter2.textContent = '0';
    val4.style.transform = `rotate(90deg)`;
    val3.style.transform = `rotate(98.2deg)`;
    val32.style.transform = `rotate(82.2deg)`;
    val2.style.transform = `rotate(106.4deg)`;
    val22.style.transform = `rotate(73.6deg)`;
});

randBut.addEventListener('click', () => {
    rand =  (Math.floor(Math.random() * 20 )+1).toString();
    //testDis.textContent = rand;
    angle4 = rand* 8.2;
    angle3 = angle4-8.2;
    angle2 = angle4+8.2;
    angle1 = angle4-16.4;
    angle0 = angle4+16.4;
    val4.style.transform = `rotate(${angle4}deg)`;
    val3.style.transform = `rotate(${angle3}deg)`;
    val32.style.transform = `rotate(${angle2}deg)`;
    val2.style.transform = `rotate(${angle1}deg)`;
    val22.style.transform = `rotate(${angle0}deg)`;
});

function toggleFan() {

    const fan = document.getElementById('fan');
    fan.classList.toggle('open');

}

let words = ["Zesty vs. bland",
"Whimsical vs. stoic",
"Quiet vs. bombastic\n" ,
"Quirky vs. mundane\n" ,
"Lively vs. boring\n" ,
"Loud vs. quiet\n" ,
"Explosive vs. unreactive\n" ,
"Durable vs. fragile\n",
"Annoying vs. entertaining\n",
"Simplistic vs. complex", "Good Website vs. Bad Website",
    "Necessary Habit vs. Unnecessary Habit", "Good Pet - Bad Pet", "Good Pet - Bad Pet",
    "Useful Tech - Useless Tech", "Impressive Superhero - Pathetic Superhero",
    "Waste of Time - Good Use of Time",
    "Snack - Meal", "Ethical to eat - Unethical to eat",
    "Sauce - Food", "Ugly Man - Beautiful Man", "Dark - Light", "Most Evil Company - Least Evil company",
    "Useless body part - useful body part", "Good pizza topping - bad pizza topping",
    "Nerd hobby - Chad hobby", "Sweet - Creepy", "sane - Insane", "Cool - Lame",
    "Near - Far", "Best country - Worst country", "Best genre - worst genre",
    "Left brain - right brain",
    "SFW emoji - NSFW emoji",
    "Best temperature - worst temperature",
    "Interesting school class - Dull school class",
    "Most interestingly shaped state - least interestingly shaped state",
    "Best color - Worst color", "Funny town name - Unfunny town name", "Best college mascot - Worst college mascot",
    "Painful - Pleasurable"
]

function getState(){
   const rand =  (Math.floor(Math.random() * words.length));

    stateDisp.textContent =  words[rand];
}