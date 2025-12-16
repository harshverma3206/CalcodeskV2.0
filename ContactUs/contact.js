
function show(value) {
    const input = document.getElementById('dropdownInput');
    console.log(input);
    input.value = value;
    console.log(input.value);
    document.querySelector('.options').style.display = 'none';
}

const dropdownInput = document.getElementById('dropdownInput');
dropdownInput.addEventListener('click', function () {
    const options = document.querySelector('.options');
    options.style.display = options.style.display === 'none' ? 'block' : 'none';
});

// Close dropdown when clicking outside
document.addEventListener('click', function (event) {
    const dropdown = document.getElementById('dropdown');
    if (!dropdown.contains(event.target)) {
        document.querySelector('.options').style.display = 'none';
    }
});

function lazyLoading() {
    let allImg = document.querySelectorAll("img");

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add("loaded");
                observer.unobserve(img);

                // img.src = img.getAttribute("data-src");
            }
        });
    }, {
        root: null,
        threshold: 0.3
    });

    allImg.forEach(function (img) {
        observer.observe(img)
    });
}

function nextSlide() {
    let icn = document.querySelector('#nxtBtn');
    let articleOne = document.querySelector('#art01');
    let articleTwo = document.querySelector('#art02');

    articleOne.style.display = "flex";
    articleTwo.style.display = "none";

    icn.addEventListener("click", function () {
        if (articleTwo.style.display == "none" && articleOne.style.display == "flex") {
            articleOne.style.display = "none";
            articleTwo.style.display = "flex";
        } else {
            articleOne.style.display = "flex";
            articleTwo.style.display = "none";
        }
    });
}



// lazyLoading();
nextSlide();