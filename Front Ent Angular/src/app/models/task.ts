import { Task } from './interfaces/task';

export class TaskModel {
  public static tasks:Task[] = [
    {
      name:"Fibonacci algorithm",
      description:
`Fibonacci series generates the subsequent number by adding two previous numbers. Fibonacci series starts from two numbers − F0 & F1. The initial values of F0 & F1 can be taken 0, 1 or 1, 1 respectively.
Fibonacci series satisfies the following conditions − Fn = Fn-1 + Fn-2
Hence, a Fibonacci series can look like this − F8 = 0 1 1 2 3 5 8 13
or, this − F8 = 1 1 2 3 5 8 13 21`
    },
    {
      name:"State Machine",
      description:"An abstract machine that can be in exactly one of a finite number of states at any given time. The FSM can change from one state to another in response to some external inputs; the change from one state to another is called a transition. An FSM is defined by a list of its states, its initial state, and the conditions for each transition."
    },
    {
      name:"Perceptron",
      description:
`A Perceptron is an algorithm used for supervised learning of binary classifiers. Binary classifiers decide whether an input, usually represented by a series of vectors, belongs to a specific class.
In short, a perceptron is a single-layer neural network. They consist of four main parts including input values, weights and bias, net sum, and an activation function. `
    },
    {
      name:"Hash Algorithm",
      description:
`A cryptographic hash function (CHF) is a mathematical algorithm that maps data of arbitrary size (often called the "message") to a bit array of a fixed size (the "hash value", "hash", or "message digest"). It is a one-way function, that is, a function which is practically infeasible to invert. Ideally, the only way to find a message that produces a given hash is to attempt a brute-force search of possible inputs to see if they produce a match, or use a rainbow table of matched hashes. Cryptographic hash functions are a basic tool of modern cryptography. `
    },
    {
      name:"Sorting Algorithm",
      description:"A Sorting Algorithm is used to rearrange a given array or list elements according to a comparison operator on the elements. The comparison operator is used to decide the new order of element in the respective data structure."
    }
  ];
  public static getTask(index:number):Task{
    return this.tasks[index];
  }
}
