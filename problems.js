// Question 1
// Write a function that returns two numbers multiplied
// ex: multiply(5, 10) should return 50

function multiply(x, y){
    return x*y
} 

// Question 2
// Given an array of integers, return a new array of the same length that contains the original values squared.
// ex: arraySquare([1,3,5,8]) should return [1,9,25,64]

function arraySquare(arr){
    return arr.map(integer => integer*integer)
}

// Question 3
// Given two integers (low and high), return how many numbers are in that range that
// DO NOT contain the number 5. This includes any number that has a 5, like 15, 352, etc.
// ex: integerRange(1, 10) should return 8
// ex: integerRange(4, 25) should return 19

function integerRange(low, high) {
    if(low>high) return 0
    let counter = 0

    for(var i = low; i<high; i++ ){
        if(!i.toString().includes('5')) {
            counter++
        }
    }
    return counter
}

// Question 4
// Write a function that takes an integer and an unsorted array of numbers
// and returns true if there's any pair of numbers in that array that can be
// summed up to the input integer.
// ex: inputSum([1,3,5,4,2], 7) should return true
// ex: inputSum([1,3,5,4,2], 2) should return false

function inputSum(arr, targetInt) {
    for(var i = 0; i<arr.length;i++){
        let currentElement = arr.shift()
        for(var j=0; j<arr.length+1;j++){
            if((currentElement+arr[j]===targetInt)){
                return true
            }
            if((i===arr.length-1&&(currentElement + arr[arr.length-1])!==targetInt)){
                return false
            }
        }
        arr.push(currentElement)
    }
}

// Question 5
// Implement a function that accepts an array of integers as an argument.
// This function should return the sum of all integers in the array.
// Your solution should be **recursive**.
// ex: recursiveSum([1,2,3,4,5]) should return 15

function recursiveSum(input) {
    if (input.length===1){
        return input[0]
    }
    else {
        return input.pop() + recursiveSum(input)
    }
}

// Question 6
// Given a linked list, write a function that takes it as input,
// traverses it, and returns an array with all the values in the linked list.
// Assume the linked list starts with 1 as the root node and looks like: 1->9->8->5
// ex: traverseLinkedList(firstNode) should return [1,9,8,5]
//
// Example of a Linked List Node:
// class Node {
//   constructor(value, next = null) {
//     this.value = value
//     this.next = next
//   }
// }

function traverseLinkedList(inputList) {
    let catcher=[], 
    node = inputList;
    
    while(node){
    catcher.push(node.value);
    node = node.next;
  }
  return catcher
}

// Question 7
// Given a binary tree, find its maximum depth.
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
// Note: A leaf is a node with no children.
//
// Example tree, depth is 3. Your function should return an integer only.
//     3
//    / \
//   2   20
//      /  \
//     7   25
//
// Definition for a binary tree node.
// class TreeNode {
//   constructor(val) {
//     this.val = val
//     this.left = null
//     this.right = null
//   }
// }

function maxDepth(tree) {
    if(tree){
        return Math.max(maxDepth(tree.left), maxDepth(tree.right)) + 1
    }
    else{
        return 0
    }
}	

module.exports = {
    multiply,
    arraySquare,
    recursiveSum,
    integerRange,
    inputSum,
    traverseLinkedList,
    maxDepth
  }
