const main = document.querySelector('.main')
async function getDataGallary(value) {
    main.replaceChildren()
   const responce = await fetch(`https://api.unsplash.com/search/photos/?client_id=J00kjXQZqRy2E2NIokWLcTjGLN6SKIDJGfRtyuh4gug&query=${value}`)
   const data = await responce.json()
   
   data.results.map((item)=>{
        let img = document.createElement('img')
        img.src=`${item.urls.full}`
        img.className='galleryImage'
        return(
            main.appendChild(img)
        )
    })
    console.log(document.querySelectorAll('.galleryImage'));
    console.log(data);
    return data
}
getDataGallary()
document.querySelector('.searchImage').addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      getDataGallary(document.querySelector('.searchImage').value)
    }
}); 