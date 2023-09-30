const main = document.querySelector(".main");
async function getDataGallary(value) {
  main.replaceChildren();
  const responce = await fetch(
    `https://api.unsplash.com/search/photos/?client_id=J00kjXQZqRy2E2NIokWLcTjGLN6SKIDJGfRtyuh4gug&query=${value}`
  );
  const data = await responce.json();

  if (data.results.length === 0) {
    let h1 = document.createElement("h1");
    h1.innerText = ":( don`t find anything";
    h1.style.color = "gray";
    return main.appendChild(h1);
  } else {
    data.results.map((item) => {
      let img = document.createElement("img");
      img.src = `${item.urls.full}`;
      img.className = "galleryImage";
      return main.appendChild(img);
    });
  }
  return data;
}
document.querySelector(".searchImage").focus();
document
  .querySelector('.crossImageButton')
  .addEventListener("click", () => {
    document.querySelector(".searchImage").value = "";
    getDataGallary()
  });
getDataGallary();
document.querySelector(".searchImage").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    getDataGallary(document.querySelector(".searchImage").value);
  }
});
document
  .querySelector(".searchImageButton")
  .addEventListener("click", (event) => {
    event.preventDefault();
    getDataGallary(document.querySelector(".searchImage").value);
  });

// document.querySelector('.searchImage').addEventListener('change',(event)=>{
//   if(event.target.value !== ''){
//     document.querySelector('#cross').classList.remove('crossImageButtonClosed')
//     document.querySelector('#cross').className='crossImageButton'
//   }
// })