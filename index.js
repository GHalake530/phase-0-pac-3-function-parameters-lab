// Function to return a greeting with the given name
function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  
  // Function to return a greeting with the given name and language
  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  // Function to return a greeting with the given name and default to JavaScript if language is not provided
  function introductionWithLanguageOptional(name, language = 'JavaScript') {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  // Test cases
  // console.log(introduction('Aki')); // Output: Hello, my name is Aki.
  // console.log(introductionWithLanguage('Aki', 'Ember.js')); // Output: Hello, my name is Aki and I am learning Ember.js.
  // console.log(introductionWithLanguageOptional('Gracie')); // Output: Hello, my name is Gracie and I am learning JavaScript.
  // console.log(introductionWithLanguageOptional('Gracie', 'Python')); // Output: Hello, my name is Gracie and I am learning Python.
  