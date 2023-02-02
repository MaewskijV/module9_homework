const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;
var parser = new DOMParser();
const xmlDom = parser.parseFromString(xmlString, "text/xml");

const listNodes = xmlDom.querySelector("list");
let studentsNode = listNodes.querySelectorAll("student");

let result = {list: []};


studentsNode.forEach(function (element) {
    let student = new Object();
    const firstNameNode = element.querySelector("first");
    const studentAgeNode = element.querySelector("age");
    const studentProfNode = element.querySelector("prof");
    student.name = firstNameNode.textContent;
    student.age = studentAgeNode.textContent;
    student.prof = studentProfNode.textContent;
    result.list.push(student);
} )

  console.log(result);