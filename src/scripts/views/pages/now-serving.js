const NowServing = {
  async render() {
    return `
      <h2>Now Serving Page</h2>
    `;
  },

  async afterRender() {
    // Fungsi akan dipanggil setelah render()
  },
};

export default NowServing;
