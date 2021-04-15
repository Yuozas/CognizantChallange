CREATE DATABASE cognizant_challange;

CREATE TABLE Tasks(
	"ID" int identity(1,1) NOT NULL,
	"Name" text NOT NULL,
	"Description" text NOT NULL,
	CONSTRAINT PK_Tasks PRIMARY KEY (ID)
)
INSERT INTO Tasks VALUES 
('Fibonacci algorithm', 'Fibonacci series generates the subsequent number by adding two previous numbers. Fibonacci series starts from two numbers − F0 & F1. The initial values of F0 & F1 can be taken 0, 1 or 1, 1 respectively. \
Fibonacci series satisfies the following conditions − Fn = Fn-1 + Fn-2 \
Hence, a Fibonacci series can look like this − F8 = 0 1 1 2 3 5 8 13 \
or, this − F8 = 1 1 2 3 5 8 13 21'),
('State Machine', 'An abstract machine that can be in exactly one of a finite number of states at any given time. The FSM can change from one state to another in response to some external inputs; the change from one state to another is called a transition. An FSM is defined by a list of its states, its initial state, and the conditions for each transition.'),
('Perceptron', 'A Perceptron is an algorithm used for supervised learning of binary classifiers. Binary classifiers decide whether an input, usually represented by a series of vectors, belongs to a specific class. \
In short, a perceptron is a single-layer neural network. They consist of four main parts including input values, weights and bias, net sum, and an activation function.'),
('Hash Algorithm', 'A cryptographic hash function (CHF) is a mathematical algorithm that maps data of arbitrary size (often called the "message") to a bit array of a fixed size (the "hash value", "hash", or "message digest"). It is a one-way function, that is, a function which is practically infeasible to invert. Ideally, the only way to find a message that produces a given hash is to attempt a brute-force search of possible inputs to see if they produce a match, or use a rainbow table of matched hashes. Cryptographic hash functions are a basic tool of modern cryptography.'),
('Sorting Algorithm', 'A Sorting Algorithm is used to rearrange a given array or list elements according to a comparison operator on the elements. The comparison operator is used to decide the new order of element in the respective data structure.');

CREATE TABLE Languages(
	"ID" int identity(1,1) NOT NULL,
	"Name" text NOT NULL
	CONSTRAINT PK_Languages PRIMARY KEY (ID)
)

INSERT INTO Languages VALUES
('csharp'),
('cpp'),
('c'),
('java'),
('typescript'),
('javascript'),
('python');

CREATE TABLE Solutions(
	"ID" int identity(1,1) NOT NULL,
	"Author" varchar(50) NOT NULL,
	"TaskID" int NOT NULL,
	"LanguageID" int NOT NULL,
	"Solution" text NOT NULL,
	CONSTRAINT PK_Solutions PRIMARY KEY("ID"),
	CONSTRAINT FK_Solutions_Tasks FOREIGN KEY("TaskID") REFERENCES Tasks("ID"),
	CONSTRAINT FK_Solutions_Languages FOREIGN KEY("LanguageID") REFERENCES Languages("ID")
);

CREATE VIEW SolutionsView AS
SELECT S."ID", S."Author", T."Name" AS Task, L."Name" AS "Language", S."Solution"
FROM Solutions AS S
INNER JOIN Tasks AS T
ON T."ID" = S."TaskID"
INNER JOIN Languages AS L
ON L."ID" = S."LanguageID";
