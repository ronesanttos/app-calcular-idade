let day = document.getElementById('day')
let month = document.getElementById('month')
let year = document.getElementById('year')

let cardInput = document.querySelectorAll('.card-input')
let borderInput = document.getElementsByTagName('input')

let resDay = document.getElementById('res-day')
let resMonth = document.getElementById('res-month')
let resYear = document.getElementById('res-year')

let msgDay = document.getElementById('msgDay')
let msgMonth = document.getElementById('msgMonth')
let msgYear = document.getElementById('msgYear')

let date = new Date()
let currentYear = date.getFullYear();
let currentMonth = date.getMonth() + 1;
let currentDay = date.getDate();


function validateDay(day) {
    let validDay = false;

    if (day > 0 && day <= 31) {
        validDay = true;
        msgDay.innerText = ''

    }
    else {
        validDay = false
        msgDay.innerText = 'Day invalid!'

    }
    return (validDay);
}

function validateMonth(month) {
    let validMonth = false;
    if (month > 0 && month <= 12) {
        validMonth = true;
        msgMonth.innerText = ''

    }
    else if (month.toString().length == 0) {
        validMonth = false
        msgMonth.innerText = 'This field is required!'
    }

    else {
        validMonth = false
        msgMonth.innerText = 'Month invalid!'
    }

    return validMonth;
}

function validateYear(year) {
    let validYear = false;
    let date = new Date()
    let currentYear = date.getFullYear()
    if (year.toString().length <= 3) {
        validYear = false
        msgYear.innerText = 'Year invalid!'
    }
    else if (year > 0 && year <= currentYear) {
        validYear = true;
        msgYear.innerText = ''
    }

    else {
        validYear = false
        msgYear.innerText = 'This field is required!'
    }

    return validYear;
}


function calcular() {

    let day_number = Number(day.value)
    let month_number = Number(month.value)
    let year_number = Number(year.value)

    let somaYear = currentYear - year_number
    let somaMonth = currentMonth - month_number
    let somaDay = currentDay - day_number

    let veridiedDay = validateDay(day_number)
    let veridiedMonth = validateMonth(month_number)
    let veridiedYear = validateYear(year_number)


    // ajustar meses
    if (somaMonth < 0) {
        somaYear--;
        somaMonth += 12
    }

    //ajustar dias
    if (somaDay < 0) {
        const lastDayOfPreviousMonth = new Date(currentYear, currentMonth, 0).getDate()
        somaDay += lastDayOfPreviousMonth
        somaMonth--
    }
    if (somaMonth < 0) {
        somaMonth += 12
        somaYear--
    }

    if (!veridiedDay && !veridiedMonth && !veridiedYear) {
        cardInput.forEach(function (elemento) {
            elemento.style.color = 'red'
        })
        
        for(let i = 0; i < borderInput.length; i++ ){
            borderInput[i].style.border = '1px solid red'
        }
    }


    if (veridiedDay && veridiedMonth && veridiedYear) {
        cardInput.forEach(function (elemento) {
            elemento.style.color = 'black'
        })
        for(let i = 0; i < borderInput.length; i++ ){
            borderInput[i].style.border = '1px solid rgba(0, 0, 0, 0.233)'
        }
        msgDay.innerText = ''
        msgMonth.innerText = ''
        msgYear.innerText = ''
        resYear.innerText = somaYear
        resMonth.innerText = somaMonth
        resDay.innerText = somaDay
    }

}

