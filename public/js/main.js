document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://simple-rap-api-fun-ec.herokuapp.com/api/${rapperName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('#age').innerText = data.age
        document.querySelector('#birth-name').innerText = data.birthName
        document.querySelector('#birth-loc').innerText = data.birthLocation
    }catch(error){
        console.log(error)
    }
}