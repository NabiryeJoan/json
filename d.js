//1. Creating a JSON Object
// const person = {
//     "name": "John Doe",
//     "age": 30,
//     "city": "New York"
//   };
  // we create a JavaScript object person with properties such as name, age, and city.
  // The object is defined using curly braces.
  //We can then log the object to the console.
  
  //2. Parsing a JSON String:
//   console.log(person);

//   const jsonString = '{"name": "John Doe", "age": 30, "city": "New York"}';
// const Person = JSON.parse(jsonString);

// console.log(person.name); 
// console.log(person.age); 
// console.log(person.city);
//we have a JSON string jsonString that represents an object with properties like name, age, and city.
//These examples demonstrate the basic concepts of creating a JSON object and parsing a JSON string in JavaScript. JSON can be more complex and can include nested objects and arrays, 

//3.Converting a JavaScript Object to a JSON String:
const Person = {
    name: "collins",
    age: 23,
    city: "jinja"
  };
  
  const jsonString = JSON.stringify(Person);
  console.log(jsonString);
  //we have a JavaScript object person. 
  //Using JSON.stringify(), we convert the object into a JSON-formatted string. 
  //The resulting jsonString will contain the serialized representation of the object.
  
  //4.Accessing Values in a Nested JSON Object
  const data = {
    name: "Ian",
    age: 16,
    address: {
      city: "kampala",
      country: "uganda"
    }
  };
  
  console.log(data.name); 
  console.log(data.address.city); 
  //we have a JavaScript object data that contains nested properties.
  // We can access values in the nested object by chaining property access using dot notation

//5.Iterating Over JSON Array:
const jsonArray = '[{"name":"John","age":30},{"name":"Jane","age":25},{"name":"Bob","age":40}]';
const people = JSON.parse(jsonArray);

people.forEach(person => {
  console.log(person.name);
  console.log(person.age);
});
//we have a JSON array jsonArray containing a list of people.
// We parse the JSON array into a JavaScript array of objects using JSON.parse().
// Then, we iterate over each person using forEach() and access their properties (name and age) within the loop.