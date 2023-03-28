function hash(key, arrayLen) {
  let total = 0;
  for (const char of key) {
    let value = char.charCodeAt(0) - 96;
    total += (total + value) % arrayLen;
  }

  return total;
}
