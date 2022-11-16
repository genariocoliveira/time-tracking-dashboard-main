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

// Social
const socialH1Horas = document.getElementById('socialH1Horas')
const socialSpanHoras = document.getElementById('socialSpanHoras')

// Self Care
const selfH1Horas = document.getElementById('selfH1Horas')
const selfSpanHoras = document.getElementById('selfSpanHoras')


daily.addEventListener('click', () => {
    daily.classList.toggle('active')
    weekly.classList.remove('active')
    monthly.classList.remove('active')
    // work
    work.innerHTML = '5hrs';
    horas.innerHTML = 'Last days - 7hrs'
    // Play
    playH1Horas.innerHTML = '1hr'
    playSpanHoras.innerHTML = 'Last days - 2hrs'
    // Study
    studyH1Horas.innerHTML = '0hrs'
    studySpanHoras.innerHTML = 'Last days - 1hr'
    // Exercise
    ExerciseH1Horas.innerHTML = '1hr'
    ExerciseSpanHoras.innerHTML = 'Last days - 1hr'
    // Social
    socialH1Horas.innerHTML = '1hr'
    socialSpanHoras.innerHTML = 'Last days - 3hrs'
    // Self Care
    selfH1Horas.innerHTML = '0hrs'
    selfSpanHoras.innerHTML = 'Last days - 1hr'
})
weekly.addEventListener('click', () => {
    weekly.classList.toggle('active')
    daily.classList.remove('active')
    monthly.classList.remove('active')
    // work
    work.innerHTML = '32hrs';
    horas.innerHTML = 'Last weeks - 36hrs';
    // Play
    playH1Horas.innerHTML = '10hrs'
    playSpanHoras.innerHTML = 'Last weeks - 8hrs'
    // Study
    studyH1Horas.innerHTML = '4hrs'
    studySpanHoras.innerHTML = 'Last weeks - 7hr'
    // Exercise
    ExerciseH1Horas.innerHTML = '4hrs'
    ExerciseSpanHoras.innerHTML = 'Last weeks - 5hrs'
    // Social
    socialH1Horas.innerHTML = '5hrs'
    socialSpanHoras.innerHTML = 'Last weeks - 10hrs'
    // Self Care
    selfH1Horas.innerHTML = '2hrs'
    selfSpanHoras.innerHTML = 'Last weeks - 2hr'
})
monthly.addEventListener('click', () => {
    monthly.classList.toggle('active')
    daily.classList.remove('active')
    weekly.classList.remove('active')
    // work
    work.innerHTML = '103hrs';
    horas.innerHTML = 'Last monthly - 128hrs';
    // Play
    playH1Horas.innerHTML = '23hrs'
    playSpanHoras.innerHTML = 'Last monthly - 29hrs'
    // Study
    studyH1Horas.innerHTML = '13hrs'
    studySpanHoras.innerHTML = 'Last monthly - 19hr'
    // Exercise
    ExerciseH1Horas.innerHTML = '11hrs'
    ExerciseSpanHoras.innerHTML = 'Last monthly - 18hrs'
    // Social
    socialH1Horas.innerHTML = '21hrs'
    socialSpanHoras.innerHTML = 'Last monthly - 23hrs'
    // Self Care
    selfH1Horas.innerHTML = '7hrs'
    selfSpanHoras.innerHTML = 'Last monthly - 11hr'
})