async function enviarScript(scriptText, n) {
  const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
  const message = "Hello"; // palavra que deseja repetir
  main = document.querySelector("#main"),
  textarea = main.querySelector(`div[contenteditable="true"]`);

  if(!textarea) throw new Error("Não há uma conversa aberta");

  for(let i = 0; i < n; i++) { // loop para enviar a mesma palavra n vezes
    textarea.focus();
    document.execCommand('insertText', false, message);
    textarea.dispatchEvent(new Event('change', {bubbles: true}));

    setTimeout(() => {
      (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
    }, 100);

    if(i !== n - 1) await new Promise(resolve => setTimeout(resolve, 250));
  }

  return n;
}

enviarScript("Hello World", 5); // enviar "Hello" 5 vezes
