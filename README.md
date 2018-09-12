# PatternflySandboxNgApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.3.

This is a test project to showcase usage of TreeView of [patternfly-sandbox-ng]() library wit OAT compilation.

Link to:
-

## Step to create a test


### with ng-cli, create a new project
```
ng new patternfly-sandbox-ng-app
cd patternfly-sandbox-ng-app
```

### install dependecies
```
npm install ../patternfly-sandbox-ng/dist/patternfly-sandbox-ng/patternfly-sandbox-ng-0.0.1.tgz --save
npm install patternfly --save
npm install patternfly-ng --save

```

> NOTE: you need to do a build and package `npm run package` on this [patternfly-sandbox-ng]() PR branch.


### Run the test app
```
npm run build
npm run start
```
> NOTE: npm run build does a `ng build --prod` ie: an AOT build