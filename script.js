let string = "";

const display = document.querySelector("input");

let act = (check) => {
  if (check === "=" || check === "Enter") {
    try{
      string = eval(string);
    }catch(e){
      alert(e);
    }
    display.value = string;
  } else if (check === "AC" || check === "Delete") {
    string = "";
    display.value = string;
  } else if (check === "DEL" || check === "Backspace") {
    string = string.slice(0, -1);
    display.value = string;
  } else if (isFinite(check) || "+-*/%".includes(check)) {
    string += check;
    display.value = string;
  }
};

document.querySelectorAll("button").forEach((element) => {
  element.addEventListener("click", (event) => {
    let check = event.target.innerHTML;
    act(check);
  });
});
