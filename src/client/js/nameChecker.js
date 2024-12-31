function checkForName(inputText) {
    console.log(":: Running checkForName ::", inputText);
    let names = [
        "Latifa",
        "Shaima",
        "Laila",
        "Mashial",
        "Ahlam",
        "Alia",
        "Rashida",
    ]

    if(names.includes(inputText)) {
        alert("Welcome,   Captain!")
    }
    else {
        alert("Access denied!");
    }
}

export { checkForName }
