const form =  document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const Height = parseInt(document.querySelector('#height').value)
    const Weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    const bmi = (Weight/((Height*Height) /1000)).toFixed(2);

    if(Height === 0 ||  Height < 0  || isNaN(Height)){
        result.innerHTML = `please give valid height ${Height}`;
        
    }else if(Weight === 0 ||  Weight < 0  || isNaN(Weight)){
        result.innerHTML = `please give valid weight ${Weight}`;
    } else{
        const bmi = (Weight/((Height*Height) /1000)).toFixed(2);
        let guide = "";

        if(bmi< 18.6){
            guide = "under Weight";
        }else if (bmi >= 18.6 && bmi <= 24.9){
            guide = "Normal Range";
        }else{
            guide = "OverWeight";
        }
        result.innerHTML = `<span> Your BMI is ${bmi} (${guide})</span>`;
    }
});