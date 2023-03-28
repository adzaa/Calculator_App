// calculator
let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.getElementById("screen-input");

function buttonClick(value) {
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  screen.innerText = parseInt(buffer).toLocaleString();
}

function handleSymbol(symbol) {
  switch (symbol) {
    case "RESET":
      buffer = "0";
      runningTotal = 0;
      break;
    case "=":
      if (previousOperator === null) {
        return;
      }
      flushOperation(parseInt(buffer));
      previousOperator = null;
      buffer = runningTotal;
      break;
    case "DEL":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case "+":
    case "−":
    case "×":
    case "/":
      handleMath(symbol);
      break;
  }
}

function handleMath(symbol) {
  if (buffer === "0") {
    return;
  }

  const intBuffer = parseInt(buffer);

  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }
  previousOperator = symbol;
  buffer = "0";
}

function flushOperation(intBuffer) {
  if (previousOperator === "+") {
    runningTotal += intBuffer;
  } else if (previousOperator === "−") {
    runningTotal -= intBuffer;
  } else if (previousOperator === "×") {
    runningTotal *= intBuffer;
  } else if (previousOperator === "/") {
    runningTotal /= intBuffer;
  }
}

function handleNumber(numberString) {
  if (buffer === "0") {
    buffer = numberString;
  } else {
    buffer += numberString;
  }
}

function init() {
  const numBtn = document.querySelectorAll(".item");

  numBtn.forEach((button) => {
    button.addEventListener("click", function (event) {
      buttonClick(event.target.innerText);
    });
  });
}

init();

// calculator end

// toggle switch

var buttons = document.getElementsByClassName("toggle-btn");
var arr = [...buttons];

var lastClickedIndex = localStorage.getItem("lastClickedIndex");
if (lastClickedIndex !== null) {
  arr[lastClickedIndex].style.opacity = "1";
  arr
    .filter(function (item, index) {
      return index != lastClickedIndex;
    })
    .forEach((item) => {
      item.style.opacity = "0";
    });
}

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
    localStorage.setItem("lastClickedIndex", index);
  });
});

// toggle switch end

// theme change

const toggleContainer = document.querySelector(".three-state-toggle");
const toggleButtons = document.querySelectorAll(".toggle-btn");
const keypadContainer = document.querySelector(".keypad-container");
const delResBtn = document.querySelectorAll(".d, .r");
const equalBtn = document.querySelector(".e");
const numBtns = document.querySelectorAll(".n");
const symbolBtns = document.querySelectorAll(".o");
const attr = document.querySelector(".attribution");

const calcHead = document.querySelectorAll(".logo p, .toggle p, .toggle-num");

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  toggleButtons.forEach((button) => {
    if (button.value === savedTheme) {
      button.checked = true;
      applyTheme(button.value);
    }
  });
}

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyTheme(button.value);
    localStorage.setItem("theme", button.value);
  });
});
function applyTheme(theme) {
  if (theme === "theme1") {
    document.body.style.background = "";
    screen.style.background = "";
    screen.style.color = "";
    calcHead.forEach((head) => {
      head.style.color = "";
    });

    keypadContainer.style.background = "";

    toggleContainer.style.background = "";

    delResBtn.forEach((btn) => {
      btn.style.background = "";
      btn.style.boxShadow = "";
      btn.addEventListener("mouseover", () => {
        btn.style.background = "";
      });
      btn.addEventListener("mouseout", () => {
        btn.style.background = "";
      });
    });

    equalBtn.style.background = "";
    equalBtn.style.boxShadow = "";

    equalBtn.addEventListener("mouseover", () => {
      equalBtn.style.background = "";
    });

    equalBtn.addEventListener("mouseout", () => {
      equalBtn.style.background = "";
    });

    numBtns.forEach((nums) => {
      nums.style.background = "";
      nums.style.boxShadow = "";
      nums.style.color = "";
      nums.addEventListener("mouseover", () => {
        nums.style.background = "";
      });
      nums.addEventListener("mouseout", () => {
        nums.style.background = "";
      });
    });

    symbolBtns.forEach((symbols) => {
      symbols.style.color = "";
      symbols.style.background = "";
      symbols.style.boxShadow = "";

      symbols.addEventListener("mouseover", () => {
        symbols.style.background = "";
      });

      symbols.addEventListener("mouseout", () => {
        symbols.style.background = "";
      });
    });
    attr.style.color = "";
  } else if (theme === "theme2") {
    document.body.style.background = "var(--bg-2-main)";
    screen.style.background = "var(--bg-2-screen)";
    screen.style.color = "var(--text-2-nums)";

    calcHead.forEach((head) => {
      head.style.color = "var(--text-2-nums)";
    });

    toggleContainer.style.background = "var(--bg-2-keypad)";

    keypadContainer.style.background = "var(--bg-2-keypad)";

    delResBtn.forEach((btn) => {
      btn.style.background = "var(--key-2-del-res-bg)";
      btn.style.boxShadow = "0px 3px 3px 0px var(--key-2-del-res-sw)";
      btn.addEventListener("mouseover", () => {
        btn.style.background = "#62b5bd";
      });
      btn.addEventListener("mouseout", () => {
        btn.style.background = "var(--key-2-del-res-bg)";
      });
    });

    equalBtn.style.background = "var(--key-2-equal-bg)";
    equalBtn.style.boxShadow = "0px 3px 3px 0px var(--key-2-equal-sw)";

    equalBtn.addEventListener("mouseover", () => {
      equalBtn.style.background = "#ff8b38";
    });

    equalBtn.addEventListener("mouseout", () => {
      equalBtn.style.background = "var(--key-2-equal-bg)";
    });

    numBtns.forEach((nums) => {
      nums.style.background = "var(--key-2-bg)";
      nums.style.boxShadow = "0px 3px 3px 0px var(--key-2-sw)";
      nums.style.color = "var(--text-2-nums)";
      nums.addEventListener("mouseover", () => {
        nums.style.background = "#fff";
      });
      nums.addEventListener("mouseout", () => {
        nums.style.background = "var(--key-2-bg)";
      });
    });

    symbolBtns.forEach((symbols) => {
      symbols.style.color = "var(--text-2-nums)";
      symbols.style.background = "";
      symbols.style.boxShadow = "";

      symbols.addEventListener("mouseover", () => {
        symbols.style.background = "#fff";
      });

      symbols.addEventListener("mouseout", () => {
        symbols.style.background = "";
      });
    });

    attr.style.color = "var(--key-2-equal-bg)";
  } else if (theme === "theme3") {
    document.body.style.background = "var(--bg-3-main)";
    screen.style.background = "var(--bg-3-screen)";
    screen.style.color = "var(--text-3-nums)";

    calcHead.forEach((head) => {
      head.style.color = "var(--text-3-nums)";
    });

    toggleContainer.style.background = "var(--bg-3-keypad)";

    keypadContainer.style.background = "var(--bg-3-keypad)";

    delResBtn.forEach((btn) => {
      btn.style.background = "var(--key-3-del-res-bg)";
      btn.style.boxShadow = "0px 3px 3px 0px var(--key-3-del-res-sw)";

      btn.addEventListener("mouseover", () => {
        btn.style.background = "#8332ae";
      });

      btn.addEventListener("mouseout", () => {
        btn.style.background = "var(--key-3-del-res-bg)";
      });
    });

    equalBtn.style.background = "var(--key-3-equal-bg)";
    equalBtn.style.boxShadow = "0px 3px 3px 0px var(--key-3-equal-sw)";

    equalBtn.addEventListener("mouseover", () => {
      equalBtn.style.background = "#94fff9";
    });

    equalBtn.addEventListener("mouseout", () => {
      equalBtn.style.background = "var(--key-3-equal-bg)";
    });

    numBtns.forEach((nums) => {
      nums.style.background = "var(--key-3-bg)";
      nums.style.boxShadow = "0px 3px 3px 0px var(--key-3-sw)";
      nums.style.color = "var(--text-3-nums)";

      nums.addEventListener("mouseover", () => {
        nums.style.background = "#6b34ac";
      });

      nums.addEventListener("mouseout", () => {
        nums.style.background = "var(--key-3-bg)";
      });
    });

    symbolBtns.forEach((symbols) => {
      symbols.style.background = "var(--key-3-bg)";
      symbols.style.boxShadow = "0px 3px 3px 0px var(--key-3-sw)";
      symbols.style.color = "var(--text-3-nums)";

      symbols.addEventListener("mouseover", () => {
        symbols.style.background = "#6b34ac";
      });

      symbols.addEventListener("mouseout", () => {
        symbols.style.background = "var(--key-3-bg)";
      });
    });

    attr.style.color = "";
  }
}

// theme change end
