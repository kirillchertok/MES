type Person = {
    name: string;
    age: number;
};

function processData(person: Person): string;

function processData(people: Person[]): void;

function processData(arg: Person | Person[]): string | void {
  if (Array.isArray(arg)) {
    console.log("Длина массива:", arg.length);
  } else {
    return `Имя: ${arg.name}, Возраст: ${arg.age}`;
  }
}