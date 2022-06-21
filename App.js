class App {
  init() {
    document
      .querySelector("#to-upper-case")
      .addEventListener("click", this.toUpperCase.bind(this));
    document
      .querySelector("#to-lower-case")
      .addEventListener("click", this.toLowerCase.bind(this));
  }
  post(path, body) {
    fetch(`http://localhost:3001/${path}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.render(res);
      });
  }
  render(response) {}
}

const app = new App();
app.init();
