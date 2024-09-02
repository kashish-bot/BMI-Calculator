const heading = document.createElement('h2')
heading.className = 'head'
heading.style.color = 'rgb(0, 0, 68)'
heading.style.textAlign = 'center'
heading.style.marginTop = '50px'
heading.style.fontSize = '30px'


const bmi = document.createTextNode('BMI Weight Guide')
heading.appendChild(bmi)
document.body.appendChild(heading)

const para1 = document.createElement('p')
para1.className = 'para'
para1.style.color = 'rgb(0, 0, 68)'
para1.style.textAlign = 'center'
para1.style.marginTop = '20px'
para1.style.fontSize = '20px'
const paraGraph = document.createTextNode('Under Weight = Less than 18.5')
para1.appendChild(paraGraph)
document.body.appendChild(para1)

const para2 = document.createElement('p')
para2.className = 'para'
para2.style.color = 'rgb(0, 0, 68)'
para2.style.textAlign = 'center'
para2.style.marginTop = '10px'
para2.style.fontSize = '20px'
const paraGraph2 = document.createTextNode('Normal Weight = 18.6 to 24.9')
para2.appendChild(paraGraph2)
document.body.appendChild(para2)

const para3 = document.createElement('p')
para3.className = 'para'
para3.style.color = 'rgb(0, 0, 68)'
para3.style.textAlign = 'center'
para3.style.marginTop = '5px'
para3.style.fontSize = '20px'
const paraGraph3 = document.createTextNode('Over Weight = Greater than 24.9')
para3.appendChild(paraGraph3)
document.body.appendChild(para3)

const form = document.querySelector('.form')
form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#Height').value)
    const Weight = parseInt(document.querySelector('#Weight').value)
    const result = document.querySelector('.result');

    if (height === '' || height < 0 || isNaN(height)) {
        alert("Please enter valid height")
    } else if (Weight === '' || Weight < 0 || isNaN(Weight)) {
        alert("Please enter valid weight")
    } else {
        const BMI = (Weight / ((height * height)/10000)).toFixed(2)
        result.innerHTML = `<span>${BMI} kg/m sq.</span>`
        if (BMI < 18.5) {
            alert(`${BMI} You are under weight.`)
        } else if (BMI > 18.5 && BMI <= 24.9) {
            alert (`${BMI} Your weight is normal.`) 
        } else if (BMI > 24.9) {
            alert(`${BMI} You are over weight.`)
        }
        
    }
    
})





















