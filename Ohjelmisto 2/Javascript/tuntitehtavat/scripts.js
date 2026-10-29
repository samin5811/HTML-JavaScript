console.log('Ohjelma alkaa!')
const etunimi = prompt('Kirjoita etunimesi')
const sukunimi = prompt('Kirjoita sukunimesi')
document.querySelector('#nimet').innerHTML=`${etunimi} ${sukunimi}`
console.log('Ohjelma loppuu!')

console.log('Ohjelma alkaa!')
const pelaaja1 = prompt('Anna pelaajan 1 pisteet')
const pelaaja2 = prompt('Anna pelaajan 2 pisteet')
const pelaaja3 = prompt('Anna pelaajan 3 pisteet')
const yhteistulos = parseInt(pelaaja1)+parseInt(pelaaja2)+parseInt(pelaaja3)
const keskiarvo = yhteistulos/3
document.querySelector('#pisteet').innerHTML=`${yhteistulos} ${keskiarvo}`
console.log('Ohjelma loppuu!')

const syote = prompt('kivi, paperi tai sakset')
let kone_syote = Math.random()
switch(kone_syote){
    case kone_syote > 0.7:
        kone_syote = 'kivi'
    break
    case kone_syote > 0.4:
        kone_syote = 'paperi'
        break
    default:
        kone_syote = 'sakset'
}
let tulos = ''
if (syote==='kivi'){
    if (kone_syote==='kivi'){
        tulos='tasapeli'
    }
    else if (kone_syote=='paperi'){
        tulos='hävisit'
    }
    else  if(kone_syote=='sakset'){
        tulos=='voitit'
    }
}
else if (syote=='paperi'){
    if (kone_syote=='kivi'){
        tulos='voitit'
    }
    else if (kone_syote=='paperi'){
        tulos='tasapeli'
    }
    else if (kone_syote=='sakset'){
        tulos=='hävisit'
    }
}
else if (syote=='sakset'){
    if (kone_syote=='kivi'){
        tulos='hävisit'
    }
    else if (kone_syote=='paperi'){
        tulos='voitit'
    }
    else if (kone_syote=='sakset'){
        tulos=='tasapeli'
    }
}
document.querySelector('#ksp').innerHTML=`${syote} ${kone_syote}  ${tulos}`