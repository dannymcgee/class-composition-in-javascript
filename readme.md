# Class Composition in JavaScript

I've been reading and thinking a lot lately about application architecture and patterns (particularly as it relates to game development), which led me down the rabbit hole of Object-Oriented vs Functional Programming, and Inheritance vs Composition. I eventually arrived at the conclusion that framing that question as a zero-sum game where the two approaches are mutually exclusive with one another is reductive, and in many situations the correct approach is a combination of both.

My goal was to find a way to preserve the basic fundaments of the Object-Oriented paradigm by defining types of objects/entites with classes, allowing for some minimal inheritance of certain base properties, while fleshing out the more detailed and specific functionality through composition. This little example is one approach to reaching that goal, using JavaScript.

Some of the sources I drew from for this example:
* Bob Nystrom's [talk on the subject of Game Architecture](https://youtu.be/JxI3Eu5DPwE?t=892) (and his excellent book, [Game Programming Patterns](http://gameprogrammingpatterns.com/))
* FunFunFunction's episode on [composition vs inheritance](https://www.youtube.com/watch?v=wfMtDGfHWpA)
* Alligator.io &ndash; [Class Composition in JavaScript](https://alligator.io/js/class-composition/)