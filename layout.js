const next = document.querySelector(".next");
const back = document.querySelector(".back");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const oneText = document.querySelector(".one-text");
const twoText = document.querySelector(".two-text");
const threeText = document.querySelector(".three-text");
let count = 0;

// circular linked list
next.addEventListener("click", () => {
  if (count >= 2) {
    count = 0;
    func(count);
  } else {
    count += 1;
    func(count);
  }
});
back.addEventListener("click", (event) => {
  if (count <= 0) {
    count = 2;
    func(count);
  } else {
    count -= 1;
    func(count);
  }
});

function func(count) {
  if (count < 0) count = 0;
  else if (count >= 2) count = 2;
  switch (count) {
    case 0:
      one.classList.remove("inactive");
      two.classList.remove("active");
      three.classList.remove("active");
      oneText.classList.remove("inactive");
      twoText.classList.remove("active");
      threeText.classList.remove("active");
      break;
    case 1:
      one.classList.add("inactive");
      two.classList.add("active");
      three.classList.remove("active");
      oneText.classList.add("inactive");
      twoText.classList.add("active");
      threeText.classList.remove("active");
      break;
    case 2:
      one.classList.add("inactive");
      two.classList.remove("active");
      three.classList.add("active");
      oneText.classList.add("inactive");
      twoText.classList.remove("active");
      threeText.classList.add("active");
  }
}
