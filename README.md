# 通过写测试学习JavaScript

看书学习，过目即忘。

何不把书上看到的有价值的知识点，变成一个个可以运行的测试，并通过测试名来提炼知识点。

等之后需要查看这些知识点时，再搜索、阅读和运行这些测试，能帮你快速回忆起这些知识点。

本项目的知识点来自Cay Horstmann在2020年7月出版的Modern JavaScript for the Impatient (https://learning.oreilly.com/library/view/modern-javascript-for/9780136502166/)一书。用Jest所编写的单元测试，参考了Andy Olsen在2022年7月发布的课程Test-Driven Development for JavaScript (https://learning.oreilly.com/videos/test-driven-development-for/9780137864591/)。

本项目会随着该书的阅读，不断增加新的测试。

## 如何运行测试

下面以MacOS为例，简述如何运行本项目的测试代码。其他操作系统类同。

1. 安装Node：`brew install node`
2. 安装Jest：`npm install --global jest`
3. 运行测试：在命令行窗口，进入每一章的有xxx.test.js测试文件的目录，运行`npm run test`

## Jest运行报告示例

PASS  ./ch-01-values-and-variables.test.js
Chapter 1: Values And Variables
✓ 1.2: typeof null is the string object
✓ 1.4: variables do not have a type
✓ 1.4: if you do not initialize a variable, it has the special value undefined
✓ 1.4: if you try to modify the value contained in a const, a run-time error occurs (4 ms)
✓ 1.4: avoid two obsolete forms of variable declarations, with the var keyword and with no keyword at all (misspelling creates a new variable)
✓ 1.6: JavaScript has no explicit integer type. All numbers are double-precision floating-point numbers. (1 ms)
✓ 1.6: the toString method converts a number back to a string
✓ 1.6: if you divide by zero, the result is Infinity or -Infinity
✓ 1.6: 0/0 is NaN, the "not a number" constant
✓ 1.6: some number-producing functions return NaN to indicate a faulty input
✓ 1.7: the / operator always yields a floating-point result, even if both operands are integers. e.g. 1/2 is 0.5, not 0 as it would be in Java or C++.
✓ 1.7: if k and n are positive values, possibly fractional, then k % n is the value that is obtained by subtracting n from k until the result is less than n
✓ 1.7: If an operand of any arithmetic operator is the “not a number” value NaN, the result is again NaN.
✓ 1.7: Prefer template literals over string concatenation. This way, you don’t have to remember what the + operator does to non-numeric operands.
✓ 1.9: You should never set values to undefined and never return undefined from a function, but always use null for missing values. (1 ms)


