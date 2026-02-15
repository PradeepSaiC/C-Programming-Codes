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
    printf("Hello World");
    return 0;
}`,
                        explanation: `<h3>Complete Code</h3><br>The full program source code. You can copy it from here.`
                    },
                    {
                        code: `#include <stdio.h>`,
                        explanation: `<h3>Step 1: Include Header</h3><br>Standard input-output library that contains <code>printf</code>.`
                    },
                    {
                        code: `int main() {
    printf("Hello World");
    return 0;
}`,
                        explanation: `<h3>Step 2: Main Function</h3><br>The entry point of the program. <code>printf</code> prints text to the screen.`
                    }
                ]
            },
            {
                title: "Add Two Numbers (Using Fixed Values)",
                blocks: [
                    {
                        code: `#include <stdio.h>

int main() {
    int firstNum = 2;
    int secondNum = 5;
    int result = firstNum + secondNum;
    printf("Sum of %d and %d is %d", firstNum, secondNum, result);
    return 0;
}`,
                        explanation: `<h3>Complete Code</h3><br>The full program source code.`
                    },
                    {
                        code: `#include <stdio.h>

int main() { 
    int firstNum = 2;
    int secondNum = 5;`,
                        explanation: `<h3>Step 1: Declare Variables</h3><br>We declare integer variables and assign them fixed values.`
                    },
                    {
                        code: `    int result = firstNum + secondNum;`,
                        explanation: `<h3>Step 2: Calculation</h3><br>We calculate the sum and store it in <code>result</code>.`
                    },
                    {
                        code: `    printf("Sum of %d and %d is %d", firstNum, secondNum, result);
    return 0;
}`,
                        explanation: `<h3>Step 3: Output</h3><br>We print the result using format specifiers.`
                    }
                ]
            },
            {
                title: "Add Two Numbers Using User Input",
                blocks: [
                    {
                        code: `#include <stdio.h>

int main() {
    int firstNum, secondNum, result;
    printf("Enter first number:");
    scanf("%d", &firstNum);
    printf("Enter second number:");
    scanf("%d", &secondNum);
    result = firstNum + secondNum;
    printf("Sum of %d and %d is : %d", firstNum, secondNum, result);
    return 0;
}`,
                        explanation: `<h3>Complete Code</h3><br>The full program source code.`
                    },
                    {
                        code: `#include <stdio.h>

int main() {
    int firstNum, secondNum, result;
    printf("Enter first number:");
    scanf("%d", &firstNum);`,
                        explanation: `<h3>Step 1: Input First Number</h3><br>Prompt user and read input using <code>scanf</code>.`
                    },
                    {
                        code: `    printf("Enter second number:");
    scanf("%d", &secondNum);`,
                        explanation: `<h3>Step 2: Input Second Number</h3><br>Prompt user and read the second number.`
                    },
                    {
                        code: `    result = firstNum + secondNum;
    printf("Sum of %d and %d is : %d", firstNum, secondNum, result);
    return 0;
}`,
                        explanation: `<h3>Step 3: Calculate and Print</h3><br>Compute sum and display the result.`
                    }
                ]
            },
            {
                title: "Find Average of Three Numbers",
                blocks: [
                    {
                        code: `#include <stdio.h>

int main() {
    float firstNum, secondNum, thirdNum, average;
    printf("Enter three numbers:");
    scanf("%f %f %f", &firstNum, &secondNum, &thirdNum);
    average = (firstNum + secondNum + thirdNum) / 3;
    printf("Average of %f , %f and %f is : %f", firstNum, secondNum, thirdNum, average);
    return 0;
}`,
                        explanation: `<h3>Complete Code</h3><br>The full program source code.`
                    },
                    {
                        code: `#include <stdio.h>

int main() { 
    float firstNum, secondNum, thirdNum, average;
    printf("Enter three numbers:");
    scanf("%f %f %f", &firstNum, &secondNum, &thirdNum);`,
                        explanation: `<h3>Step 1: Input 3 Numbers</h3><br>Use <code>float</code> for decimal numbers and read three values at once.`
                    },
                    {
                        code: `    average = (firstNum + secondNum + thirdNum) / 3;
    printf("Average of %f , %f and %f is : %f", firstNum, secondNum, thirdNum, average);
    return 0;
}`,
                        explanation: `<h3>Step 2: Average Calculation</h3><br>Calculate average and print it. Note the parentheses for precedence.`
                    }
                ]
            },
            {
                title: "Find Unit Digit of a Number",
                blocks: [
                    {
                        code: `#include <stdio.h>

int main() {
    int number;
    printf("Enter any number");
    scanf("%d", &number);
    int unitDigit = number % 10;
    printf("Unit digit of %d is %d", number, unitDigit);
    return 0;
}`,
                        explanation: `<h3>Complete Code</h3><br>The full program source code.`
                    },
                    {
                        code: `#include <stdio.h>

int main() { 
    int number;
    printf("Enter any number");
    scanf("%d", &number);`,
                        explanation: `<h3>Step 1: Input Number</h3><br>Read an integer from the user.`
                    },
                    {
                        code: `    int unitDigit = number % 10;
    printf("Unit digit of %d is %d", number, unitDigit);
    return 0;
}`,
                        explanation: `<h3>Step 2: Modulo Operator</h3><br><code>% 10</code> gives the last digit (remainder when divided by 10).`
                    }
                ]
            },
            {
                title: "Calculate Simple Interest",
                blocks: [
                    {
                        code: `#include <stdio.h>

int main() {
    float principalAmount, time, rate, simpleInterest;
    printf("Enter Principal Amount:");
    scanf("%f", &principalAmount);
    printf("Enter Time:");
    scanf("%f", &time);
    printf("Enter Rate of Interest:");
    scanf("%f", &rate);
    simpleInterest = (principalAmount * rate * time) / 100;
    printf("Simple interest is : %.2f", simpleInterest);
    return 0;
}`,
                        explanation: `<h3>Complete Code</h3><br>The full program source code.`
                    },
                    {
                        code: `#include <stdio.h>

int main() { 
    float principalAmount, time, rate, simpleInterest;
    printf("Enter Principal Amount:");
    scanf("%f", &principalAmount);`,
                        explanation: `<h3>Step 1: Input Principal</h3><br>Read the principal amount.`
                    },
                    {
                        code: `    printf("Enter Time:");
    scanf("%f", &time);
    printf("Enter Rate of Interest:");
    scanf("%f", &rate);`,
                        explanation: `<h3>Step 2: Input Time & Rate</h3><br>Read remaining variables.`
                    },
                    {
                        code: `    simpleInterest = (principalAmount * rate * time) / 100;
    printf("Simple interest is : %.2f", simpleInterest);
    return 0;
}`,
                        explanation: `<h3>Step 3: Formula</h3><br>Apply formula <code>(P * R * T) / 100</code> and print result (2 decimal places).`
                    }
                ]
            },
            {
                title: "Calculate Area of Circle",
                blocks: [
                    {
                        code: `#include <stdio.h>
#define PI 3.14

int main() {
    float radius, area;
    printf("Enter radius of the circle");
    scanf("%f", &radius);
    area = PI * radius * radius;
    printf("Area of circle is : %.2f", area);
    return 0;
}`,
                        explanation: `<h3>Complete Code</h3><br>The full program source code.`
                    },
                    {
                        code: `#include <stdio.h>
#define PI 3.14

int main() { 
    float radius, area;
    printf("Enter radius of the circle");
    scanf("%f", &radius);`,
                        explanation: `<h3>Step 1: Define PI & Input</h3><br>Define constant PI and read radius.`
                    },
                    {
                        code: `    area = PI * radius * radius;
    printf("Area of circle is : %.2f", area);
    return 0;
}`,
                        explanation: `<h3>Step 2: Area Formula</h3><br>Calculate area using <code>PI * r * r</code>.`
                    }
                ]
            },
            {
                title: "Convert Celsius to Fahrenheit",
                blocks: [
                    {
                        code: `#include <stdio.h>

int main() {
    float celsius, fahrenheit;
    printf("Enter temperature in celsius:");
    scanf("%f", &celsius);
    fahrenheit = (celsius * 9 / 5.0) + 32;
    printf("Celsius %.2f converted to Fahrenheit is : %.2f", celsius, fahrenheit);
    return 0;
}`,
                        explanation: `<h3>Complete Code</h3><br>The full program source code.`
                    },
                    {
                        code: `#include <stdio.h>

int main() { 
    float celsius, fahrenheit;
    printf("Enter temperature in celsius:");
    scanf("%f", &celsius);`,
                        explanation: `<h3>Step 1: Input Celsius</h3><br>Read temperature in Celsius.`
                    },
                    {
                        code: `    fahrenheit = (celsius * 9 / 5.0) + 32;
    printf("Celsius %.2f converted to Fahrenheit is : %.2f", celsius, fahrenheit);
    return 0;
}`,
                        explanation: `<h3>Step 2: Conversion</h3><br>Apply conversion formula. Use <code>5.0</code> for float division.`
                    }
                ]
            },
            {
                title: "Find Square and Cube of a Number",
                blocks: [
                    {
                        code: `#include <stdio.h>

int main() {
    int number, cube, square;
    printf("Enter any number:");
    scanf("%d", &number);
    square = number * number;
    cube = number * number * number;
    printf("Square of %d is : %d", number, square);
    printf("\\nCube of %d is : %d", number, cube);
    return 0;
}`,
                        explanation: `<h3>Complete Code</h3><br>The full program source code.`
                    },
                    {
                        code: `#include <stdio.h>

int main() { 
    int number, cube, square;
    printf("Enter any number:");
    scanf("%d", &number);`,
                        explanation: `<h3>Step 1: Input</h3><br>Read an integer number.`
                    },
                    {
                        code: `    square = number * number;
    cube = number * number * number;
    printf("Square of %d is : %d", number, square);
    printf("\\nCube of %d is : %d", number, cube);
    return 0;
}`,
                        explanation: `<h3>Step 2: Calculate Powers</h3><br>Compute square and cube, then print them.`
                    }
                ]
            },
            {
                title: "Swap Two Numbers Using Temporary Variable",
                blocks: [
                    {
                        code: `#include <stdio.h>

int main() {
    int a, b, temp;
    a = 10, b = 20;
    printf("Before swapping:\\n");
    printf("a = %d , b = %d", a, b);
    temp = a;
    a = b;
    b = temp;
    printf("\\nAfter swapping:\\n");
    printf("a = %d , b = %d", a, b);
    return 0;
}`,
                        explanation: `<h3>Complete Code</h3><br>The full program source code.`
                    },
                    {
                        code: `#include <stdio.h>

int main() { 
    int a, b, temp;
    a = 10, b = 20;
    printf("Before swapping:\\n");
    printf("a = %d , b = %d", a, b);`,
                        explanation: `<h3>Step 1: Initialize</h3><br>Set initial values and print them.`
                    },
                    {
                        code: `    temp = a;
    a = b;
    b = temp;`,
                        explanation: `<h3>Step 2: Swap Logic</h3><br>Use a temporary variable to swap values.`
                    },
                    {
                        code: `    printf("\\nAfter swapping:\\n");
    printf("a = %d , b = %d", a, b);
    return 0;
}`,
                        explanation: `<h3>Step 3: Result</h3><br>Print values after swapping to confirm.`
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
