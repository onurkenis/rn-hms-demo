# react-native-hms-location

## Getting started (WIP)

`$ npm install react-native-hms-location --save`

### Mostly automatic installation

`$ react-native link react-native-hms-location`

### Manual installation

#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`
  - Add `import com.reactlibrary.RNHMSLocationPackage;` to the imports at the top of the file
  - Add `new RNHMSLocationPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-hms-location'
  	project(':react-native-hms-location').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-hms-location/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-hms-location')
  	```

## Usage

``` javascript
// TODO: ...
```
