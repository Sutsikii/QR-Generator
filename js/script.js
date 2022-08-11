const wrapper = document.querySelector(".wrapper"),
generateBtn = wrapper.querySelector(".form button"),
qrInput = wrapper.querySelector(".form input"),
qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => 
{
    let qrValue = qrInput.value;
    if(!qrValue) return; // Si c'est vide, ne rien faire 
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load", () =>
    {
        wrapper.classList.add("active");
    });
    
});

