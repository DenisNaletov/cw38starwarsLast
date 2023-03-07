export class Api{
    static getRandomNumber = () => {
        let randomNum = Math.floor(Math.random()*(7-1))+1;
        console.log(randomNum);
        return randomNum;
    }
    static async getResponse(){
        const baseUrl = 'https://sw-info-api.herokuapp.com/v1/films';
        let response = await fetch(`${baseUrl}/${this.getRandomNumber()}`)
        .then((response) => response.json())
            .then((data) => {
                document.querySelector("p").innerHTML =
                    `${data.opening_crawl}`
            });

    }

}