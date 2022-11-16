const daily = document.getElementById('daily')
const weekly = document.getElementById('weekly')
const monthly = document.getElementById('monthly')

const card = document.getElementById('card')
// Work
const work = document.getElementById('work_hors')
const horas = document.getElementById('horas')

// Play
const playH1Horas = document.getElementById('playH1Horas')
const playSpanHoras = document.getElementById('playSpanHoras')

// Study
const studyH1Horas = document.getElementById('studyH1Horas')
const studySpanHoras = document.getElementById('studySpanHoras')

// Exercise
const ExerciseH1Horas = document.getElementById('ExerciseH1Horas')
const ExerciseSpanHoras = document.getElementById('ExerciseSpanHoras')

daily.addEventListener('click', () => {
    daily.classList.toggle('active')
    weekly.classList.remove('active')
    monthly.classList.remove('active')
    // work
    work.innerHTML = '5hrs';
    horas.innerHTML = '7hrs'
    // Play
    playH1Horas.innerHTML = '1hr'
    playSpanHoras.innerHTML = '2hrs'
    // Study
    studyH1Horas.innerHTML = '0hrs'
    studySpanHoras.innerHTML = '1hr'
    // Exercise
    ExerciseH1Horas.innerHTML = '1hr'
    ExerciseSpanHoras.innerHTML = '1hr'
})
weekly.addEventListener('click', () => {
    weekly.classList.toggle('active')
    daily.classList.remove('active')
    monthly.classList.remove('active')
    // work
    work.innerHTML = '32hrs';
    horas.innerHTML = '36hrs';
    // Play
    playH1Horas.innerHTML = '10hrs'
    playSpanHoras.innerHTML = '8hrs'
    // Study
    studyH1Horas.innerHTML = '4hrs'
    studySpanHoras.innerHTML = '7hr'
    // Exercise
    ExerciseH1Horas.innerHTML = '4hrs'
    ExerciseSpanHoras.innerHTML = '5hrs'
})
monthly.addEventListener('click', () => {
    monthly.classList.toggle('active')
    daily.classList.remove('active')
    weekly.classList.remove('active')
    // work
    work.innerHTML = '103hrs';
    horas.innerHTML = '128hrs';
    // Play
    playH1Horas.innerHTML = '23hrs'
    playSpanHoras.innerHTML = '29hrs'
    // Study
    studyH1Horas.innerHTML = '13hrs'
    studySpanHoras.innerHTML = '19hr'
    // Exercise
    ExerciseH1Horas.innerHTML = '11hrs'
    ExerciseSpanHoras.innerHTML = '18hrs'
})