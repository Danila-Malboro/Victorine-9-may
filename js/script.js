//Массив с вопросами, вариантами ответов и правильными ответами
let Username = prompt('Ваше имя? ');
let questions = [
    {
        question:"1.	С какого по какой год шла Великая Отечественная Война? ",
        correctAnswer: "1941 г. - 1945 г.",    
    },
    {
        question:"2.	Какого числа произошло вторжение Германии в СССР? ",
        options:["22 июня 1948 г.", "19 июня 1941 г.", "22 июня 1941 г.", "22 июня 228 г."  ],
        correctAnswer: "CRMP",    
    },
    {
        question:"3.	Кто выступил по радио с официальным обращением к гражданам СССР, сообщив о нападении Германии на СССР? ",
        options:["Молотов", "Путин", "Гитлер", "Сталин"  ],
        correctAnswer: "Молотов",    
    },
    {
        question:"4.	Какой подвиг совершил Александр Матросов?",
        options:["Закрыл собой амбразуру", "Закрыл собой бойца", "Закрыл собой бомбу", "Закрыл собой грузовик"  ],
        correctAnswer: "Закрыл собой амбразуру",    
    },
    {
        question:"5.	Где в феврале 1945 года прошла встреча Сталина, Рузвельта и Черчилля? ",
        options:["Ялта", "Крым", "Сибирь", "Москва"  ],
        correctAnswer: "Ялта",    
    },
    {
        question:"6.	В каком году впервые с распада СССР прошел парад в день 9 мая? ",
        options:["1995 г.", "1943 г.", "1445 г.", "1235 г."  ],
        correctAnswer: "1995 г.",    
    },
    {
        question:"7.	Какого числа Великобритания и Франция отмечают День Победы? ",
        options:["3 февраля", "1 апреля", "8 мая", "9 мая"  ],
        correctAnswer: "8 мая",    
    },
    {
        question:"8.	Как назывался план вторжения в СССР? ?",
        options:["план «Ответ врагам»", "план «Удар»", "план «Перехват»", "план «Барбаросса»"  ],
        correctAnswer: "план «Барбаросса»",    
    },
    {
        question:"9.	Защитой какого города прославились панфиловцы? ",
        options:["Москва", "Тюмень", "Санкт - Петербург", "Киев"  ],
        correctAnswer: "Москва",    
    },
    {
        question:"10.	Когда началось контрнаступление под Москвой",
        options:["1 декабря 1941 года", "1 декабря 1980 года", "5 декабря 1941 года", "5 декабря 1940 года"  ],
        correctAnswer: "CRMP",    
    },
    {
        question:"11.	Сколько продолжалась блокада Ленинграда?",
        options:["872 дня", "870 дня", "798 дней", "873 дня"  ],
        correctAnswer: "872 дня",    
    },
    {
        question:"12.	Назовите самое крупное танковое сражение в истории, имевшее место во время Великой Отечественной Войны ",
        options:["Курская битва", "Московская битва", "Сибирская битва", "Сталинская битва"  ],
        correctAnswer: "Курская битва",    
    },
    {
        question:"13.	В каком году был зажжен Вечный огонь на Могиле Неизвестного Солдата в Москве?",
        options:["1967", "1823", "1180", "1942"  ],
        correctAnswer: "1967",    
    },
    {
        question:"14.	Кто возглавлял Генеральный штаб СССР с 1942 по 1945 г.? ",
        options:["Василевский", "Сталин", "Путин", "Гитлер"  ],
        correctAnswer: "Василевский",    
    },
    {
        question:"15.	Как называлась операция по освобождению Белоруссии",
        options:["Багратион", "Московский", "Трум", "Враг Народа"  ],
        correctAnswer: "Багратион",    
    }
]
let currentQuestion = 0 ;// Текущий вопрос
let correctAnswers = 0 ;// Количество правильных ответов

// Функция для отображения  текущего вопроса и вариантов ответов  
function displayQuestion( ) {
    let questionElement = document.getElementById("question"); // Получить блок для размещения вопроса
    // Размещаем вопрос на странице
    questionElement.textContent = ` Вопрос ${currentQuestion + 1}: ${questions[currentQuestion].question} `;
    let optionsElement = document.getElementById("options"); // Получить блок для размещения кнопок
    optionsElement.innerHTML = ""; //Очищаем содержимое блока optionsElement   

    let answerInput = document.getElementById("answerInput");
    answerInput.innerHTML = "";

if('options' in questions[currentQuestion]){
    //Получить массив ответов 
    let optionsArray = questions[currentQuestion].options;

    //Создать кнопки с вариантами ответов и привязать к ним функцию перехода к следующему вопросу
    optionsArray.forEach((option) => {
        let button = document.createElement("button");
        optionsElement.append(button);
        button.textContent = option;
        button.classList.add('question_btn');
    });
} else {
    let answerInput = document.getElementById('answerInput');
    let input = document.createElement('input');
    let btn = document.createElement('button')
    btn.textContent = "Отправить ответ";
    answerInput.append(input, btn);
    btn.addEventListener("click", (e)=>{
        nextQuestion(input.value);
    })
}
        //Добавить обработчик события на блок с кнопками
    optionsElement.addEventListener("click", (e) => {
        //Записать переменную элемент на который кликнули
        let target = e.target;
        //Вызвать функцию перехода к следующему вопросу и передать ей текстовое содержимое кнопки по которой кликнули
        nextQuestion(target.textContent);
    }, {once : true} )
}
// Функция перехода к следующему вопросу
function nextQuestion(answer){
    if(answer === questions[currentQuestion].correctAnswer) {
        correctAnswers++;
    }
    currentQuestion++;
    if(currentQuestion < questions.length) {
        displayQuestion();
    } else {
       displayResult();
    }
}

function nextQuestion(answer) {
    if(answer === questions[currentQuestion].correctAnswer) {
        correctAnswers++;
    }
    currentQuestion++;
    if(currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayResult();
sada
    }
}


function displayResult() {
    let questionElement = document.getElementById("question");
    let optionsElement = document.getElementById("options");
    let resultElement = document.getElementById("result");
    questionElement.style.display = "none";
    optionsElement.style.display = "none";

    
    let percentage = ((correctAnswers / questions.length) * 100).toFixed(0); // Округляем до двух знаков после запятой
    if(Text.percentage > 5){
        percentage.display = "none";
    }
    let grade = "";
    if (percentage >= 90) {
        grade = "5";
    } else if (percentage >= 70) {
        grade = "4";
    } else if (percentage >= 50) {
        grade = "3";
    } else {
        grade = "2";
    }
    resultElement.textContent = `${Username} , ваша оценка: ${grade} Правильных ответов: ${correctAnswers} из ${questions.length} (${percentage}%)`;
}

displayQuestion();








