/*
Language: Python
Category: common
*/

function(hljs) {
  return {
      lexemes: '\\(|\\)|\\[|\\]|\\{|\\}',
      keywords: '( ) [ ] { }',
      contains: [
          {
              className: 'variable',
              begin: ':\\[', end: '\\]'
          },
          {
              className: 'variable',
              begin: ':\\[\\[', end: '\\]\\]'
          }
      ]
  };
}
