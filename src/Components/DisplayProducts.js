function DisplayProducts(){
    // console.log(fetch('https://productlist-api-4e97a-default-rtdb.firebaseio.com/data.json'));
    fetch('https://productlist-api-4e97a-default-rtdb.firebaseio.com/data.json')
    .then(response => {
        // console.log(response);
        // const data = response.json();
        // console.log(data);
        if(!response.ok){
            throw Error('ERROR')
        }

        return response.json();
})
.then(data => {
    console.log(data)
    const html = data.product
    .map(product => {
        return '<p>Title : ${product.title}</p>'
    })
    // console.log(html)
    // document.querySelector('#app').innerHTML = '<h2>DisplayProducts Component</h2>'
    document.querySelector('#app').insertAdjacentHTML("afterbegin",html);
})
.catch(error => {
    console.log(error);
})
return(
    <div id="app">

    </div>

)
}
DisplayProducts();

export default DisplayProducts

