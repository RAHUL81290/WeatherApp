var inputText=document.querySelector(".textinput")
document.querySelector("i").addEventListener('click',function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?appid=8f308be14ad56d744ced1724ec39b82d&units=metric&q="+inputText.value)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          var mycity=data.name
          var Tempdata=data.main.temp
          var myDisc=data.weather[0].description
          var iconid=data.weather[0].icon
          var iconurl="http://openweathermap.org/img/wn/"+iconid+"@2x.png"
          document.querySelector(".temptext").innerHTML=Tempdata+" °C"
          document.querySelector(".citytext").innerHTML=mycity
          document.querySelector(".disctext").innerHTML=myDisc
          document.querySelector(".image").innerHTML=`<img src="${iconurl}" style= 'height:100px; width:100px;'/>`
          document.querySelector(".container").classList.add("containeractive")
        })
        
    });
    
