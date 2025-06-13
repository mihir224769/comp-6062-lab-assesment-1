const studentName='Mihir Jariwala';
const studentNumber= 1224388;

console.log(studentName);
console.log(studentNumber);


console.log(`${studentName} - ${studentNumber}`);

const HeadingPrimaryContent = document.querySelector("h1");
HeadingPrimaryContent.innerHTML = `${studentName} - ${studentNumber}`;
console.log(HeadingPrimaryContent.innerHTML);

HeadingPrimaryContent.classList.add("primaryHeading");
