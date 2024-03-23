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
let Arhangelskay_oblast1 = document.querySelectorAll('.ARHANGELSKAY_OBLAST1')
let Astrahanskay_oblast2 = document.querySelectorAll('.ASTRAHANSKAY_OBLAST2')
let Belgorodskay_oblast3 = document.querySelectorAll('.BELGORODSKAY_OBLAST3')
let Branskay_oblast4 = document.querySelectorAll('.BRANSKAY_OBLAST4')
let Vladimirskay5 = document.querySelectorAll('.VLADIMIRSKAY5')
let Volgogradsay_oblast6 = document.querySelectorAll('.VOLGOGRADSAY_OBLAST6')
let Vologodskay_oblast7 = document.querySelectorAll('.VOLOGODSKAY_OBLAST7')

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
// Arhangelskay_oblast1 _______________________________________________
for(let i = 0; i < Arhangelskay_oblast1.length; i++){
    $(Arhangelskay_oblast1[i]).click(function(){
        getInfoCity('Arhangelskay_oblast1')
    })
}
// Astrahanskay_oblast2 _______________________________________________
for(let i = 0; i < Astrahanskay_oblast2.length; i++){
    $(Astrahanskay_oblast2[i]).click(function(){
        getInfoCity('Astrahanskay_oblast2')
    })
}
// Belgorodskay_oblast3 _______________________________________________
for(let i = 0; i < Belgorodskay_oblast3.length; i++){
    $(Belgorodskay_oblast3[i]).click(function(){
        getInfoCity('Belgorodskay_oblast3')
    })
}
// Branskay_oblast4 _______________________________________________
for(let i = 0; i < Branskay_oblast4.length; i++){
    $(Branskay_oblast4[i]).click(function(){
        getInfoCity('Branskay_oblast4')
    })
}
// Vladimirskay5 _______________________________________________
for(let i = 0; i < Vladimirskay5.length; i++){
    $(Vladimirskay5[i]).click(function(){
        getInfoCity('Vladimirskay5')
    })
}
// Volgogradsay_oblast6 _______________________________________________
for(let i = 0; i < Volgogradsay_oblast6.length; i++){
    $(Volgogradsay_oblast6[i]).click(function(){
        getInfoCity('Volgogradsay_oblast6')
    })
}
// Vologodskay_oblast7 _______________________________________________
for(let i = 0; i < Vologodskay_oblast7.length; i++){
    $(Vologodskay_oblast7[i]).click(function(){
        getInfoCity('Vologodskay_oblast7')
    })
}