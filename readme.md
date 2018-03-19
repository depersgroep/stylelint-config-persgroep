# styleling-config-persgroep

De Persgroep ESLint [Shareable Config](https://eslint.org/docs/developer-guide/shareable-configs) (`.stylelintrc`).

## Usage

Install from npm public registry

```
npm install stylelint-config-persgroep --save-dev
```

Add the `extends` array to your `.stylelintrc` with the config sets you need.

```
extends:
  - stylelint-config-persgroep
```

If some rules don't work for you, you can disable them. This can also help when you migrate to this config: disable all rules, re-enable one and fix errors, re-enable the next rule. Set the rule to `null` to do this.

Example for Fannypack:
```
rules:
  # Problems: one problem with nested blocks
  selector-class-pattern: null
  
  # Problems: check out specificity
  selector-max-specificity: null
  
  # Problems: some small problems
  order/order: null
  
  # Problems: spaces for indent (fonts) and closing function bracket wrong indent
  indentation: null
  
  # Problems: codebase has block comments as single line comments + newlines after single line comments
  rule-empty-line-before: null
  
  # Problems: smacss preferred order has changed since our last update
  order/properties-order: null
```


## Contribute

Edit the `.stylelintrc` to add, update or delete rules.

Test your rules against the fannypack SCSS code (1.0.0)

```
npm run test
```
