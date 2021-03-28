let form = document.querySelector(' #input')
form.onsubmit = (e) => {
    e.preventDefault()
    let city = form.city.value

    getData(city)
    form.city.value = ''
}
let getData = async (city) => {
   let rain = document.querySelector('#rainy')
   let clouds = document.querySelector('#clouds')
   let sunny = document.querySelector('#sunny')
   let mist = document.querySelector('#mist')
   let clear = document.querySelector('#clear')
    let preData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=527b6c3687687bb1de65dd88d9808cfa`)
    let data = await preData.json()
    console.log(data);
    let feelLike = data.weather[0].main
    document.querySelector('.main').innerHTML = feelLike
    let temp = Math.ceil(Number(data.main.temp) - 273)

    document.querySelector('.temp').innerHTML = temp + '°C'

    document.querySelector('.city').innerHTML = data.name
    if (feelLike == 'Rain') {
        rain.style.display = 'inline'
        clouds.style.display = 'none'
        sun.style.display = 'none'
        mist.style.display = 'none'
        clear.style.display = 'none'
    }
    if (feelLike == 'Clouds') {
        clouds.style.display = 'inline'
        rain.style.display = 'none'
        sun.style.display = 'none'
        mist.style.display = 'none'
        clear.style.display = 'none'
    }
    if (feelLike == 'Sunny') {
        clouds.style.display = 'none'
        rain.style.display = 'none'
        sunny.style.display = 'inline'
        mist.style.display = 'none'
        clear.style.display = 'none'
    }
    if (feelLike == 'Mist') {
        clouds.style.display = 'none'
        rain.style.display = 'none'
        sunny.style.display = 'none'
        mist.style.display = 'inline'
        clear.style.display = 'none'
    }
    if (feelLike == 'Clear') {
        clouds.style.display = 'none'
        rain.style.display = 'none'
        sunny.style.display = 'none'
        mist.style.display = 'none'
        clear.style.display = 'inline'
    }

}