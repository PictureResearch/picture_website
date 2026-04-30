# Course Project on High-Level Semantic-based Code Optimizations

## Introduction

Traditional compiler optimizations focus on instructions. Although they prove effective in improving code efficiency, many potential of optimizations remain untapped. High-level semantic-based optimization instead concentrate on optimizing programs by leveraging their high-level semantics and domain properties. GLORE[1] is an example, where it uses LER notation to represent the high-level semantics of code, and then employs mathematical properties to conduct optimizations at the level of LER notations, to reduce computations. It can then generate code from the optimized LER notations to get efficient code.

The goal of this course project is for the students to get some hands-on experience in conducting high-level semantic-based optimizations and witness their effects, and get the experience in developing a high-level optimizer. 

## Tasks

The project consists of the following parts.

 - Part I. In this part, the students are expected to achieve a good understanding of LER notation and LER optimizations. The tasks include (i) studying the GLORE paper[1] and manually write the LER formula for a set of programs[2], (ii) manually write the optimized LER formula, (iii) manually write the C code corresponding to the optimized LER notation, (iv) compile the original and optimized programs and compare their speed. The compilation should try both -O0 and -O3 compilation flags.
 - Part II. In this part, the students are expected to develop an LER optimizer based on a LER compiler that we will provide. The optimizer accepts a LER formulae as input and generate optimized LER formula.
 - (optional) Part III. This part is optional. The students may extend the LER optimizer so that it can also generate C code from the optimized LER formula.
 - (optional) Part IV. This part is optional. The students may extend the LER optimizer further by connecting it with a C compiler that can accept the original C code as input and generate LER notations. With all these four parts done, the students would have an end-to-end high-level semantic-based optimizing compiler. 

Producing a compiler that can work for all corner cases is hard. If your optimizer/compiler can handle the programs we provide[2], you would already reach our expectations. Of course, it has to be an actual optimizer/compiler: hard-coding the optimizing/compiling results into the optimizer/compiler is not an option allowed.

## Submission requirements

You are expected to submit a github url, through which, the Grader will be able to download everything you submit, which should include at least the following:
 - (50% grade) A 'PartI_ManualOpt' folder that contains everything you are expected to produce in Part I, including (i) the manually written LER formula for the test programs[2], (ii) the optimized formula, (iii) the C code of the optimized formula, (iv) a report that summarizes the speeds you saw of the original and optimized versions (with -O0 and -O3 flags). 
 - (45% grade) A 'PartII_AutoOpt' folder that contains the LER optimizing compiler, including the source code, a README to state how to build it and use it, the outputs it produces for the test programs[2], and any known limitations or bugs.
 - (7% bonus) (optional) A 'PartIII_AutoOptGen' folder that contains the extended LER optimizing compiler as described in Part III. The requirement is the same as in 'PartII_AutoOpt' except that the generated C code for the test programs should be additionally included.
 - (8% bonus) (optional) A 'PartIV_LERCompiler' folder that contains the LER compiler produced in Part IV. The requirement is the same as in 'PartIII_AutoOptGen'. 
 - (5% grade) README. A simple README to state the purpose of your github repository and the purpose of each of the main folders in your repository.

## Links

[1] "GLORE: Generalized Loop Redundancy Elimination upon LER-Notation", Yufei Ding, Xipeng Shen, OOPSLA at The ACM SIGPLAN conference on Systems, Programming, Languages and Applications: Software for Humanity (SPLASH), Vancouver, Canada, Oct 22-27, 2017. [https://research.csc.ncsu.edu/picture/publications/papers/oopsla17.pdf]

[2] Programs to optimize: https://research.csc.ncsu.edu/picture/xshen5/csc766_spring2024/courseProjects/SimplePrograms_orgOnly.tar
