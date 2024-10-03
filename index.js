// const containerEl = document.querySelector('.container')


// let careers = ["YouTuber", "Web Developer", "Freelancer", "Instructor"];


// let careerIndex = 0;
// let characterIndex = 0;



// function updateText() {
//     characterIndex++
//     containerEl.innerHTML = `<h1>I am ${careers[careerIndex].slice(0,1) === 'I' ? 'an' : 'a'} ${careers[careerIndex].slice(0, characterIndex)}</h1>`

//     if(careers[careerIndex].length === characterIndex){
//         careerIndex++
//         characterIndex = 0
//     }
//     if(careerIndex === careers.length) {
//         careerIndex = 0
//     }
//     setTimeout(updateText, 300)
// }
 

// updateText()



const containerEl = document.querySelector('.container')

let careers = ["Boy", "YouTuber", "Web Developer", "Freelancer", "Instructor"];
let careerIndex = 0;
let characterIndex = 0;




function updateText() {
    characterIndex++
    containerEl.innerHTML = `<h1>I am a ${careers[careerIndex].slice(0, characterIndex)}</h1>`
    

    if (characterIndex === careers[careerIndex].length) {
        careerIndex++
        characterIndex = 0
    }
    if (careers.length === careerIndex) {
        careerIndex = 0
    }
    setTimeout(updateText, 1000)
}

updateText();



