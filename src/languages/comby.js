/*
Language: Python
Category: common
*/

function(hljs) {
  return {
      contains: [
          {
              className: 'variable',
              begin: ':\\[\\[', end: '\\]\\]'
          },
          {
              className: 'variable',
              begin: ':\\[', end: '\\]'
          }
      ],
      lexemes: '\\(|\\)|\\[|\\]|\\{|\\}',
      keywords: '( ) [ ] { }'
  };
}
