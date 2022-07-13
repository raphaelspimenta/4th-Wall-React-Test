## Setup
1. Create a fork and clone the repo
2. Run `npm install` [npm](https://docs.npmjs.com/cli/install)
3. Run `npm run json-server` [json-server](https://www.npmjs.com/package/json-server)
4. In a separate terminal, Run `npm start` [Create React App](https://github.com/facebook/create-react-app) - (Should have two terminals running, 1 for the json server & 1 for the UI)


## Test Instructions
1. Add functionality and improve code
  - The minimum goal is that the user should be able to view, add, update, and delete contacts when you are done (the async methods to accomplish this are provided already)
  - After completing base functionality, focus on improving the code and/or the UI/UX
  - Use any libraries you think will help you accomplish what you want
2. Update this README file
  - List changes you make and brief explanations of why you made them under "Changes Made"
  - If you don't have time to complete everything you'd like to, list further changes under "Changes Needed"
3. Finally, in a last commit, share your thoughts about the test under "Final Thoughts." What went well? What were the challenges?

## Evaluation Criteria
1. Your thought process
  - Listing your changes and why you made them is just as important as your code. We want to understand how you think about code.
2. Your code
  - Best practices
  - Readability
  - Reliability
3. UI/UX

## Changes Made
### Core, Environment & API Configuration

Thinking about development environments and general infrastructure configurations, I created a package called `core` with the responsibility of providing to the application access to API's, control of development environments and other similar utilities.
The api url was defined in the .env file, them we can define this only once in the axios configuration.

### Pages & Components folder

To separate the components better, I created the folder `components` to keep the less controlled components like visualization components, layout stuff, loaders and etc. Also, I made the folder `pages` to keep the application pages containing the logic and its flow.

### Application router

Even though we initially have only one page, a router was configured in `/routes` to control the application's routes using Suspense and Lazy load. The components `components/DynamicRoute` and `components/ErrorBoundary` are used to make this work.

### External Libraries

To facilitate some development points I used the following libraries:

* [Formik](https://formik.org/docs/overview) + [Yup](https://www.npmjs.com/package/yup) to help develop controlled forms with validation
* [React router DOM](https://v5.reactrouter.com/web/guides/quick-start) to create the application routes
* [Redux](https://redux.js.org/) + [Redux-Saga](https://redux-saga.js.org/) to create a unique store to keep the application data and deal with async flows.

### Store

As mentioned, I used redux and redux-saga to create a store. The idea was to use the concept of resources, for example, locations is a resource and we can access it in any part of the application with the method created `useResource` in `store/utils` that returns a specific part of the store.

Each resource was initially thought as a CRUD. So the values ​​of each reducer have a `data` property that stores the data fetched from the API, and other properties for each of the crud operations, containing the current status of the operation and a property to inform if there are any errors.

For the asynchronous flows, redux-saga was used, the most latent reason here for this is that these flows can be more easily tested separately and reused anywhere in the application.

## Changes Needed
### Design System and Components package
Something I would very much like to do if I had more time is to create separated UI definitions from the application and agnostic to any library.

The primary idea would be to create a Design System based on design-tokens. For this, a package would be created to provide the application's theme definitions, such as colors, typography, margins, screen sizes, etc.

After that, we could create a project using, for example, the storybook to define the application's components. This project must use the theme definitions described in the design system created earlier.

The main idea here is that we can share these definitions/components and if in the future we decide to change from Material UI to Bootstrap for example, we only need to make changes in the components level.

### Better UI responsiveness

Responsiveness has not yet been worked on as it should. For example, there are no screen size settings yet in this development. So this is a point that should be made later.

### Internationalization

It is not critical, but a good practice for any application is to use internationalization to present the content. For that we could use i18next.
