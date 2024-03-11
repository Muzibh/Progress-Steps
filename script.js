const circles = document.querySelectorAll('.circle')/*use a . selector because 
            we are bringing in a number of circles in a node list which is 
            similar to an array.*/

const btnPrev = document.getElementById('prev')
const btnNext = document.getElementById('next')
const progress = document.getElementById('progress')

let currActive = 1

next.addEventListener('click',() =>{
    currActive++

    if(currActive > circles.length){ /*steps is a node list that contains the circles 
                                    and we can treat the list like an array*/
        currActive = circles.length
    }
    
    update() 
})

prev.addEventListener('click',() =>{
    currActive--

    if(currActive < 1){
        currActive = 1
    }

    
    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx <currActive){
            circle.classList.add('active')
        } else{
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1)/(circles.length - 1) * 100 + '%'/*Keeping track of the ratio of active circles 
                        to the total number of circles -1 multiplied by 100% to get a percentage
                        to reduce the percentage increments from quarterly
                        out of 4 to thirds out of 3 to be inline with our circle highlights*/
    
    if(currActive === 1){
        prev.disabled = true
    }else if(currActive === circles.length){
        next.disabled = true
    }else{
        next.disabled = false
        prev.disabled = false
    } 
}




