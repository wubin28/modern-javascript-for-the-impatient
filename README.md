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

