// Générateur de QR Code 

const wrapper = document.querySelector(".wrapper"),
generateBtn = wrapper.querySelector(".form button"),
qrInput = wrapper.querySelector(".form input"),
qrImg = wrapper.querySelector(".qr-code img"),
downloadBtn = wrapper.querySelector(".download-btn");

generateBtn.addEventListener("click", () => 
{
    let qrValue = qrInput.value;
    if(!qrValue) return; // Si c'est vide, ne rien faire 
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load", () =>
    {
        wrapper.classList.add("active");
        downloadBtn.classList.add("active")
    });
    
});

downloadBtn.addEventListener("click", e => 
{
    e.preventDefault();
    fetchFile(qrImg.src);
    
});

function fetchFile(url)
{

    fetch(url).then(res => res.blob()).then(file => {
        let qrValue = qrInput.value;
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = `QR-CODE-${qrValue}`;
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    })

};
