# Vue Monorepo Example

An example of how to configure a vue based monorepo that uses Webpack and Babel for building, Lerna for package orchestration, and jest w/ vue-test-utils for unit testing. Vue styleguidedist is utilized for common documentation of components.

To leverage this repository, the developer will need to understand the following prerequisites

- [Lerna](https://github.com/lerna/lerna)
- [Webpack](https://webpack.js.org/)

### Prerequisites

- [nodejs >= 12.3.1](https://nodejs.org/)
- [npm >=6.9.0](https://www.npmjs.com/)

## Getting Started

With a compatible nodejs/npm setup, please make sure the following global dependencies are installed. (ex npm i -g lerna)

- [lerna >=3.0.0](https://github.com/lerna/lerna)
- [link-parent-bin >=1.0.0](https://github.com/nicojs/node-link-parent-bin)
- [yarn >=1.16.0](https://github.com/yarnpkg/yarn)
- NOTE TO WINDOWS USERS: 'concurrently' will likey need to be installed globally and some npm scripts will need to be edited to acheive compatibility

### Installing

Please use a unix style command line tool (ex. git bash on windows)

```
yarn installd
```

This will install and bootstrap dependencies. This may take a few minutes but will set up your workspace. It will also link the executable binaries to components from the root of the workspace.

### Building

To build all subsequent packages for a production deploy/npm publish

```
yarn build
```

The above command will assume all subsequent packages have a build script defined

### Testing

Either change directory into the package or at the root directory run

```
yarn test
```

This will run the 'test' script at the package level.
At the root level, it will run all 'test' scripts in subsequent packages (all component packages)
If a combound test report is desired, please run the below command at the root level.

```
yarn test-all
```

The above commands will assume all subsequent packages have a test script defined

### Cleaning

If wanting to clean all build packages, run the below from the root directory
```
yarn clean
```

If wanting to clean all dependencies, run the below from the root directory
```
yarn cleand
```

### Documenting Code/Components
To document your vue components, please read the guide from [Vue-styleguidist](https://vue-styleguidist.github.io/).
To build your documentation server, from the root directory run:
```
yarn styleguide
```

Right now, by default, the document bundle is launched into a dev-server. This, of course, can be changed based on preference
### Component Development

 In the scope of Vue, the following can be developed in this repository but are in no means limited to:
* Vue Components: Plain old Vue components that just need Vue to run
* Vue Components Written in TypeScript: Component can use Typescript, vue-class-component, and vue-property-decorator for ease of development and static type checking. When these packages are bundled, they are transpiled to to plain old JavaScript =)
* Vuex module registration: If components require shared application state, see [Dynamic Module Registration](https://vuex.vuejs.org/guide/modules.html#dynamic-module-registration)
* Vue Plugins: Write a plugin package. For more information on this, please see [Plugins Guide](https://vuejs.org/v2/guide/plugins.html)

It's important to note that packages can also have peer dependencies on libraries they depend on, but must be installed by the consuming app (ex: Vue, Vuex). There are some examples of this inside this repository.

Outside the context of Vue, packages can be just about anything javascript related! These include but are not limited to:
* JavaScript/TypeScript modules/services/plugins
* Translation files for i18n
* React Components (additional configuration required)
* Angular components (additional configuration required. Please see [ng-packagr](https://www.npmjs.com/package/ng-packagr))

### Contributing
If anyone has any bugfixes, contributions, or an overall suggestion as to how to make this repository better, please don't hesitate to open an issue!
