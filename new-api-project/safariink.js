
collectData()
async function collectData(){
    try{
const res = await fetch("https://kitsu.io/api/edge/anime?filter[text]=cowboy+bebop&page[limit]=1");
const { data } = await res.json();
    
console.log(data[0].attributes.canonicalTitle);
}catch(error){
    console.error(error)
}
/*fetch('https://kitsu.app/api/edge/manga')
.then((response) => {
    const res = response.json()
    return res
})
.then((data) => {
    console.log(data)
})*/






/*const res = fetch("https://kitsu.io/api/edge/anime?filter[text]=cowboy+bebop&page[limit]=1");
const { data } =  res.json();
console.log(data[0].attributes.canonicalTitle);*/ 