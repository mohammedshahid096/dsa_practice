# 2-Pointer Pattern

The **Two Pointer** pattern is a common technique used to solve array and linked-list problems efficiently.

Instead of using nested loops, we use two variables called **pointers** to keep track of positions.

---

## 1. When to Use 2-Pointer

Think about the Two Pointer pattern when:

- The problem involves an array or linked list.
- The array is sorted.
- You can sort the array.
- The problem asks for pairs, triplets, or quadruples.
- You need to merge arrays.
- You need to remove duplicates.
- You need to rearrange elements.
- You need to compare elements from both ends.
- You need to detect a cycle in a linked list.
- The problem asks you to avoid extra space.

### Common Keywords

    pair
    two numbers
    triplet
    sorted
    merge
    remove duplicates
    rearrange
    reverse
    cycle

---

## 2. Two Pointer vs Sliding Window

Two Pointer and Sliding Window are different patterns.

### Two Pointer

Two Pointer usually uses two positions:

    let start = 0;
    let end = arr.length - 1;

Example:

    [1, 2, 3, 5, 7, 9]
     ↑           ↑
    start       end

Common problems:

- Two Sum
- Reverse Array
- Palindrome
- Remove Duplicates
- Pair problems
- Triplet problems

### Sliding Window

Sliding Window usually maintains a continuous range of elements:

    let left = 0;
    let right = 0;

Common problems:

- Longest substring
- Maximum sum subarray
- Minimum size subarray
- Continuous subarray problems

---

## 3. Always Think About Brute Force First

Before trying to optimize the problem, first understand the brute-force solution.

For example:

> Find two numbers whose sum equals the target.

Brute-force approach:

    function findTargetWithBruteForce(arr, target) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          let sum = arr[i] + arr[j];

          if (sum === target) {
            console.log(arr[i], arr[j], "====>", sum);
            return;
          }
        }
      }
    }

Example:

    findTargetWithBruteForce([7, 11, 2, 3], 9);

Output:

    7 2 ====> 9

### Complexity

    Time:  O(n²)
    Space: O(1)

---

## 4. Hash Map Approach

We can improve the brute-force solution using a Hash Map.

The idea is:

    difference = target - currentNumber

For every number, check whether the required difference already exists in the map.

    function findTargetWithHashMap(arr, target) {
      const hashMap = new Map();

      for (let i = 0; i < arr.length; i++) {
        const difference = target - arr[i];

        if (hashMap.has(difference)) {
          console.log(arr[i], difference, "====>", target);
          return;
        }

        hashMap.set(arr[i], i);
      }

      console.log("Pair not found");
    }

Example:

    findTargetWithHashMap([7, 11, 2, 3], 9);

Output:

    2 7 ====> 9

### Complexity

    Time:  O(n)
    Space: O(n)

---

## 5. Important JavaScript Map Mistake

Do **not** check a Map like this:

    if (hashMap.get(difference)) {
    }

Why?

Because index `0` is falsy in JavaScript.

For example:

    hashMap.set(7, 0);

Then:

    hashMap.get(7);

returns:

    0

But:

    if (0) {
      // This will not execute
    }

Therefore, use:

    if (hashMap.has(difference)) {
    }

`has()` checks whether the key exists.

---

## 6. Two Pointer Approach

If the array is sorted, we can use Two Pointer.

First sort the array:

    arr.sort((a, b) => a - b);

Then create two pointers:

    let start = 0;
    let end = arr.length - 1;

Example:

    [1, 2, 3, 5, 7, 9]
     ↑           ↑
    start       end

Calculate:

    const sum = arr[start] + arr[end];

There are three possibilities.

### Case 1: sum === target

We found the answer.

    if (sum === target) {
      // Answer found
    }

### Case 2: sum < target

The current sum is too small.

We need a bigger value.

Because the array is sorted, move `start` forward:

    start++;

Example:

    1 + 7 = 8

Target:

    10

8 is too small, so:

    start++;

### Case 3: sum > target

The current sum is too large.

We need a smaller value.

Because the array is sorted, move `end` backward:

    end--;

Example:

    5 + 7 = 12

Target:

    10

12 is too large, so:

    end--;

---

## 7. Why Does Two Pointer Work?

The most important reason is:

> The array is sorted.

Example:

    [1, 2, 3, 5, 7, 9]
     ↑           ↑
    start       end

Suppose:

    target = 10

If:

    arr[start] + arr[end] < target

We need a larger number.

Therefore:

    start++;

If:

    arr[start] + arr[end] > target

We need a smaller number.

Therefore:

    end--;

If:

    arr[start] + arr[end] === target

We found the answer.

This allows us to eliminate many unnecessary combinations.

---

## 8. Example

Input:

    const arr = [2, 5, 1, 7, 3];
    const target = 10;

After sorting:

    [1, 2, 3, 5, 7]
     ↑           ↑
    start       end

### Step 1

    1 + 7 = 8

8 < 10.

Move `start`:

    [1, 2, 3, 5, 7]
        ↑        ↑
      start     end

### Step 2

    2 + 7 = 9

9 < 10.

Move `start`:

    [1, 2, 3, 5, 7]
           ↑     ↑
         start  end

### Step 3

    3 + 7 = 10

10 === 10.

Answer:

    3 and 7

---

## 9. Two Pointer Code

    function findTargetWithTwoPointer(arr, target) {
      arr.sort((a, b) => a - b);

      let start = 0;
      let end = arr.length - 1;

      while (start < end) {
        const sum = arr[start] + arr[end];

        if (sum === target) {
          console.log(arr[start], arr[end], "are the numbers");
          return;
        }

        if (sum < target) {
          start++;
        } else {
          end--;
        }
      }

      console.log("Pair not found");
    }

Example:

    findTargetWithTwoPointer([2, 5, 1, 7, 3], 10);

Output:

    3 7 are the numbers

---

## 10. Why `start < end`?

We use:

    while (start < end)

instead of:

    while (start <= end)

because we need two different elements.

We don't want to use the same element twice.

Once:

    start === end

both pointers point to the same element, so we stop.

---

## 11. Important: Sorting Changes Indexes

This is very important.

Suppose:

    const arr = [7, 11, 2, 3];

Original array:

    Index:  0   1   2   3
    Value:  7  11   2   3

After sorting:

    arr.sort((a, b) => a - b);

We get:

    Index:  0   1   2   3
    Value:  2   3   7  11

The indexes have changed.

### If the question asks for numbers

Sorting is usually okay.

Example:

    Return:
    [2, 7]

### If the question asks for original indexes

Be careful.

Example:

    Input:
    [7, 11, 2, 3]

    Target:
    9

The answer values are:

    7 + 2 = 9

Original indexes:

    7 -> index 0
    2 -> index 2

Answer:

    [0, 2]

If we sort the array first, those original indexes are lost.

In this situation, a Hash Map is usually a better approach.

---

## 12. Brute Force vs Hash Map vs Two Pointer

| Approach           |       Time |  Space | Indexes          |
| ------------------ | ---------: | -----: | ---------------- |
| Brute Force        |      O(n²) |   O(1) | Original indexes |
| Hash Map           |       O(n) |   O(n) | Original indexes |
| Sort + Two Pointer | O(n log n) | O(1)\* | Indexes change   |

`*` The space complexity assumes an in-place sorting model.

JavaScript's actual sorting implementation may use additional internal memory.

---

## 13. Which Approach Should I Use?

### Need original indexes?

Use:

    Hash Map

Because sorting changes indexes.

### Only need the numbers?

You can consider:

    Sort + Two Pointer

### Array is already sorted?

Two Pointer is usually a very good choice.

---

## 14. General Two Pointer Template

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

For an unsorted array:

    arr.sort((a, b) => a - b);

before using the Two Pointer technique.

---

## 15. Two Pointer Mental Model

Remember:

    sum < target
          ↓
    Need a bigger number
          ↓
        start++

    sum > target
          ↓
    Need a smaller number
          ↓
        end--

    sum === target
          ↓
      Answer found

---

## 16. Mental Checklist

When solving an array problem, ask:

1. Is the array sorted?
2. Can I sort the array?
3. Do I need the original indexes?
4. Am I looking for a pair?
5. Am I looking for a triplet?
6. Can I use two pointers?
7. Can I solve it without extra space?
8. What happens when the sum is too small?
9. What happens when the sum is too large?
10. What is the brute-force solution?
11. What is the optimized solution?

---

## 17. Key Takeaway

The basic Two Pointer idea is:

    Sorted Array
         ↓
    Two Pointers
         ↓
    Compare Values
         ↓
    Move Start or End
         ↓
    Reduce Unnecessary Comparisons

Remember:

    sum < target   → start++

    sum > target   → end--

    sum === target → answer found

The most important thing is not just memorizing the pattern.

Understand **why** we move `start` and `end`.

That understanding allows you to recognize Two Pointer problems in different forms.
