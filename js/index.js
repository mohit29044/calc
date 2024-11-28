let string = "";
let history = [];
let memory = "";
let buttons = document.querySelectorAll("button");
let display = document.getElementById("display");
let historybtn = document.getElementById("history");

let memorybtn = document.getElementById("memory");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerText;

    if (value === "CE") {
      string = string.slice(0, -1);
    } else if (value === "C") {
      string = "";
    } else if (value === "HC") {
      history = [];
    } else if (value === "=") {
      try {
        let result = eval(string);
        history.push(`${string} = ${result}`);
        string = result.toString();
      } catch {
        string = "Error";
      }
    } else if (value === "M+") {
      memory += eval(string);
    } else if (value === "M-") {
      memory -= eval(string);
    } else if (value === "MC") {
      memory = "";
    } else {
      string += value;
    }
    display.innerText = string || "0";
    historybtn.innerHTML = `History: ${history.join("<br>")}`;
    memorybtn.innerText = `Memory: ${memory}`;
  });
});
