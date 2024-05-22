# JavaScript - Iteration Protocols.  

## Iteration protocol in Java Script - Part - 1  

### general_code.js  
This file contains generic code that sets the context of this article.  

### bookCollection1.0.js  
This file contains the implementation of an iterable iterator. It allows you to iterate through the list of books using a for..of loop or the "next()" function explicitly.  

### bookCollection1.1.js  
This file, too, implements an iterable iterator. However, the implementation of [Symbol.iterator] is slightly different, and this is not mentioned in the article.  

### bookCollection2.js  
This file implements an iterator protocol, where an iterator object is implemented separately. The function next is part of the iterator class.  
