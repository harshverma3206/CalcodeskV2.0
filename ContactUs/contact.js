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

function dropdown() {
    // function show(anything) {
    //     const vl = document.querySelector('#dropdownInput').value = anything;
    //     console.log(vl);
    // }

    // let dropdown = document.querySelector('#dropdown');
    // dropdown.onclick = function () {
    //     dropdown.classList.toggle('active');

    // }

}





function holo() {
    function show(value) {
        const input = document.getElementById('dropdownInput');
        input.value = value;
        document.querySelector('.options').style.display = 'none';
    }

    // Toggle dropdown on input click
    document.getElementById('dropdownInput').addEventListener('click', function () {
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

}



holo();
// lazyLoading();
nextSlide();
// dropdown();