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
