
export function setupCounter(calcElm, latexArea, btn, output) {
  const calc = Desmos.GraphingCalculator(calcElm, {
    expressions: false
  });
  let calcLength = 0;
  latexArea.addEventListener('input', () => {
    const lines = latexArea.value.split('\n');
    const newLength = lines.length;
    if (newLength >= calcLength) {
      calcLength = newLength;
      for (let i = 0; i < newLength; i++) {
        calc.setExpression({ id: i.toString(), latex: lines[i] });
      }
      return;
    }
    // newLength < calcLength
    // Remove expressions with setExpression({id: ..., latex: ''})
    for (let i = newLength; i < calcLength; i++) {
      calc.setExpression({ id: i.toString(), latex: '' });
    }
    calcLength = newLength;
    // Set remaining expressions
    for (let i = 0; i < newLength; i++) {
      calc.setExpression({ id: i.toString(), latex: calcExprs[i] });
    }
  })

  btn.addEventListener('click', () => {
    calc.asyncScreenshot(
      {
        mode: 'contain',
        targetPixelRatio: 2
      },
      data => {
        output.src = data;
      }
    );
  });
}
