import {ElementSnippet} from './editor-service';

const snippets: ElementSnippet[] = [
  {
    'tagname': 'html-import',
    'description': 'Template definition of an HTML import.',
    'prefix': 'hi',
    'expandTo': '<link rel="import" href="bower_components/.html">',
    'expandToSnippet': '<link rel="import" href="${1:bower_components}/${2}/${2}.html">'
  },
  {
    'tagname': 'tdd-test',
    'description': 'Template definition for a TDD test suite',
    'prefix': 'tdd-test',
    'expandTo': '',
    'expandToSnippet': `
<html>
  <head>
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0, user-scalable=yes">
    <title>$\{1:my-element}</title>
    <script src="\${2:bower_components}/webcomponentsjs/webcomponents-lite.js"></script>
    <script src="\${2:bower_components}/web-component-tester/browser.js"></script>
    <link rel="import" href="$3/$\{1:my-element}.html">
  </head>
  <body>
  <test-fixture id="basic">
    <template>
      <$\{1:my-element}><$\{1:my-element}>
    </template>
  </test-fixture>
  <script>
    suite('$\{1:my-element} tests', function() {
      var element;
      setup(function() {
        element = fixture('basic');
      });
      test('$6', function() {
        $0
      });
    });
  </script>
  </body>
</html>
`
  }
];

export {snippets};
