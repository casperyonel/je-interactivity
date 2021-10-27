let message = document.getElementById('message')


const addMovie = (event) => {
    event.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement("li")
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement('button')
    // creating a delete button
    // below is setting the text to a string x
    // then we make a listener, which executes the cb
    // the cb takes the event's target, which is the button
    // and goes to its parent, which is the listed item
    // and deletes it, 
    deleteBtn.textContent = "x"
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    // this adds a delete button as a child to the listed item
    document.querySelector('ul').appendChild(movie)
    inputField.value = ''
}

document.querySelector('form').addEventListener('submit', addMovie)

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = `${event.target.previousSibling.textContent} deleted!`
    revealMessage()

}

// So we made an event listener below, that has a listener 
// with a cb function of the above. 
// inputField makes the input box go away after the other
// code is executed. We are creating a span, that takes in
// the user input, which gets appended to a list item call
// movie, which we then add to the unordered list, storing
// all of these inputs. Then we reset the input field to 
// nothing. 

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')) {
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = `${event.target.textContent} added back!`
    }
    revealMessage()
}

// .toggle will look to see if the class exists
// and if it doesnt it'll add it.

const revealMessage = () => {
    setTimeout(cb, 1000)
}

const cb = () => {
    message.classList.add('hide')
}