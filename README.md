# React Native & HMS Sample

This project is created to show HMS usage with React Native. It uses offically released react native modules Push Kit and Analytics Kit. Also it has custom bridge implementations for Account Kit and `isHmsAvailable()` function to help developers understand HMS integration with different aspects.

## Preparations
Save the generated agconnect-services.json file to `android/app` directory in the RN project.

## Running the application

```sh
git clone https://github.com/onurkenis/rn-hms-demo.git
cd rn-hms-demo
yarn install        # install dependencies
yarn run android    # start dev server
```

#### yarn run android
Starts the development server and loads your app on connected Android device or emulator
