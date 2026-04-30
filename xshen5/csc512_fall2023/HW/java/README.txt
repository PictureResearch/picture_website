# ReadME

This package was based on an example Scanner written by Dan Reinheimer.

## To Compile
To compiler the scanner run the following java command 
javac Pair.java RegularExpressions.java Scan.java Scanner.java Token.java TokenNames.java

## To Run
to execute the scanner run the following command in the terminal:
java Scanner <inputFileName>

An example of the scanner execution is:
java Scanner foo.c

The output will be the generated code with the identifiers starting with cs512
the output file name will be the input file name appended with _gen.c so foo.c will be foo_gen.c


## Implementation Explanation

The implementation for this scanner is as follows.

It creates its own set of regular expressions for each of the different types of tokens.  It takes in a file and read it one character at a time and checks if that character matches any regular expressions and if so it gets the corresponding token. It keeps building a larger string and matching tokens until there is no tokens that match and at that point it takes the last matched token and the string minus the last character and returns the token value pair to be written to the new generated file.  If it reaches the end of the line, it checks to see if it has a token that includes the end of line character and does not throw an error.  

When printing the output, it checks to see if the token is an identifier.  If it is
and the string does not equal 'main' then it adds the string cs512 to the beginning of the identifier.

It checks to see if it has reached the end of the file by looking for the character value /u001a. That character indicates that the scanner should take the found token before that character and return the value of the string minus the end of file value.