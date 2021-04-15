import { EditorLanguage } from './interfaces/editor-language';

export class EditorLanguageModel {
  public static findLanguage(index:number):string{
    return this.languages[index].language;
  }
  public static findDefaultValue(index:number):string{
    return this.languages[index].defaultValue;
  }
  public static languages:EditorLanguage[] = [
    {
      language:"csharp",
      defaultValue:
`using System;
namespace TaskSolve
{
  public class Program
  {
    public static void Main(string[] args) => Console.WriteLine("Hello, world!");
  }
}`
    },
    {
      language:"cpp",
      defaultValue:
`#include <iostream>

using namespace std;

int main()
{
  cout<<"Hello World";
  return 0;
}`
    },
    {
      language:"c",
      defaultValue:
`#include <stdio.h>

int main()
{
  printf("Hello World");
  return 0;
}`
    },
    {
      language:"java",
      defaultValue:
`public class HelloWorld{

  public static void main(String []args){
    System.out.println("Hello World");
  }

}`
    },
    {
      language:"typescript",
      defaultValue:
`interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);`
    },
    {
      language:"javascript",
      defaultValue:
`function getIntoAnArgument() {
  var args = arguments.slice();
  args.forEach(function(arg) {
      console.log(arg);
  });
}`
    },
    {
      language:"python",
      defaultValue:
`import banana

class Monkey:
    # Bananas the monkey can eat.
    capacity = 10
    def eat(self, n):
        """Make the monkey eat n bananas!"""
        self.capacity -= n * banana.size

    def feeding_frenzy(self):
        self.eat(9.25)
        return "Yum yum"`
    }
  ];
  public static getLanguage(index:number):EditorLanguage{
    return this.languages[index];
  }
}
