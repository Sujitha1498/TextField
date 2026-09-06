const textarea = document.getElementById('message');
const charCount = document.getElementById('charCount');
const remainingCount = document.getElementById('remainingCount');
const warningMsg = document.getElementById('warningMsg');
const maxLength = 200;

textarea.addEventListener('input', () => {
  const currentLength = textarea.value.length;
  const remaining = maxLength - currentLength;

  // Update text displays
  charCount.textContent = `${currentLength}/${maxLength} characters`;
  remainingCount.textContent = `${remaining} remaining`;

  // Display warning if limit is reached
  if (currentLength >= maxLength) {
    warningMsg.style.display = 'block';
  } else {
    warningMsg.style.display = 'none';
  }
});