# Coding Rules - Naming

When you need to ignore rules below for special reasons, please ask your reviewers.

## (All) File name

* **kebab-case** (a.k.a chain-case, param-case) ONLY
* **DO NOT USE UPPERCASES**

## (TypeScript) Entity name

* Typescript generic
    * functionName (camelCase)
    * objectMemberName (camelCase)
    * variableNameDefinedByLet (camelCase)
    * variableNameDefinedByConst (camelCase)
    * EXPORTED_CONSTANTS_NAME_DEFINED_BY_CONST (CONSTANT_CASE)
    * ClassName (PascalCase)
    * InterfaceName (PascalCase)
    * TypeName (PascalCase)
* React related
    * ReactComponentName (PascalCase)


## (SCSS) Component class name

Follow ABEM https://css-tricks.com/abem-useful-adaptation-bem/

### Restrictions

* A class name cannot have more than 1 element.
* Block/Element/Modifier name can contain *lowercase alphabet*, *number*, and single *-*.
* Delimiter between *atomic prefix* and *block name* should be `-`.
* Delimiter between *block name* and *element name* should be `__` (double underscore).
* Delimiter between *block name* (or *element name*) and *modifier name* should be `--` (double hyphen).

### We prefer...

* *kebab-case* (*chain-case*) instead of *nocase* for readability.
    * Because some technical terms might be used and splitting words by `-` helps us to read

### Example

* Allow
    * `a-block-name`
    * `a-block-name__element-name`
    * `a-block-name--modifier-name`
    * `a-block-name__element-name--modifier-name`
* Allow but not recommended
    * `a-blockname`
    * `a-blockname__elementname`
    * `a-blockname__element-name`
    * `a-blockname--modifiername`
    * `a-blockname__elementname--modifiername`
* Don't use as possible (ask your reviewers)
    * `a-blockname__element1name__element2name`
