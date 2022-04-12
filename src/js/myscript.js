console.log('Welcome to HackerU-JustCode Assignment');
$(document).ready(function() {
    getRemoteData();
});
function getRemoteData() {
     // write your code here to fetch data from api.
    fetch('https://restcountries.com/v3.1/all') // where is the url to fetch the countries data I decided to use the one here <-
    //It says on the readme.md Now you can go to the GitHub issues and start knocking them down
    // where on the respository can I find this.
        .then(response => response.json())
        .then(data => {
            const postCountry = data.slice(0,100)
            console.log(postCountry)
            let html = ''
            let numberIndex = data.findIndex(numberOf => data.numberOf)
            //let newNumber = numberIndex + 1
            for(country of postCountry){
                html+=`
                    <table class="table-body">
                        <tbody>
                            <ul>
                                <tr>
                                    <td class="id">${numberIndex+1}</td>
                                    <td class="name">${country.name.common}</td>
                                    <td class="continent">${country.continents}</td>
                                    <td class="capital">${country.capital}</td>
                                    <td>${country.flag}</td>
                                </tr>
                            </ul>
                        </tbody>
                    </table>
                `
            }
            console.log(html)
            document.getElementById('country-number').innerHTML= html
    })
}