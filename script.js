let container_info_gl = document.querySelector('.container_info_gl')
let name_city = document.getElementById('name_city')
let info_city = document.getElementById('info_city')

let Chukotka = document.getElementById('Chukotka')
let Yakutia = document.getElementById('Yakutia')
let Krosnoyarsk = document.getElementById('Krosnoyarsk')

function SizeDisplay(listCity){
    container_info_gl.style.display = 'flex'
    name_city.innerHTML = listCity.name
    info_city.innerHTML = listCity.info
}
function getInfoCity(nameCity){
    for(let i = 0; i < cities.length; i++){
        console.log(cities[i].id)
        if(cities[i].id == nameCity){
            console.log(cities[i].id)
            SizeDisplay(cities[i])
        }
    }
}
Krosnoyarsk.addEventListener('click',getInfoCity('Krosnoyarsk'))
