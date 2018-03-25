# React-component-boilerplate

This is my attempt at a boilerplate that allows you to build, test, and publish a React component library to npm.

## Installation

Clone the boilerplate locally:

```
git clone https://github.com/tducasse/react-component-boilerplate.git
```

If you want to push your code to a new repository, remove the `.git` folder, and run

```
git init
git add .
git commit -m "Initial commit"
git remote add origin [YOUR_REPO_URL]
git push -u origin master
```

## package.json

Begin by editing the _package.json_ file:

* name: This is the name you will use to download your library on npm once it's published. This has to be unique in the npm world.
* description: Describe what your library does.
* author: Replace my name and email with yours!
* repository: Change this to the github repository you will push your library to.

## Building the library

Build your new components in the `lib/` folder, and make sure you export them in `lib/index.js`.

A component called `MyComponent` is provided as an example.

Note that you can export more than one component, using

```
export {MyComponent, MyComponent2}
```

## Testing the components

Before publishing your library to npm, you can test it locally.

You have two options:

### Storybook

This boilerplate comes with [Storybook](https://storybook.js.org/basics/introduction/). You can run the server with the following command:

```
yarn storybook
```

A webpack server with (hot-reload) will be available at http://localhost:9001/.

You can test your components by creating new _stories_ in the `stories/` folder.

### Linking your library to another app

Assuming you already have a working React application, this is a two part process.

At the root of your new library folder, run

```
yarn link
```

This will install your library in your global node_modules.

Then, in your React app, run

```
yarn link your_library_name
```

Then, you can call your components using

```
import {MyComponent} from 'your_library_name'
```

Once you're done testing, you can use

```
yarn unlink
```

the same way to remove the symbolic link to your library.


## Commands

```
yarn build
```

This command will take the code in `lib/` and transpile it to `build/`.

```
yarn build:watch
```

This command will automatically transpile the code in `lib/` to `build/` on every change, basically providing what we could call "hot-rebuild".

You can use it while the library is linked through **npm link** and being used in another app, to get "hot-reload"!


## Publishing your library

First, you'll have to create an account on [npm](https://www.npmjs.com/).

From the command-line, type

```
yarn login
```

and enter your credentials.

Then, when you're ready to publish your library (check that your package.json is complete before!), just run

```
yarn publish
```

enter your password, and go check that it's available on the npm website!

You can also add it into a new project by doing

```
yarn add your_library_name
```

or see all the info in the npm registry with

```
yarn info your_library_name
```

Have fun building new React components!
