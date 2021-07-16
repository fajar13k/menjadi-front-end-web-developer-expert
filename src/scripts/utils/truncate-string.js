const truncateString = (string, number) => {
  // Ketika string lebih kecil atau sama dengan number
  // Return str, jangan dipotong
  if (string.length <= number) {
    return string;
  }

  // Return string yang telah dipotong dengan "..."
  // Lalu concatenate ke belakang string awal
  return `${string.slice(0, number)} ...`;
};

export default truncateString;
