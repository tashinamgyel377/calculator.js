

            const display = document.getElementById("display");

            function number(value) {
                display.value += value;
            }

            function cleardisplay() {
                display.value = "";
            }

            function clearall() {
                display.value = "";
            }

            function divide() {
                display.value += "/";
            }

            function multiply() {
                display.value += "*";
            }

            function subtract() {
                display.value += "-";
            }

            function add() {
                display.value += "+";
            }

            function percent() {
                display.value += "/100";
            }

            function decimal() {
                display.value += ".";
            }

            function equal() {
        try {
           display.value = eval(display.value);
            } catch (error) {
         display.value = "Error";
           }
        }
        


    