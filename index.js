async function getWeather() {
  const apiKey = '0f6ba5fef0c4e23443b104626a843300';
  const city = document.getElementById('cityInput').value;
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('City not found');
    }

    const data = await response.json();
    
    document.getElementById('cityName').textContent = `Weather in ${data.name}`;
    document.getElementById('temp').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('desc').textContent = `Condition: ${data.weather[0].description}`;
    
  } catch (error) {
    alert(error.message);
  }
}