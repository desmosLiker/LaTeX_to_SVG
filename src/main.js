import './style.css'
import { setupCounter } from './calc.js'

const [width, height] = [300, 300]; // changing may require calculator.resize()

document.querySelector('#app').innerHTML = `
  <div id="calc" style="width: ${width}px; height: ${height}px;${/* display: none;*/''}"></div>
  <br /><br />
  <textarea id="latex" placeholder="LaTeX here, e.g. y=x^{2}/2"></textarea>
  <br /><br />
  <button id="btn">Screenshot</button>
  <br /><br />
  <img id="output" width="${width}" height="${height}" />
`

setupCounter(...['#calc', '#latex', '#btn', '#output'].map(id => document.querySelector(id)))
