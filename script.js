/*let isOpen = false
function openMenu(){
    const myMenu = document.getElementById("mobMenu")
    const myButton =document.getElementById("mobButton")
    if(isOpen){
        myButton.style.backgroundImage = "url(icon/9034957_menu_icon.png)"
        myMenu.style.display = "none"
        isOpen= false
    }else{
       myButton.style.backgroundImage = "url(icon/9104213_close_cross_remove_delete_icon.png)"
       myMenu.style.display = "flex"
       isOpen= true 
    }
    
    
}*/
let isOpen = false

const bar1 = document.getElementById("bar1")
const bar2 = document.getElementById("bar2")
const bar3 = document.getElementById("bar3")
const bar4 = document.getElementById("bar4")
const bar5 = document.getElementById("bar5")
const myMenu = document.getElementById("mobMenu")
const myButton =document.getElementById("mobButton")

function toogleMenu() {
    if (!isOpen) { // если меню не открыто (!isOpen равносильно isOpen === false)
        
        // делаем прозрачными линии иконки меню 
        bar1.style.backgroundColor = "transparent"
        bar2.style.backgroundColor = "transparent"
        bar3.style.backgroundColor = "transparent"

        // смещаем первую и последюю полоску в центр для создания эффекта, 
        // будто три полоски съезжаются в одну
        bar1.style.top = "10px"
        bar3.style.bottom = "10px"

        // из-за того, что у нас в стилях transition: all 0.4s ease-in-out;
        // свойства будут меняться постепенно, получится анимация

        // у иконки Х увеличиваем высоту
        bar4.style.width = "24px"
        bar5.style.width = "24px"
        bar4.style.left = "0px"
        bar5.style.left = "0px"
        // крутим Х для красивой анимации
        bar4.style.transform = "rotate(45deg)"
        bar5.style.transform = "rotate(-45deg)"
        myMenu.style.display = "none"

        isOpen = true
    } else {
        // убираем ширину иконки Х
        bar4.style.width = "0px"
        bar5.style.width = "0px"

        // возвращаем положение первой и последней полоски 
        bar1.style.top = "0px"
        bar3.style.bottom = "0px"

        // возвращаем цвет линиям иконки меню
        bar1.style.backgroundColor = "#E89B2B"
        bar2.style.backgroundColor = "#E89B2B"
        bar3.style.backgroundColor = "#E89B2B"

        // крутим Х для красивой анимации обратно иконку Х
        bar4.style.transform = "rotate(135deg)"
        bar5.style.transform = "rotate(45deg)"

        // ставим в центр для эффекта, что закрывается в центр
        bar4.style.left = "10px"
        bar5.style.left = "10px"
        myMenu.style.display = "flex"

        isOpen = false
    }
}