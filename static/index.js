//Making sure dom content is loaded before adding a listener
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("form"); //Searching form by id
    const translatedTextElement = document.getElementById("translated-text"); //Element where translated text is placed
    const url = "http://localhost:5000/translate"; //Backend path for translation

    //Event listener for form submit
    form.addEventListener("submit", async (event) => {
        event.preventDefault() //Preventing page from reloading after submit

        translatedTextElement.innerText = "Loading..."
        //Sending the text to be translated by the backend
        const data = new FormData(form);
        const response = await axios.post(url, data)
            .then((response) => {
                if (response.status === 200) {
                    console.log("successful")
                } else {
                    translatedTextElement.innerText = "" //Removing the loading text if request fails
                    console.log("Something went wrong!")
                }
                translatedTextElement.innerText = response.data.translatedText[0].translation_text //Showing the translated text to the user
            })


    });
});
