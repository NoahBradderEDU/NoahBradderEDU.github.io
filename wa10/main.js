const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a swim. When they got to :inserty:, they stared in confusion for a few moments, then :insertz:. Bob saw nothing, so they were surprised — :insertx: weighs 150 pounds, and idk why we included this fact."
const insertX = ["Larry the Cable Guy","Morgan Freeman","John Lennon"]
const insertY = ["Sydney", "Bangkok", "Madrid"]
const insertZ = ["irritadely ran","courteously bowed", "saw a cow and got frightened"]

randomize.addEventListener('click', result);

function result() {
   var newStory = storyText;

var xItem, yItem, zItem;

xItem = randomValueFromArray(insertX);
yItem = randomValueFromArray(insertY);
zItem = randomValueFromArray(insertZ);

newStory = newStory.replace(":insertx:",xItem);
newStory = newStory.replace(":inserty:",yItem);
newStory = newStory.replace(":insertz:",zItem);
newStory = newStory.replace(":insertx:",xItem);
  
  if(customName.value != '') {
    var name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    var stonesPerPound = 0.0714286;
    var weight = Math.round(300*stonesPerPound)+' stone';
    var temperature = Math.round((94-32)*5/9)+' centigrade';
    newStory = newStory.replace("94 fahrenheit", temperature);  
    newStory = newStory.replace("150 pounds", weight); 
  }
  
  story.textContent = newStory;
  story.style.visibility = 'visible';
}