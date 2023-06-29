const inputWarning1 = document.querySelector(".input1 i")
const inputWarning2 = document.querySelector(".input2 i")
const inputWarning3 = document.querySelector(".input3 i")
const paragraphDay1 = document.querySelector(".input1 p")
const paragraphDay2 = document.querySelector(".input2 p")
const paragraphDay3 = document.querySelector(".input3 p")
const yearInput = document.querySelector(".year")
const yourYears = document.querySelector(".your-years")
const monthInput = document.querySelector(".month")
const yourMonth = document.querySelector(".your-monthes")
const dayInput = document.querySelector(".day")
const yourDay = document.querySelector(".your-days")
const ball = document.querySelector(".ball")

ball.onclick = () => {
    if (yearInput.value === ""){
        yourYears.textContent = "--"
        inputWarning3.textContent = "This field is required"
        inputWarning3.style.color = "var(--Light-red)"
        inputWarning3.previousElementSibling.style.borderColor = "var(--Light-red)"
        paragraphDay3.style.color = "var(--Light-red)"
    } else {
        inputWarning3.textContent = ""
        inputWarning3.previousElementSibling.style.borderColor = "var(--Light-grey)"
        paragraphDay3.style.color = "var(--Smokey-grey)"
        yourYears.textContent = new Date().getFullYear() - yearInput.value
    }
    if (monthInput.value === ""){
        yourMonth.textContent = "--"
        inputWarning2.textContent = "This field is required"
        inputWarning2.style.color = "var(--Light-red)"
        inputWarning2.previousElementSibling.style.borderColor = "var(--Light-red)"
        paragraphDay2.style.color = "var(--Light-red)"
    } else {
        inputWarning2.textContent = ""
        inputWarning2.previousElementSibling.style.borderColor = "var(--Light-grey)"
        paragraphDay2.style.color = "var(--Smokey-grey)"
        yourMonth.textContent = Math.abs((new Date().getMonth() + 1) - monthInput.value)
    }
    if (dayInput.value === ""){
        yourDay.textContent = "--"
        inputWarning1.textContent = "This field is required"
        inputWarning1.style.color = "var(--Light-red)"
        inputWarning1.previousElementSibling.style.borderColor = "var(--Light-red)"
        paragraphDay1.style.color = "var(--Light-red)"
    } else {
        inputWarning1.textContent = ""
        inputWarning1.previousElementSibling.style.borderColor = "var(--Light-grey)"
        paragraphDay1.style.color = "var(--Smokey-grey)"
        yourDay.textContent = Math.abs((new Date().getDay() +1) - dayInput.value)
    }
    if (dayInput.value > 30){
        inputWarning1.textContent = "Must be a valid day"
        inputWarning1.style.color = "var(--Light-red)"
        inputWarning1.previousElementSibling.style.borderColor = "var(--Light-red)"
        paragraphDay1.style.color = "var(--Light-red)"
        yourDay.textContent = "--"
    }
    if (monthInput.value > 12){
        inputWarning2.textContent = "Must be a valid month"
        inputWarning2.style.color = "var(--Light-red)"
        inputWarning2.previousElementSibling.style.borderColor = "var(--Light-red)"
        paragraphDay2.style.color = "var(--Light-red)"
        yourMonth.textContent = "--"
    }
    if (yearInput.value !== new Date().getFullYear() && yearInput.value > new Date().getFullYear()){
        inputWarning3.textContent = "Must be in the past"
        inputWarning3.style.color = "var(--Light-red)"
        inputWarning3.previousElementSibling.style.borderColor = "var(--Light-red)"
        paragraphDay3.style.color = "var(--Light-red)"
        yourYears.textContent = "--"
    }
    if (yearInput.value === "" || monthInput.value === "" || dayInput.value === "" || dayInput.value > 30 || monthInput.value > 12 || yearInput.value !== new Date().getFullYear() && yearInput.value > new Date().getFullYear()){
        yourYears.textContent = "--"
        yourMonth.textContent = "--"
        yourDay.textContent = "--"
    }
}

document.onkeyup = (e) => {
    if (e.key === "Enter"){
        if (yearInput.value === ""){
            yourYears.textContent = "--"
            inputWarning3.textContent = "This field is required"
            inputWarning3.style.color = "var(--Light-red)"
            inputWarning3.previousElementSibling.style.borderColor = "var(--Light-red)"
            paragraphDay3.style.color = "var(--Light-red)"
        } else {
            inputWarning3.textContent = ""
            inputWarning3.previousElementSibling.style.borderColor = "var(--Light-grey)"
            paragraphDay3.style.color = "var(--Smokey-grey)"
            yourYears.textContent = new Date().getFullYear() - yearInput.value
        }
        if (monthInput.value === ""){
            yourMonth.textContent = "--"
            inputWarning2.textContent = "This field is required"
            inputWarning2.style.color = "var(--Light-red)"
            inputWarning2.previousElementSibling.style.borderColor = "var(--Light-red)"
            paragraphDay2.style.color = "var(--Light-red)"
        } else {
            inputWarning2.textContent = ""
            inputWarning2.previousElementSibling.style.borderColor = "var(--Light-grey)"
            paragraphDay2.style.color = "var(--Smokey-grey)"
            yourMonth.textContent = Math.abs((new Date().getMonth() + 1) - monthInput.value)
        }
        if (dayInput.value === ""){
            yourDay.textContent = "--"
            inputWarning1.textContent = "This field is required"
            inputWarning1.style.color = "var(--Light-red)"
            inputWarning1.previousElementSibling.style.borderColor = "var(--Light-red)"
            paragraphDay1.style.color = "var(--Light-red)"
        } else {
            inputWarning1.textContent = ""
            inputWarning1.previousElementSibling.style.borderColor = "var(--Light-grey)"
            paragraphDay1.style.color = "var(--Smokey-grey)"
            yourDay.textContent = Math.abs((new Date().getDay() +1) - dayInput.value)
        }
        if (dayInput.value > 30){
            inputWarning1.textContent = "Must be a valid day"
            inputWarning1.style.color = "var(--Light-red)"
            inputWarning1.previousElementSibling.style.borderColor = "var(--Light-red)"
            paragraphDay1.style.color = "var(--Light-red)"
            yourDay.textContent = "--"
        }
        if (monthInput.value > 12){
            inputWarning2.textContent = "Must be a valid month"
            inputWarning2.style.color = "var(--Light-red)"
            inputWarning2.previousElementSibling.style.borderColor = "var(--Light-red)"
            paragraphDay2.style.color = "var(--Light-red)"
            yourMonth.textContent = "--"
        }
        if (yearInput.value !== new Date().getFullYear() && yearInput.value > new Date().getFullYear()){
            inputWarning3.textContent = "Must be in the past"
            inputWarning3.style.color = "var(--Light-red)"
            inputWarning3.previousElementSibling.style.borderColor = "var(--Light-red)"
            paragraphDay3.style.color = "var(--Light-red)"
            yourYears.textContent = "--"
        }
        if (yearInput.value === "" || monthInput.value === "" || dayInput.value === "" || dayInput.value > 30 || monthInput.value > 12 || yearInput.value !== new Date().getFullYear() && yearInput.value > new Date().getFullYear()){
            yourYears.textContent = "--"
            yourMonth.textContent = "--"
            yourDay.textContent = "--"
        }
    }
}
