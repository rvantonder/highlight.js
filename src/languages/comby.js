/*
Language: Python
Category: common
*/

function(hljs) {
  return {
      case_insensitive: false,
      keywords: '( ) [ ] { } doot',
      contains: [
          {
              className: 'string',
              begin: '"', end: '"'
          },
          hljs.COMMENT(
              '/\\*', // begin
              '\\*/', // end
              {
                  contains: [
                      {
                          className: 'doc', begin: '@\\w+'
                      }
                  ]
              }
          )
      ]
  };
}
