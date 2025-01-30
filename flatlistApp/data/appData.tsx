/*
This file will inlyude our data types that are used across 
multiple files

we can also declare arrays or other variables here

*/
type dataType = {
    id: string;  //unique identifier for each element in list(student id)
    title: string,  //what I display (ex: Isha)
  }

  const DATA: dataType[] = [
    {id: "1", title: "First"},
    {id: "2", title: "Second"},
    {id: "3", title: "Third"},
    {id: "4", title: "Fourth"},
  ]
// bc i am exporting multiple item from the same file 
// thats why i am NOT using the word default
  export {dataType, DATA};