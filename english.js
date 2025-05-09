// english.js

let devProfile = {
    fullName: "Carlos Fernandez",
    age: 47,
    profession: "Full Stack Developer",
    skills: ["JavaScript","React","Node.js","MongoDB"],
    isEmployed: true,
    contact: {
        email: "carfer0078@gmail.com",
        location: "Posadas, Misiones, Argentina",
        phone: "+54 9 376 4 123456"
    },
};

function presentProfile(profile) {
    let skillsString = profile.skills.join(", ");
    let employmentStatus = profile.isEmployed ? "I am currently employed." : "I am looking for a job.";
    let presentation = `Hello! my name is ${profile.fullName}. I am a ${profile.age}. i work with ${skillsString}. I Live in ${profile.contact.location}. ${profile.age}. years old.${employmentStatus}`;
    return presentation;
}
console.log(presentProfile(devProfile));
// Output: Hello, my name is Carlos Fernandez. I am a 47 years old i work with JavaScript, React, Node.js, MongoDB. I Live in Posadas, Misiones, Argentina. 47 years old.I am currently employed.
