const ssnMask = (str) => {
  let onlyDigits = str.replace(/[^0-9|\\*]/g, "");
  let max9Digits = onlyDigits.substring(0, 9);

  // Inject dashes
  if (max9Digits.length >= 4) {
    max9Digits = `${max9Digits.slice(0, 3)}-${max9Digits.slice(3)}`;
  }

  if (max9Digits.length >= 7) {
    max9Digits = `${max9Digits.slice(0, 6)}${max9Digits.slice(6)}`;
  }
  return max9Digits;
};

export default ssnMask;
