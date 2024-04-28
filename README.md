[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/bHkMPWBv)
# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

## Runtime Analysis

Is the asymptotic complexity of tail-recursive Fibonacci different from the
non-tail-recursive version? Why, or why not, and what is the complexity
(worst-case $\Theta$)? Add your answer, including your reasoning, to this
markdown file.

## My Analysis

The worst case runtime for my algorithm is $\theta(n)$ this is because the recursion just runs n times and adds the numbers every time. 

```
def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)
```

This function isn't tail recursion because of the two recursive calls so I will be comparing to that. This method would have a time complexity of $\theta(2^n)$ because if you break it down iteration by iteration, it would be called 2 times for every element in the sequence that we need to get to. the calls could be visually represented as a binary tree with $2^n$ nodes where each node would be a recursive call. 

When compared, tail recursion is much faster because as n grows, the other recursive method can get ineddivient very quickly.








