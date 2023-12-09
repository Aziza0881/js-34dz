let animation = document.querySelectorAll(".box")

animation.forEach((item) => {
    item.onmouseenter = () => {
        item.classList.add('active')
    }
})