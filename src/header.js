function createHeader() {
  const h = document.createElement("h1");
  h.innerText = "Hello";
  console.log('works');
  return h;
}

export { createHeader };