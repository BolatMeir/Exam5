let btn2 = document.querySelector('.btn');
async function suraqtar() {
    try{
        let response = fetch('https://api.jsonbin.io/v3/b/67965b2ee41b4d34e47efbb7');
        if(!response.ok){
            throw new Error('Error');
        }
    }catch(error){
        console.log(error);
    }
}