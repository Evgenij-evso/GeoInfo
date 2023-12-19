let container_info_gl = document.querySelector('.container_info_gl')
let container_trey = document.querySelector('.container_trey')
let name_city = document.getElementById('name_city')
let info_city = document.getElementById('info_city')
let close_display_info = document.getElementById('close_display_info')
let close_display_search = document.getElementById('close_display_search')

let Chukotka = document.getElementById('Chukotka')
let Yakutia = document.getElementById('Yakutia')
let Krosnoyarsk = document.querySelectorAll('.KROSNAYARSK')

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
close_display_search.addEventListener('click',function(){
    container_trey.style.display = 'none'
})
$('#open_display_search').click(function(){
    container_trey.style.display = 'flex'
})
close_display_info.addEventListener('click',function(){
    container_info_gl.style.display = 'none'
})

// Krosnayarsk_______________________________________________
for(let i = 0; i < Krosnoyarsk.length; i++){
    $(Krosnoyarsk[i]).click(function(){
        getInfoCity('Krosnoyarsk')
    })
}
