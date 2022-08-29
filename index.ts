// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

//====================================

// Intersection types
// An intersection type is a way of combining multiple types into one.
// This means that you can merge a give type A with a type B or more ande get
// back a single type with all properties

type LeftType = {
  id: number;
  left: string;
};

type RightType = {
  id: number;
  rigth: string;
};

type IntersectionType = LeftType & RightType;

function showType(args: IntersectionType) {
  console.log(args);
}

showType({ id: 1, left: 'test', rigth: 'test' });

//====================================

//As you see, IntersectionType combines two types - LeftType an rigthType and uses the & sign to construct the intersection type.

//Unisn Types
//union types allows you tohave different types annotation within a given variable.

type Uniontype = string | number;

function showType1(arg: Uniontype) {
  console.log(arg);
}

showType1('test');
showType1(7);

//The function showTyp1 is a unition type that accepts both string an numbers as a parameter.

//====================================

//Generic Types
//a generi type is a way of reusing part of a given type. Ite helps to capture the Type T passed in as a parameter.

function showType2<T>(args: T) {
  console.log(args);
}

showType2('test');
showType2(1);

// To construc a generic type, you need the brackets an pass T as a parameter.

// Here, I use T (The name is up to you) and then, call the function showtype2 twice with different type annotations because it's generic-pit can be reused.

interface GenericType<T> {
  id: number;
  name: T;
}

function showtype3(args: GenericType<string>) {
  console.log(args);
}

showtype3({ id: 1, name: 'test' });

function showTypeTwo(args: GenericType<number>) {
  console.log(args);
}

showTypeTwo({ id: 1, name: 4 });

//Here, we have another example taht an interface GenericType with receives a generic type T. And since it's reusable, we can call it firt with a string and then a number.

interface GenercType1<T, U> {
  id: T;
  name: U;
}

function showType4(args: GenercType1<number, string>) {
  console.log(args);
}

showType4({ id: 1, name: 'test' });

function showTypeTwo2(args: GenercType1<string, string[]>) {
  console.log(args);
}
showTypeTwo2({ id: '0001', name: ['This', 'is', 'a', 'teste'] });

// A generic type can receive several arguments. Here, we pass in two parameters: T and U, and then use them as type annotations for the properties. That said, we can now use the interface and provide different types as arguments.
