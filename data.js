const topicData = [
    {
        id: "basics-operators",
        title: "C Basics & Operators",
        programs: [
            {
                title: "Print Hello World",
                blocks: [
                    {
                        code: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
                        explanation: `The classic first program. <code>printf</code> sends output to the screen.`
                    }
                ]
            },
            {
                title: "Add Two Numbers",
                blocks: [
                    {
                        code: `#include <stdio.h>

int main() {
    int a = 5;
    int b = 10;
    int sum = a + b;
    
    printf("Sum: %d", sum);
    return 0;
}`,
                        explanation: `Here we hardcode values 5 and 10. <code>%d</code> is the format specifier for integers.`
                    }
                ]
            },
            {
                title: "Add Two Numbers (User Input)",
                blocks: [
                    {
                        code: `#include <stdio.h>

int main() {
    int a, b, sum;
    
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);
    
    sum = a + b;
    printf("Sum: %d", sum);
    return 0;
}`,
                        explanation: `<code>scanf</code> reads input. We pass the address of variables using <code>&</code> (ampersand) so scanf can modify them.`
                    }
                ]
            },
            {
                title: "Average of Three Numbers",
                blocks: [
                    {
                        code: `#include <stdio.h>

int main() {
    float a, b, c, avg;
    printf("Enter 3 numbers: ");
    scanf("%f %f %f", &a, &b, &c);
    
    avg = (a + b + c) / 3.0;
    printf("Average: %.2f", avg);
    return 0;
}`,
                        explanation: `We use <code>float</code> for decimal precision. <code>%.2f</code> prints only 2 decimal places.`
                    }
                ]
            },
            {
                title: "Find Unit Digit",
                blocks: [
                    {
                        code: `#include <stdio.h>

int main() {
    int num;
    printf("Enter number: ");
    scanf("%d", &num);
    
    int unit = num % 10;
    printf("Unit digit: %d", unit);
    return 0;
}`,
                        explanation: `The modulus operator <code>%</code> gives the remainder. Any number % 10 yields its last digit.`
                    }
                ]
            },
            {
                title: "Calculate Simple Interest",
                blocks: [
                    {
                        code: `#include <stdio.h>

int main() {
    float p, r, t, si;
    // P = Principal, R = Rate, T = Time
    
    printf("Enter P, R, T: ");
    scanf("%f %f %f", &p, &r, &t);
    
    si = (p * r * t) / 100;
    
    printf("Simple Interest: %.2f", si);
    return 0;
}`,
                        explanation: `Formula: SI = (P * R * T) / 100`
                    }
                ]
            },
            {
                title: "Area of Circle",
                blocks: [
                    {
                        code: `#include <stdio.h>

int main() {
    float r, area;
    printf("Enter radius: ");
    scanf("%f", &r);
    
    area = 3.14159 * r * r;
    
    printf("Area: %.2f", area);
    return 0;
}`,
                        explanation: `Area = π * r²`
                    }
                ]
            },
            {
                title: "Area of Rectangle",
                blocks: [
                    {
                        code: `#include <stdio.h>

int main() {
    float l, w, area;
    printf("Enter length and width: ");
    scanf("%f %f", &l, &w);
    
    area = l * w;
    printf("Area: %.2f", area);
    return 0;
}`,
                        explanation: `Area = length * width`
                    }
                ]
            },
            {
                title: "Area of Triangle (Heron's Formula)",
                blocks: [
                    {
                        code: `#include <stdio.h>
#include <math.h>

int main() {
    float a, b, c, s, area;
    printf("Enter sides a, b, c: ");
    scanf("%f %f %f", &a, &b, &c);
    
    s = (a + b + c) / 2; // Semi-perimeter
    area = sqrt(s * (s - a) * (s - b) * (s - c));
    
    printf("Area: %.2f", area);
    return 0;
}`,
                        explanation: `We include <code>&lt;math.h&gt;</code> for the <code>sqrt()</code> function.`
                    }
                ]
            },
            {
                title: "Distance Between Two Points",
                blocks: [
                    {
                        code: `#include <stdio.h>
#include <math.h>

int main() {
    float x1, y1, x2, y2, dist;
    printf("Enter point 1 (x1 y1): ");
    scanf("%f %f", &x1, &y1);
    printf("Enter point 2 (x2 y2): ");
    scanf("%f %f", &x2, &y2);
    
    dist = sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));
    
    printf("Distance: %.2f", dist);
    return 0;
}`,
                        explanation: `Distance formula: √((x2-x1)² + (y2-y1)²). Used <code>pow()</code> for square.`
                    }
                ]
            },
            {
                title: "Calculate BMI",
                blocks: [
                    {
                        code: `#include <stdio.h>

int main() {
    float weight, height, bmi;
    printf("Enter weight(kg) and height(m): ");
    scanf("%f %f", &weight, &height);
    
    bmi = weight / (height * height);
    
    printf("BMI: %.2f", bmi);
    return 0;
}`,
                        explanation: `BMI = weight / height²`
                    }
                ]
            },
            {
                title: "Celsius to Fahrenheit",
                blocks: [
                    {
                        code: `#include <stdio.h>

int main() {
    float c, f;
    printf("Enter Celsius: ");
    scanf("%f", &c);
    
    f = (c * 9/5) + 32;
    
    printf("Fahrenheit: %.2f", f);
    return 0;
}`,
                        explanation: `F = (C * 9/5) + 32`
                    }
                ]
            },
            {
                title: "Square and Cube",
                blocks: [
                    {
                        code: `#include <stdio.h>

int main() {
    int num;
    printf("Enter number: ");
    scanf("%d", &num);
    
    printf("Square: %d\\n", num * num);
    printf("Cube: %d", num * num * num);
    return 0;
}`,
                        explanation: `Simple multiplication.`
                    }
                ]
            },
            {
                title: "Swap with Temp Variable",
                blocks: [
                    {
                        code: `#include <stdio.h>

int main() {
    int a = 5, b = 10, temp;
    
    temp = a;
    a = b;
    b = temp;
    
    printf("Swapped: a=%d, b=%d", a, b);
    return 0;
}`,
                        explanation: `Classic swap using a third container.`
                    }
                ]
            },
            {
                title: "Swap without Temp Variable",
                blocks: [
                    {
                        code: `#include <stdio.h>

int main() {
    int a = 5, b = 10;
    
    a = a + b; // 15
    b = a - b; // 5
    a = a - b; // 10
    
    printf("Swapped: a=%d, b=%d", a, b);
    return 0;
}`,
                        explanation: `Swapping using arithmetic (or XOR). Values are swapped in place.`
                    }
                ]
            },
            {
                title: "Demonstration of Arithmetic Operators",
                blocks: [
                    {
                        code: `#include <stdio.h>

int main() {
    int a = 10, b = 3;
    printf("a + b = %d\\n", a + b);
    printf("a - b = %d\\n", a - b);
    printf("a * b = %d\\n", a * b);
    printf("a / b = %d\\n", a / b); // Integer division
    printf("a % b = %d\\n", a % b); // Modulus
    return 0;
}`,
                        explanation: `Arithmetic operators perform mathematical operations. Note that integer division truncates the decimal part.`
                    }
                ]
            },
            {
                title: "Demonstration of Relational Operators",
                blocks: [
                    {
                        code: `#include <stdio.h>

int main() {
    int a = 5, b = 10;
    
    printf("a == b: %d\\n", a == b); // 0 (false)
    printf("a != b: %d\\n", a != b); // 1 (true)
    printf("a > b: %d\\n", a > b);   // 0
    printf("a < b: %d\\n", a < b);   // 1
    printf("a >= b: %d\\n", a >= b); // 0
    printf("a <= b: %d\\n", a <= b); // 1
    return 0;
}`,
                        explanation: `Relational operators check the relationship between two operands. They return 1 if true, 0 if false.`
                    }
                ]
            },
            {
                title: "Demonstration of Logical Operators",
                blocks: [
                    {
                        code: `#include <stdio.h>

int main() {
    int x = 5, y = 10;
    
    // AND (&&) - True if both are true
    printf("(x>0 && y>0): %d\\n", (x>0 && y>0)); 
    
    // OR (||) - True if at least one is true
    printf("(x>0 || y<0): %d\\n", (x>0 || y<0)); 
    
    // NOT (!) - Reverses the state
    printf("!(x>0): %d\\n", !(x>0)); 
    return 0;
}`,
                        explanation: `Logical operators are used to combine multiple conditions.`
                    }
                ]
            },
            {
                title: "Demonstration of Assignment Operators",
                blocks: [
                    {
                        code: `#include <stdio.h>

int main() {
    int a = 10;
    
    a += 5; // a = a + 5
    printf("a += 5: %d\\n", a);
    
    a -= 3; // a = a - 3
    printf("a -= 3: %d\\n", a);
    
    a *= 2; // a = a * 2
    printf("a *= 2: %d\\n", a);
    
    a /= 4; // a = a / 4
    printf("a /= 4: %d\\n", a);
    return 0;
}`,
                        explanation: `Assignment operators are used to assign values to variables. Compound assignment operators perform an operation and then assign the result.`
                    }
                ]
            },
            {
                title: "Demonstration of Increment/Decrement Operators",
                blocks: [
                    {
                        code: `#include <stdio.h>

int main() {
    int a = 10;
    
    printf("Original: %d\\n", a);
    printf("Post-increment (a++): %d\\n", a++); // Prints 10, then a becomes 11
    printf("After Post-increment: %d\\n", a);
    
    printf("Pre-increment (++a): %d\\n", ++a); // a becomes 12, then Prints 12
    
    // Similar for --
    return 0;
}`,
                        explanation: `++ increases value by 1. -- decreases value by 1. <br><b>Pre ( ++i )</b>: Increment first, then use value.<br><b>Post ( i++ )</b>: Use value first, then increment.`
                    }
                ]
            },
            {
                title: "Demonstration of Conditional (Ternary) Operator",
                blocks: [
                    {
                        code: `#include <stdio.h>

int main() {
    int a = 10, b = 20;
    int max;
    
    max = (a > b) ? a : b;
    
    printf("Max value is: %d", max);
    return 0;
}`,
                        explanation: `Syntax: <code>condition ? value_if_true : value_if_false</code>. It's a shorthand for if-else.`
                    }
                ]
            },
            {
                title: "Demonstration of Bitwise Operators",
                blocks: [
                    {
                        code: `#include <stdio.h>

int main() {
    int a = 5, b = 9; // 5=0101, 9=1001
    
    printf("a & b: %d\\n", a & b); // 0001 (1) AND
    printf("a | b: %d\\n", a | b); // 1101 (13) OR
    printf("a ^ b: %d\\n", a ^ b); // 1100 (12) XOR
    printf("~a: %d\\n", ~a);       // NOT
    printf("a << 1: %d\\n", a << 1); // Left Shift (10)
    printf("a >> 1: %d\\n", a >> 1); // Right Shift (2)
    return 0;
}`,
                        explanation: `Bitwise operators work on bits and perform bit-by-bit operations.`
                    }
                ]
            },
            {
                title: "Demonstration of sizeof Operator",
                blocks: [
                    {
                        code: `#include <stdio.h>

int main() {
    int i;
    float f;
    double d;
    char c;
    
    printf("Size of int: %lu bytes\\n", sizeof(i));
    printf("Size of float: %lu bytes\\n", sizeof(f));
    printf("Size of double: %lu bytes\\n", sizeof(d));
    printf("Size of char: %lu byte\\n", sizeof(c));
    return 0;
}`,
                        explanation: `<code>sizeof</code> is a compile-time operator that returns the size of a variable or type in bytes.`
                    }
                ]
            }
        ]
    }
];

// C Syntax Highlighter (Tokenizer based)
function highlightCode(code) {
    if (!code) return "";

    // 1. Escape HTML Special Characters
    const escapedCode = code
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

    // 2. Tokenize and Highlight
    return escapedCode.replace(
        /(\/\/.*)|(\/\*[\s\S]*?\*\/)|("(\\.|[^"\\])*")|('(\\.|[^'\\])*')|(&lt;.*?&gt;)|(\b(?:int|float|char|void|double|long|short|unsigned|signed|struct|union|enum|typedef|bool)\b)|(\b(?:return|if|else|for|while|do|switch|case|break|continue|default|goto|sizeof|const|static|true|false)\b)|(#\s*\b(?:include|define|ifdef|ifndef|endif)\b)|(\b(?:printf|scanf|main|malloc|free|calloc|realloc|exit|fprintf|fscanf|fopen|fclose|sqrt|pow|abs)\b)|(\b\d+\b)/g,
        (match, comment, multiComment, string, char, include, type, keyword, preproc, func, num) => {
            if (comment) return `<span class="cmt">${comment}</span>`;
            if (multiComment) return `<span class="cmt">${multiComment}</span>`;
            if (string) return `<span class="str">${string}</span>`;
            if (char) return `<span class="str">${char}</span>`;
            if (include) return `<span class="str">${include}</span>`;
            if (type) return `<span class="kw-type">${type}</span>`;
            if (keyword) return `<span class="kw">${keyword}</span>`;
            if (preproc) return `<span class="kw-pre">${preproc}</span>`;
            if (func) return `<span class="fn">${func}</span>`;
            if (num) return `<span class="num">${num}</span>`;
            return match;
        }
    );
}
