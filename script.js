// Define the sequence with each light's color and duration (in milliseconds)
const lights = [
    { color: "red", duration: 1500 },    
    { color: "green", duration: 1500 }, 
    { color: "yellow", duration: 1500 } 
  ];
  
  let currentIndex = 0; 
  
  function changeLight() {
    document.querySelectorAll('.light').forEach(light => light.classList.remove('active'));

    const currentLight = lights[currentIndex];
    document.querySelector(`.light.${currentLight.color}`).classList.add('active');
  
    currentIndex = (currentIndex + 1) % lights.length;

    setTimeout(changeLight, currentLight.duration);
  }
  changeLight();
  