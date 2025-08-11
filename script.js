let currentSlide = 0;

function moveSlide(direction) {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.document-card');
    const totalSlides = slides.length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const offset = -currentSlide * 100;
    track.style.transform = `translateX(${offset}%)`;
}

const NITdates = {
    "01-02": "12 de agosto",
    "03-04": "13 de agosto",
    "05-06": "14 de agosto",
    "07-08": "15 de agosto",
    "09-10": "19 de agosto",
    "11-12": "20 de agosto",
    "13-14": "21 de agosto",
    "15-16": "22 de agosto",
    "17-18": "25 de agosto",
    "19-20": "26 de agosto",
    "21-22": "27 de agosto",
    "23-24": "28 de agosto",
    "25-26": "29 de agosto",
    "27-28": "1 de septiembre",
    "29-30": "2 de septiembre",
    "31-32": "3 de septiembre",
    "33-34": "4 de septiembre",
    "35-36": "5 de septiembre",
    "37-38": "8 de septiembre",
    "39-40": "9 de septiembre",
    "41-42": "10 de septiembre",
    "43-44": "11 de septiembre",
    "45-46": "12 de septiembre",
    "47-48": "15 de septiembre",
    "49-50": "16 de septiembre",
    "51-52": "17 de septiembre",
    "53-54": "18 de septiembre",
    "55-56": "19 de septiembre",
    "57-58": "22 de septiembre",
    "59-60": "23 de septiembre",
    "61-62": "24 de septiembre",
    "63-64": "25 de septiembre",
    "65-66": "26 de septiembre",
    "67-68": "1 de octubre",
    "69-70": "2 de octubre",
    "71-72": "3 de octubre",
    "73-74": "6 de octubre",
    "75-76": "7 de octubre",
    "77-78": "8 de octubre",
    "79-80": "9 de octubre",
    "81-82": "10 de octubre",
    "83-84": "13 de octubre",
    "85-86": "14 de octubre",
    "87-88": "15 de octubre",
    "89-90": "16 de octubre",
    "91-92": "20 de octubre",
    "93-94": "21 de octubre",
    "95-96": "22 de octubre",
    "97-98": "23 de octubre",
    "99-00": "24 de octubre"
};

function getLimitDate(nit) {
    for (const range in NITdates) {
        const [start, end] = range.split("-").map(Number);
        if (nit >= start && nit <= end) {
            return NITdates[range];
        }
    }
    return "NIT no válido o fuera de rango.";
}

document.getElementById("consultButton").addEventListener("click", () => {
    const nitInput = document.getElementById("nitInput").value.trim();
    const nit = parseInt(nitInput);

    if (isNaN(nit) || nit < 0 || nit > 99) {
        document.getElementById("resultDate").textContent =
            "Por favor ingrese los dos últimos dígitos válidos del NIT (00 a 99)";
        return;
    }

    const fecha = getLimitDate(nit);
    document.getElementById("resultDate").textContent = `Fecha límite: ${fecha}`;
});
