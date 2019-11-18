# WPIERDOL APKA

## BRANCHING
General convention for branches names are: `<feature_name>-<user_name>`.
Feature names are given by Administrator. In the future, feature names will be taken from GitHub issues or project.

`master` branch is protected by default. All pull requests have to be accepted by Administrator.

## COMMIT MESSAGES
There are no restrictions in terms of commmit messages. However, please do not use "." or "next" as commit message. Message should describe briefly what was done.

## CODE QUALITY

### FILE NAMING CONVENTION
1. Plularize names.
2. Use snake case in file names.
3. File should have its type written before extension. `<name>.<type>.ts`, eg.: `add-user.input.ts`.

### FOLDER STRUCTURE
1. Modules should be placed in `src/modules`.
2. Utils should be placed in `src/utils`.
3. Shared providers should be placed in `common` module.

### CODE LINTING
1. Use eslint or tslint and prettier. It is already configured in `server` project.
2. Precommit hooks is defined for all projects.

### CODE SPECIFICS
1. Use `@Inject()` before injected services.
2. Do not return `await`s.
3. If needed, await into `const` and return that `const`.
4. Always use upper-case `@Decorators`, eg. `prop()` from `@typegoose/typegoose` should be imported as `Property`. Change the names of imports to unique.
5. Use relative imports.
6. Use single quotes.
7. Use semicolons.
8. Use max line width set to 120 chars.
9. Do not write extensive, to long methods.

## BACKEND
Backend is written using TypeScript with NestJS and type-graphql.

## FRONTEND
Frontend is written using React and Apollo Client.