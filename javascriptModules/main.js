import { encode } from './encode.js' // <- this isn't a filepath //

const input = document.getElementById('PlainTextArea')
const output = document.getElementById('CodedText')

input.addEventListener('change', (event) => {
  const plaintext = input.value
  const codedText = encode(plaintext)
  output.textContent = codedText
})
