# Text detector RN

React native application created for a Campus Party Hackathon, capable of taking a picture and sending to a backend api, where with help from Google vision api detects the desired blocks of text.

### Demo and improvements

The demo version presented in the hackathon is the one in the master branch. All the changes made in the future will be pushed into develop branch for now.
Take into account that the footer has no functionality at the moment, it's just presentational.
Read _Further improvements_ below for more information on the future of the app.

### Install required dependencies

Make sure you have the following dependencies:

- JDK 8: Java Development Kit 8
- Android Studio
- Xcode
- Yarn

Follow the [React Native CLI quickstart](https://facebook.github.io/react-native/docs/getting-started.html) for each platform.

Then, do:

```sh
$ cd text-detection-rn
$ yarn
```

### Start metro bundler

```sh
$ react-native start
```

### Start iOS application

```sh
$ react-native run-ios
```

### Further improvements

In future version the application will count with:

- Redux store
- Multiple images support
- Multiple snaps
    - Send images on the fly, or
    - Save on an ***album*** and make the user decide if send or not
- Navigability
    - Backend database information
    - Album with images captured

***To be considered:***
- Google vision implemented over React native's application (check performance)
