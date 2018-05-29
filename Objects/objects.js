let campaign = {
    district: "5th",
    taxes: "Some Stuff",
    jobs: "Other stuff",
    infrastructure: "I don't know",
    HealthCare: "None for anyone",
    crimeAndInforcement:"Robots destroy"
}
 function changeTaxes (object, propertyToChange, propertyValue) {
    object[propertyToChange] = propertyValue;
}
changeTaxes(campaign, "taxes", "lower, son")
console.log(campaign);



const url = {
    donationForm: "www.poop.com"
}
function changeForm (object, propertyToChange, propertyValue) {
    object[propertyToChange] = propertyValue;
}
changeForm(url, "donationForm", "poop")
console.log(url);

const calendar = {
    event1: "Ice Cream Social",
    event2: "Pool Party",
    event3: "Orgy"
}
function changeEvent (object, propertyToChange, propertyValue) {
    object[propertyToChange] = propertyValue;
}
changeEvent(calendar, "event2", "BBQ")
console.log(calendar);

const volunteer = {
  Name: "Janet Snakehole",
  Adress: "100 poop ln",
  Email: "pooppoop@email.com",
  Phone: "867-5309",
  Avaliability: "Never",
  willingTo: "Answer Phones"

}
function changeAdress (object, propertyToChange, propertyValue) {
    object[propertyToChange] = propertyValue;
}
changeAdress(volunteer, "Adress", "112 ache dr")
console.log(volunteer);

const biography = {
    Born: "In an alley",
    Age: "45",
    parents: "dead",
    Children: "12"
}
function changeAge (object, propertyToChange, propertyValue) {
    object[propertyToChange] = propertyValue;
}
changeAge(biography, "Age", "90")
console.log(biography);

const images = {
  headshot: "head.jpg",
  family: "family.jpg",
  followers: "cult.jpg"

}
function changePhoto (object, propertyToChange, propertyValue) {
    object[propertyToChange] = propertyValue;
}
changePhoto(images, "family", "hey.jpg")
console.log(images);

const statement = {
    missionStmnt: "I will not make things worse"
}
function changeStuff (object, propertyToChange, propertyValue) {
    object[propertyToChange] = propertyValue;
}
changeStuff(statement, "missionStmnt", "I won't run you over")
console.log(statement);

const vote = {
    register: "www.poop.com"
}
const stuff = document.createElement("article")
stuff.setAttribute("id", "distrtict 5" )
document.body.append(stuff);

let more =
document.createTextNode(campaign.district);
stuff.appendChild(more);


let more1 = document.createTextNode(campaign.jobs);
stuff.appendChild(more1);


let more2 = document.createTextNode(campaign.HealthCare);
stuff.appendChild(more2);


let more3= document.createTextNode(campaign.crimeAndInforcement);
stuff.appendChild(more3);


