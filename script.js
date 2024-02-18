let container_info_gl = document.querySelector('.container_info_gl')
let container_trey = document.querySelector('.container_trey')
let name_city = document.getElementById('name_city')
let info_city = document.getElementById('info_city')
let close_display_info = document.getElementById('close_display_info')


let Chukotka = document.querySelectorAll('.CHUKOTKA')
let Yakutia = document.querySelectorAll('.YAKUTIA')
let Krosnoyarsk = document.querySelectorAll('.KRASNOYARSK')
let Yamalonenezkii_ao = document.querySelectorAll('.YAMALONENEZKII_AO')
let Hantamansiiskiy_ao = document.querySelectorAll('.HANTAMANSIISKIY_AO')
let Irkutsk = document.querySelectorAll('.IRKUTSK')
let Amurskay_oblast = document.querySelectorAll('.AMURSKAY_OBLAST')
let Komi = document.querySelectorAll('.KOMI')
let Tayava = document.querySelectorAll('.TAYVA')
let Altay = document.querySelectorAll('.ALTAY')
let Tomskay_oblast = document.querySelectorAll('.TOMSKAY_OBLAST')
let Altaiskii_kray62 = document.querySelectorAll('.ALTAISKII_KRAY62')

function SizeDisplay(listCity){
    console.log(listCity)
    container_info_gl.classList.add('open')
    name_city.innerHTML = listCity.name
    info_city.innerHTML = listCity.info
}
function getInfoCity(nameCity){
    for(let i = 0; i < cities.length; i++){
        if(cities[i].id == nameCity){
            console.log(cities[i].id)
            SizeDisplay(cities[i])
        }
    }
}

$('#close_display_search').click(function(){
    container_trey.classList.add('close');
})
$('#open_display_search').click(function(){
    // container_trey.style.display = 'flex'
    container_trey.classList.remove('close')
    container_trey.classList.add('open');
    // $(container_trey).on('transitionend',function(){
    // })
})
$(close_display_info).click(function(){
    container_info_gl.classList.remove('open')
})

// Krosnayarsk___________________________________________
for(let i = 0; i < Krosnoyarsk.length; i++){
    $(Krosnoyarsk[i]).click(function(){
        getInfoCity('Krosnoyarsk')
    })
}
// Yakutia_______________________________________________
for(let i = 0; i < Yakutia.length; i++){
    $(Yakutia[i]).click(function(){
        getInfoCity('Yakutia')
    })
}
// Chukotka_______________________________________________
for(let i = 0; i < Chukotka.length; i++){
    $(Chukotka[i]).click(function(){
        getInfoCity('Chukotka')
    })
}
// Yamalonenezkii_ao_______________________________________________
for(let i = 0; i < Yamalonenezkii_ao.length; i++){
    $(Yamalonenezkii_ao[i]).click(function(){
        getInfoCity('Yamalonenezkii_ao')
    })
}
// Hantamansiiskiy_ao_______________________________________________
for(let i = 0; i < Hantamansiiskiy_ao.length; i++){
    $(Hantamansiiskiy_ao[i]).click(function(){
        getInfoCity('Hantamansiiskiy_ao')
    })
}
// Irkutsk_______________________________________________
for(let i = 0; i < Irkutsk.length; i++){
    $(Irkutsk[i]).click(function(){
        getInfoCity('Irkutsk')
    })
}
// Amurskay_oblast_______________________________________________
for(let i = 0; i < Amurskay_oblast.length; i++){
    $(Amurskay_oblast[i]).click(function(){
        getInfoCity('Amurskay_oblast')
    })
}
// Komi_______________________________________________
for(let i = 0; i < Komi.length; i++){
    $(Komi[i]).click(function(){
        getInfoCity('Komi')
    })
}
// Tayava_______________________________________________
for(let i = 0; i < Tayava.length; i++){
    $(Tayava[i]).click(function(){
        getInfoCity('Tayava')
    })
}
// Altay_______________________________________________
for(let i = 0; i < Altay.length; i++){
    $(Altay[i]).click(function(){
        getInfoCity('Altay')
    })
}
// Tomskay_oblast_______________________________________________
for(let i = 0; i < Tomskay_oblast.length; i++){
    $(Tomskay_oblast[i]).click(function(){
        getInfoCity('Tomskay_oblast')
    })
}
// Altaiskii_kray62_______________________________________________
for(let i = 0; i < Altaiskii_kray62.length; i++){
    $(Altaiskii_kray62[i]).click(function(){
        getInfoCity('Altaiskii_kray62')
    })
}