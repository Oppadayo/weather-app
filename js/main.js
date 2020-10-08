

navigator.geolocation.getCurrentPosition((position =>{
    const pos = {
        lat: Math.round(position.coords.latitude),
        lng: Math.round(position.coords.longitude),
    },
    
    api = {
        key: 'b214b715505c2a20762a26e98b4cfb64',
        base: 'api.openweathermap.org/data/2.5/'
    }


const main = document.querySelector('main')


getWeather()

async function getWeather(){
   const resp = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${pos.lat}&lon=${pos.lng}&units=metric&appid=${api.key}&lang=pt_br`)
   const respData = await resp.json()
   
   console.log(pos.lat)

   showWeather(respData)  
  
}

const date = (d) =>{
    
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    let days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day}, ${date} de ${month} de ${year}`
}


function showWeather(weather){

    main.innerHTML = ''    
        
        const weatherEl = document.createElement('div')       
 
        weatherEl.classList.add('card')

        weatherEl.innerHTML = `
            <p>${weather.name}</p>
            <span class="date">${date(new Date())}</span>
            
             <h1>${Math.round(weather.main.temp)}°</h1> 
             <span>${weather.weather[0].description}</span>
             `
 
        main.appendChild(weatherEl)
}

}))