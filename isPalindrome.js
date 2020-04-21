const isTextPalindrome = (text) => {
  if (text === undefined) {
    return false;
  }
  let left = 0;
  let right = text.length - 1;
  while (left < right) {
    if (text[left++] !== text[right--]) {
      return false;
    }
  }
  return true;
};

const isPhrasePalindrome = (text) => {
  let chars = text.replace(/[^a-zA-Z]/g, "").toLowerCase();
  return isTextPalindrome(chars);
};

isPhrasePalindrome("Madam, i'm Adam");
