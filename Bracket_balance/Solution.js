class Stack {
    constructor() {
        this.stack = [];
    }
    push(item) {
        this.stack.push(item);
    }
    pop() {
        if (this.stack.length > 0) {
            return this.stack.pop();
        }
        return null;
    }
    peek() {
        return this.stack[ this.stack.length - 1 ];
    }
    isEmpty() {
        return this.stack.length === 0;
    }
    size() {
        return this.stack.length;
    }
    clear() {
        this.stack = [];
    }
}

function solution(brackets) {
    let stack = new Stack();
    const matchingBracket = {
        ']': '[',
        '}': '{',
        ')': '('
    };
    for (let index = 0; index < brackets.length; index++) {
        const element = brackets[ index ];
        if (element === '[' || element === '{' || element === '(') {
            stack.push(element);
        } else if (element === ']' || element === '}' || element === ')') {
            if (stack.isEmpty() || stack.pop() !== matchingBracket[ element ]) {
                return false;
            }
        }
    }
    return stack.isEmpty();
}

console.log('====================================');
console.log(solution('[{(){}}]'));
console.log(solution('[{}]'));
console.log(solution('[{(})]'));
console.log('====================================');
