Two Pointer Pattern

The Two Pointer pattern is a common technique used to solve array and linked-list problems efficiently.

Instead of using nested loops, we maintain two positions (pointers) and move them according to the problem's conditions.

What is Two Pointer?

Two Pointer means using two variables to keep track of positions in an array or linked list.

For an array, they are commonly:

let start = 0;
let end = arr.length - 1;

Then we move either start or end depending on the current condition.

For example:

[1, 2, 3, 5, 7, 9]
↑ ↑
start end

When Should We Think About Two Pointers?

When reading a problem, consider Two Pointer when you see:

A sorted array
A problem involving pairs
A problem involving triplets
Finding two numbers with a particular sum
Removing duplicates
Merging arrays
Rearranging elements
Comparing elements from both ends
Linked-list cycle detection
A requirement to avoid extra space
Common keywords

If the problem says:

pair
two numbers
sorted array
remove duplicates
merge
rearrange
reverse
cycle

you should consider whether Two Pointer can be used.

Two Pointer vs Sliding Window

Two Pointer and Sliding Window are related, but they are not the same pattern.

Two Pointer

Usually uses two independent positions that move according to a condition.

Example:

let start = 0;
let end = arr.length - 1;

Typical use cases:

Two Sum in a sorted array
Reverse an array
Remove duplicates
Palindrome checking
Pair problems
Sliding Window

Usually maintains a continuous range/subarray.

Example:

let left = 0;
let right = 0;

The window expands and shrinks depending on a condition.

Typical use cases:

Longest substring
Maximum sum subarray
Minimum-size subarray
Problems involving a continuous subarray
Always Think About Brute Force First

Before trying to optimize a problem, understand the brute-force solution.

For finding two numbers whose sum equals a target, brute force can use two loops.

for (let i = 0; i < arr.length; i++) {
for (let j = i + 1; j < arr.length; j++) {
if (arr[i] + arr[j] === target) {
// found the answer
}
}
}

Complexity
Time: O(n²)
Space: O(1)

This solution is simple, but it becomes slow when the array gets large.

Hash Map Approach

We can improve the time complexity using a Map.

For every number:

difference = target - currentNumber

Then check whether the difference already exists.

Example:

const map = new Map();

for (let i = 0; i < arr.length; i++) {
const difference = target - arr[i];

if (map.has(difference)) {
// pair found
}

map.set(arr[i], i);
}

Complexity
Time: O(n)
Space: O(n)

This is usually a good solution when we need the original indexes and cannot modify the array.

Two Pointer Approach

If the array is sorted, Two Pointer gives us an efficient solution without requiring a hash map.

Start with:

start → first element
end → last element

Example:

[1, 2, 3, 5, 7, 9]
↑ ↑
start end

Calculate:

sum = arr[start] + arr[end];

Then:

If sum equals target

We found the answer.

if (sum === target) {
// found
}

If sum is smaller than target

We need a larger number.

Move start forward:

start++;

If sum is greater than target

We need a smaller number.

Move end backward:

end--;

Why Does This Work?

Suppose:

[1, 2, 3, 5, 7, 9]
↑ ↑
start end

Target:

10

First:

1 + 9 = 10

We found the answer.

Now consider:

[1, 2, 3, 5, 7, 9]
↑ ↑
start end

1 + 9 = 10

If instead the sum were smaller than the target:

1 + 7 = 8

Moving end backward would make the sum even smaller.

So we move:

start++

If the sum were too large:

3 + 9 = 12

Moving start forward could make the sum larger.

So we move:

end--

This is why the sorted order is important.

Example

Input:

[2, 5, 1, 7, 3]

Target:

10

After sorting:

[1, 2, 3, 5, 7]
↑ ↑
start end

Check:

1 + 7 = 8

Too small:

start++

Now:

[1, 2, 3, 5, 7]
↑ ↑
start end

2 + 7 = 9

Still too small:

start++

Now:

[1, 2, 3, 5, 7]
↑ ↑
start end

3 + 7 = 10

Found the answer.

Result:

3 and 7

Important: Sorting Can Change Indexes

This is one of the most important things to remember.

Suppose:

const arr = [7, 11, 2, 3];

Original indexes:

7 → 0
11 → 1
2 → 2
3 → 3

After sorting:

[2, 3, 7, 11]

The indexes have changed.

Therefore:

If the question asks for the actual values, sorting is usually fine.

But:

If the question asks for the original indexes, sorting can cause a problem.

For original indexes, a hash map is often a better choice.

Important JavaScript Map Mistake

Avoid doing this:

if (map.get(difference)) {

because index 0 is falsy in JavaScript.

For example:

map.set(7, 0);

Then:

map.get(7)

returns:

0

But:

if (0)

is false.

Instead use:

if (map.has(difference)) {

This correctly checks whether the key exists.

Important Loop Detail

For a pair problem, don't compare an element with itself.

Prefer:

for (let j = i + 1; j < arr.length; j++)

instead of:

for (let j = i; j < arr.length; j++)

Because with j = i, you are checking:

arr[i] + arr[i]

which may not be allowed by the problem.

Complexity Comparison
Approach Time Space
Brute Force O(n²) O(1)
Hash Map O(n) O(n)
Two Pointer + Sort O(n log n) O(1)\*

O(1) space assumes the sorting operation is considered in-place. JavaScript's actual Array.prototype.sort() implementation may use additional internal memory.

Decision Making

When you see a Two Sum-style problem, think:

Can I use brute force?
↓
Can I optimize with a Hash Map?
↓
Is the array already sorted?
↓
Can I sort it?
↓
Do I need original indexes?
↓
Choose the approach

If you need original indexes

Use:

Hash Map

If you only need the numbers

You can consider:

Sort + Two Pointer

If the array is already sorted

Two Pointer is often the natural choice.

Two Pointer Template
function twoPointer(arr, target) {
let start = 0;
let end = arr.length - 1;

while (start < end) {
const sum = arr[start] + arr[end];

    if (sum === target) {
      return [arr[start], arr[end]];
    }

    if (sum < target) {
      start++;
    } else {
      end--;
    }

}

return null;
}

For an unsorted array, sort first:

arr.sort((a, b) => a - b);

Mental Checklist

When solving an array problem, ask:

Is the array sorted?
Can I sort it?
Do I need the original indexes?
Am I looking for a pair/triplet?
Can I use two positions?
Can I solve it without extra space?
What happens when the sum is too small?
What happens when the sum is too large?
What is the brute-force solution?
What is the optimized solution?

The goal is not to immediately recognize a pattern.

The goal is to understand why the pattern works.
