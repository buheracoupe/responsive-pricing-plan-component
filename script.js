const monthlyBtn = document.querySelector("#monthly-radio");
const annualBtn = document.querySelector("#annual-radio");
const annualLabel = document.querySelector("#annual-label");
const monthlyLabel = document.querySelector("#monthly-label");
const individualPrice = document.querySelector(".individual.price");
const familyPrice = document.querySelector(".family.price");
const teamsPrice = document.querySelector(".team.price");


annualBtn.addEventListener("change", () =>{
    if(annualBtn.checked){
        console.log(annualBtn.checked)
        annualLabel.classList.add("active");
        monthlyLabel.classList.remove("active");
        updatePlans()


        }
})

monthlyBtn.addEventListener("change", () =>{
    if(monthlyBtn.checked){
        console.log(monthlyBtn.checked)
        monthlyLabel.classList.add("active");
        annualLabel.classList.remove("active");
    }
})

window.onload = ()=>{
    monthlyBtn.checked = true;
    console.log(monthlyBtn.checked)
    monthlyLabel.classList.add("active");
    annualLabel.classList.remove("active");
}

function updatePlans(){
individualPrice.innerHTML = `<span class="amount">$65</span>.99 annualy`
familyPrice.innerHTML = `<span class="amount">$105</span>.99 annualy`
teamsPrice.innerHTML =  `<span class="amount">$160</span>.99 annualy`
}