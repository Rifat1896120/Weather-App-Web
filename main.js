
var button = document.querySelector('button')




button.addEventListener('click',()=>{
    var h3 = document.querySelector('h3')
    var h1 = document.querySelector('.temp')
    var img = document.querySelector('img')
    var dsc = document.querySelector('p')
    var input = document.querySelector("input").value
    var kalvin = 273.15
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=af1bdf3712cd947157d347f53a794631`
      )
        .then((response) => response.json())
        .then((data) => {
            var names = data.name
            var p = data.main.temp
            var id = data.weather[0].description
            var icon = data.weather[0].icon
      console.log(data);
            var to = Math.round(p) 

let t = to-kalvin
            let temp= t.toFixed(0)
            h3.innerHTML = 'Weather in' +" "+ names       
            dsc.innerHTML =  id      
            img.src = `http://openweathermap.org/img/wn/${icon}@2x.png`       
            h1.innerHTML =  temp +" "+ "<sup>o</sup>" + 'C'       
        }).catch(res=> alert('Please enter right country name'))
    
       
})

