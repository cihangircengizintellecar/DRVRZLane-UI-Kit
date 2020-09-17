# DRVRZLane  UI Kit
UI library for DRVRZLane . Provides base Components, Styles, Helpers, and Higher order components.

This library requires the consuming repository to handle building/ compiling/ transpiling etc.

Requires Node v6+.

## Components
- ExampleHeading

## Development
This repository utilizes React Storybook as a sandbox environment to test the library's Components. More info on that here:
[React Storybook](https://github.com/kadirahq/react-storybook)

```
npm i
npm run storybook
```

This will install all required packages and then run the development environment,
which includes some handy dandy examples (available for view on [http://localhost:3030](http://localhost:3030)).
To add or edit the examples, simply look inside the `examples` folder.

### Adding/Editing Components
All components are housed within the `components` folder and are accessible from
the root of this package unless otherwise denoted.

Each component is isolated to its own folder, the schema of which should look
similar to this:
```
└─┬ ExampleComponent
  ├── ExampleComponent.js       (contains the component's JSX code)
  ├── ExampleComponent.scss     (contains any component SASS, optional if no SASS is needed)
  ├── ExampleHeading.test.js    (contains Enzyme tests related to the component)
  ├── ExampleHeading.story.js   (contains Storybook stories)
  ├── README.md                 (contains documentation related to the component)
  └── index.js                  (contains a default export containing the component)
```

Components should always be accessible from the root level in this format: `./component/NameOfComponent`.

### Testing
If at all possible, all components should also include tests! Tests utilize Enzyme,
Mocha (+ Chai) and can be run with the following command:
```
npm run test
```

All files that fit the naming convention `*.test.js` within the `components` folder(s)
will be run.

Code coverage is always nice to see, and you can see it as well by running:
```
npm run coverage
```
