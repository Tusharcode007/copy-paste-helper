// Copy-Paste Helper using the Clipboard API

const textArea = document.getElementById("text-input");
const copyBtn = document.getElementById("copy-btn");
const pasteBtn = document.getElementById("paste-btn");
const statusEl = document.getElementById("status");

function setStatus(message, isError = false) {
  statusEl.textContent = "Status: " + message;
  statusEl.classList.toggle("error", isError);
}

// Check Clipboard API support
if (!navigator.clipboard) {
  setStatus("Clipboard API not supported in this browser.", true);
  copyBtn.disabled = true;
  pasteBtn.disabled = true;
} else {
  setStatus("Ready (Clipboard API available ✅)");
}

copyBtn.addEventListener("click", async () => {
  const text = textArea.value;

  if (!text.trim()) {
    setStatus("Nothing to copy. Type something first.", true);
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    setStatus("Copied to clipboard ✅");
  } catch (err) {
    console.error(err);
    setStatus(
      "Failed to copy. Browser might have blocked it.",
      true
    );
  }
});

pasteBtn.addEventListener("click", async () => {
  try {
    const clipText = await navigator.clipboard.readText();
    if (!clipText) {
      setStatus("Clipboard is empty or inaccessible.", true);
      return;
    }

    // Replace textarea content with clipboard content
    textArea.value = clipText;
    setStatus("Pasted from clipboard ✅");
  } catch (err) {
    console.error(err);
    setStatus(
      "Failed to paste. Browser might have blocked it.",
      true
    );
  }
});
