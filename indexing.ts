// indexing
interface StringArray {
  [index: number]: string;
}

const arr: StringArray = ['Thor', 'Hulk'];
console.log(arr[0]);

const arr2: string[] = ['BlackWidow', 'Yelena'];
console.log(arr2[1]);


// READ ONLY
interface ReadonlyStringArray {
  readonly [index: number]: string;
}

const arr3: ReadonlyStringArray = ['BW', 'Yelena'];
// arr3[1] = 'Captain'; // error
