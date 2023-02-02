const jsonString = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`;

   const data = JSON.parse(jsonString);
   let result = {list: []};

   let list = data.list;
 

   list.forEach(element => {
    let worker = new Object();
    worker.name = element.name;
    worker.age = element.age;
    worker.prof = element.prof;
    result.list.push(worker);
   });

   console.log(result);
