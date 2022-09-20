const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/yellow-icon.jpg') {
    myImage.setAttribute('src','images/yellow-icon-2.jpg');
  } else {
    myImage.setAttribute('src','images/yellow-icon.jpg');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    const myName = prompt('Please enter your name.');
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `Welcome to Psychedelic Art blog, ${myName}`;
    }
  }

  if (!localStorage.getItem('name')) {
    setUserName();
  } else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Welcome to Psychedelic Art blog, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  }