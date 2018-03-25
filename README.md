# Simple React Component

This is my attempt at a boilerplate that allows you to build, test, and publish a React component to npm.

## Installation

Clone the boilerplate locally:

```
git clone https://github.com/tducasse/simple-react-component.git
```

## Usage

### package.json

Begin by editing the _package.json_ file:

* name: This is the name you will use to download your component on npm once it's published. This has to be unique in the npm world.
* description: Describe what your component does.
* author: Replace my name and email with yours!
* repository: Change this to the github repository you will push your component to.

### Building the component

Build your new component in the `lib/` folder, and make sure you export it in `lib/index.js`.

A component called `MyComponent` is provided as an example.

Note that you can export more than one component, using

```
export {MyComponent, MyComponent2}
```

### Testing the component

Before publishing your component to npm, you can test it locally.

Assuming you already have a working React application, this is a two part process.

At the root of your new component folder, run

```
yarn link
```

This will install your component in your global node_modules.

Then, in your React app, run

```
yarn link your_component_name
```

Then, you can call your component using

```
import {MyComponent} from 'your_component_name'
```

Once you're done testing, you can use `yarn unlink` the same way to remove the symbolic link to your component.

## Commands

```
yarn build
```

This command will take the code in `lib/` and transpile it to `build/`.

```
yarn build:watch
```

This command will automatically transpile the code in `lib/` to `build/` on every change/
