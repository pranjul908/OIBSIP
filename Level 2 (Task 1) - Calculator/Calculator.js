const calculator_display = document.querySelector("#calculator-display");
const calculator_button = document.querySelectorAll("button");
calculator_button.forEach((item) =>
{
    item.onclick = () =>
    {
        if (item.id == "clear")
        {
            calculator_display.innerText = "";
        }
        else if (item.id == "backspace")
        {
            let string = calculator_display.innerText.toString();
            calculator_display.innerText = string.substr(0, string.length - 1);
        }
        else if (calculator_display.innerText != "" && item.id == "equal")
        {
            calculator_display.innerText = eval(calculator_display.innerText);
        }
        else if (calculator_display.innerText == "" && item.id == "equal")
        {
            calculator_display.innerText = "Empty!";
            setTimeout(() => (calculator_display.innerText = ""), 2000);
        }
        else
        {
            calculator_display.innerText += item.id;
        }
    };
});
