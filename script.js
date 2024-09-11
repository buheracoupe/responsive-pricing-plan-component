const monthlyBtn = document.querySelector("#monthly-radio");
const annualBtn = document.querySelector("#annual-radio");
const annualLabel = document.querySelector("#annual-label");
const monthlyLabel = document.querySelector("#monthly-label");
const individualPrice = document.querySelector(".individual.price");
const familyPrice = document.querySelector(".family.price");
const teamsPrice = document.querySelector(".team.price");


annualBtn.addEventListener("change", updatePlans)

monthlyBtn.addEventListener("change", updatePlans)

window.onload = ()=>{
    monthlyBtn.checked = true;
    console.log(monthlyBtn.checked)
    monthlyLabel.classList.add("active");
    annualLabel.classList.remove("active");
}

function updatePlans(){
    if(annualBtn.checked) {
        annualLabel.classList.add("active");
        monthlyLabel.classList.remove("active");
individualPrice.innerHTML = `<span class="amount">$65</span>.99 annualy`
familyPrice.innerHTML = `<span class="amount">$155</span>.99 annualy`
teamsPrice.innerHTML =  `<span class="amount">$199</span>.99 annualy`}
    else {
        monthlyLabel.classList.add("active");
        annualLabel.classList.remove("active");
    individualPrice.innerHTML = `<span class="amount">$9</span>.99 monthly`
familyPrice.innerHTML = `<span class="amount">$16</span>.99 monthly`
teamsPrice.innerHTML =  `<span class="amount">$19</span>.99 monthly`}
}