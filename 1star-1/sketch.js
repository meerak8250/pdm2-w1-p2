const usernames = new Set([]);
let submitButton;

function setup() {
    createCanvas(400, 400);
    background(255);
    //username input box
    textBox = createInput();
    const mainContainer = select("main");
    textBox.parent(mainContainer);
    textBox.position(5, 305);
    //submit button
    submitButton = createButton("Submit");
    submitButton.parent(mainContainer);
    submitButton.position(190, 305);

}

function draw() {
    text("Enter username", 5, 300);
}

// responses to name inputs
function addNewUsername() {
    const username = textBox.value();
    if (usernames.has(username)) {
        text("Username already exists! Please enter a new name", 5, 350);
    }
    else if (usernames.add(username)) {
        text("Hello," + username + "!", 5, 350);
    }
    else if (username === ""){
        text("Username cannot be blank! Please enter a new name", 5, 350);
    }
}

//to use the submit button to add usernames to the set
function buttonClicked(){




    
}


