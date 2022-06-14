const button = document.getElementById("clickme"),
    overlay = document.getElementById("overlay");

let elementClicked = false,
    // time =setInterval(getcounter,1000),
    countMins = 0,
    count = 0;

button.addEventListener('click', function handleClick() {
    console.log('element clicked');
    if (count <= 100) {
        count += 1;
        overlay.style.height = count + '%';
    }
    elementClicked = true;
});

setInterval(() => {
    if (elementClicked) {
        console.log('element was clicked');
        setTimeout(() => {
            elementClicked = false;
        }, 0);
    } else {
        if (count >= 1) {
            count -= 1;
            overlay.style.height = count + '%';
            console.log("element hasn't been clicked yet", count);
        }
    }
}, 300); // 👉️ invoke every 1500 milliseconds

// button.addEventListener("click", function () {
//     // button.dataset.clicked = "true";
//     count += 1;
//     //   button.innerHTML = "Click me: " + count;
//     if (count <= 100) {
//         overlay.style.height = count + '%';
//     }
//     elementClicked = true;
//   console.log('element clicked', elementClicked);

// });


// overlay.addEventListener("click", function() {
//   console.log(button.dataset.clicked ? "Yes" : "No");
// });

// setInterval(() => {
//   if (elementClicked) {
//     console.log('element was clicked');
//   } else {
//     console.log("element hasn't been clicked yet");
//   }
// }, 500); // 👉️ invoke every 1500 milliseconds