This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

Below you'll find information about performing common tasks. The most recent version of this guide is available [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md).

## Table of Contents

* [Updating to New Releases](#updating-to-new-releases)
* [Available Scripts](#available-scripts)
  * [npm start](#npm-start)
  * [npm test](#npm-test)
  * [npm run ios](#npm-run-ios)
  * [npm run android](#npm-run-android)
  * [npm run eject](#npm-run-eject)
* [Writing and Running Tests](#writing-and-running-tests)
* [Environment Variables](#environment-variables)
  * [Configuring Packager IP Address](#configuring-packager-ip-address)
* [Customizing App Display Name and Icon](#customizing-app-display-name-and-icon)
* [Sharing and Deployment](#sharing-and-deployment)
  * [Publishing to Expo's React Native Community](#publishing-to-expos-react-native-community)
  * [Building an Expo "standalone" app](#building-an-expo-standalone-app)
  * [Ejecting from Create React Native App](#ejecting-from-create-react-native-app)
    * [Build Dependencies (Xcode & Android Studio)](#build-dependencies-xcode-android-studio)
    * [Should I Use ExpoKit?](#should-i-use-expokit)
* [Troubleshooting](#troubleshooting)
  * [Networking](#networking)
  * [iOS Simulator won't open](#ios-simulator-wont-open)
  * [QR Code does not scan](#qr-code-does-not-scan)

## Updating to New Releases

You should only need to update the global installation of `create-react-native-app` very rarely, ideally never.

Updating the `react-native-scripts` dependency of your app should be as simple as bumping the version number in `package.json` and reinstalling your project's dependencies.

Upgrading to a new version of React Native requires updating the `react-native`, `react`, and `expo` package versions, and setting the correct `sdkVersion` in `app.json`. See the [versioning guide](https://github.com/react-community/create-react-native-app/blob/master/VERSIONS.md) for up-to-date information about package version compatibility.

## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

### `npm start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start --reset-cache
# or
yarn start --reset-cache
```

#### `npm test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:

##### Using Android Studio's `adb`

1. Make sure that you can run adb from your terminal.
2. Open Genymotion and navigate to `Settings -> ADB`. Select “Use custom Android SDK tools” and update with your [Android SDK directory](https://stackoverflow.com/questions/25176594/android-sdk-location).

##### Using Genymotion's `adb`

1. Find Genymotion’s copy of adb. On macOS for example, this is normally `/Applications/Genymotion.app/Contents/MacOS/tools/`.
2. Add the Genymotion tools directory to your path (instructions for [Mac](http://osxdaily.com/2014/08/14/add-new-path-to-path-command-line/), [Linux](http://www.computerhope.com/issues/ch001647.htm), and [Windows](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/)).
3. Make sure that you can run adb from your terminal.

#### `npm run eject`

This will start the process of "ejecting" from Create React Native App's build scripts. You'll be asked a couple of questions about how you'd like to build your project.

**Warning:** Running eject is a permanent action (aside from whatever version control system you use). An ejected app will require you to have an [Xcode and/or Android Studio environment](https://facebook.github.io/react-native/docs/getting-started.html) set up.

## Customizing App Display Name and Icon

You can edit `app.json` to include [configuration keys](https://docs.expo.io/versions/latest/guides/configuration.html) under the `expo` key.

To change your app's display name, set the `expo.name` key in `app.json` to an appropriate string.

To set an app icon, set the `expo.icon` key in `app.json` to be either a local path or a URL. It's recommended that you use a 512x512 png file with transparency.

## Writing and Running Tests

This project is set up to use [jest](https://facebook.github.io/jest/) for tests. You can configure whatever testing strategy you like, but jest works out of the box. Create test files in directories called `__tests__` or with the `.test` extension to have the files loaded by jest. See the [the template project](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/App.test.js) for an example test. The [jest documentation](https://facebook.github.io/jest/docs/en/getting-started.html) is also a wonderful resource, as is the [React Native testing tutorial](https://facebook.github.io/jest/docs/en/tutorial-react-native.html).

## Environment Variables

You can configure some of Create React Native App's behavior using environment variables.

### Configuring Packager IP Address

When starting your project, you'll see something like this for your project URL:

```
exp://192.168.0.2:19000
```

The "manifest" at that URL tells the Expo app how to retrieve and load your app's JavaScript bundle, so even if you load it in the app via a URL like `exp://localhost:19000`, the Expo client app will still try to retrieve your app at the IP address that the start script provides.

In some cases, this is less than ideal. This might be the case if you need to run your project inside of a virtual machine and you have to access the packager via a different IP address than the one which prints by default. In order to override the IP address or hostname that is detected by Create React Native App, you can specify your own hostname via the `REACT_NATIVE_PACKAGER_HOSTNAME` environment variable:

Mac and Linux:

```
REACT_NATIVE_PACKAGER_HOSTNAME='my-custom-ip-address-or-hostname' npm start
```

Windows:
```
set REACT_NATIVE_PACKAGER_HOSTNAME='my-custom-ip-address-or-hostname'
npm start
```

The above example would cause the development server to listen on `exp://my-custom-ip-address-or-hostname:19000`.

## Sharing and Deployment

Create React Native App does a lot of work to make app setup and development simple and straightforward, but it's very difficult to do the same for deploying to Apple's App Store or Google's Play Store without relying on a hosted service.

### Publishing to Expo's React Native Community

Expo provides free hosting for the JS-only apps created by CRNA, allowing you to share your app through the Expo client app. This requires registration for an Expo account.

Install the `exp` command-line tool, and run the publish command:

```
$ npm i -g exp
$ exp publish
```

### Building an Expo "standalone" app

You can also use a service like [Expo's standalone builds](https://docs.expo.io/versions/latest/guides/building-standalone-apps.html) if you want to get an IPA/APK for distribution without having to build the native code yourself.

### Ejecting from Create React Native App

If you want to build and deploy your app yourself, you'll need to eject from CRNA and use Xcode and Android Studio.

This is usually as simple as running `npm run eject` in your project, which will walk you through the process. Make sure to install `react-native-cli` and follow the [native code getting started guide for React Native](https://facebook.github.io/react-native/docs/getting-started.html).

#### Should I Use ExpoKit?

If you have made use of Expo APIs while working on your project, then those API calls will stop working if you eject to a regular React Native project. If you want to continue using those APIs, you can eject to "React Native + ExpoKit" which will still allow you to build your own native code and continue using the Expo APIs. See the [ejecting guide](https://github.com/react-community/create-react-native-app/blob/master/EJECTING.md) for more details about this option.

## Troubleshooting

### Networking

If you're unable to load your app on your phone due to a network timeout or a refused connection, a good first step is to verify that your phone and computer are on the same network and that they can reach each other. Create React Native App needs access to ports 19000 and 19001 so ensure that your network and firewall settings allow access from your device to your computer on both of these ports.

Try opening a web browser on your phone and opening the URL that the packager script prints, replacing `exp://` with `http://`. So, for example, if underneath the QR code in your terminal you see:

```
exp://192.168.0.1:19000
```

Try opening Safari or Chrome on your phone and loading

```
http://192.168.0.1:19000
```

and

```
http://192.168.0.1:19001
```

If this works, but you're still unable to load your app by scanning the QR code, please open an issue on the [Create React Native App repository](https://github.com/react-community/create-react-native-app) with details about these steps and any other error messages you may have received.

If you're not able to load the `http` URL in your phone's web browser, try using the tethering/mobile hotspot feature on your phone (beware of data usage, though), connecting your computer to that WiFi network, and restarting the packager. If you are using a VPN you may need to disable it.

### iOS Simulator won't open

If you're on a Mac, there are a few errors that users sometimes see when attempting to `npm run ios`:

* "non-zero exit code: 107"
* "You may need to install Xcode" but it is already installed
* and others

There are a few steps you may want to take to troubleshoot these kinds of errors:

1. Make sure Xcode is installed and open it to accept the license agreement if it prompts you. You can install it from the Mac App Store.
2. Open Xcode's Preferences, the Locations tab, and make sure that the `Command Line Tools` menu option is set to something. Sometimes when the CLI tools are first installed by Homebrew this option is left blank, which can prevent Apple utilities from finding the simulator. Make sure to re-run `npm/yarn run ios` after doing so.
3. If that doesn't work, open the Simulator, and under the app menu select `Reset Contents and Settings...`. After that has finished, quit the Simulator, and re-run `npm/yarn run ios`.

### QR Code does not scan

If you're not able to scan the QR code, make sure your phone's camera is focusing correctly, and also make sure that the contrast on the two colors in your terminal is high enough. For example, WebStorm's default themes may [not have enough contrast](https://github.com/react-community/create-react-native-app/issues/49) for terminal QR codes to be scannable with the system barcode scanners that the Expo app uses.

If this causes problems for you, you may want to try changing your terminal's color theme to have more contrast, or running Create React Native App from a different terminal. You can also manually enter the URL printed by the packager script in the Expo app's search bar to load it manually.



After testing build android reuired files

```

sudo react-native bundle --platform android --dev false --entry-file App.js   --bundle-output android/index.android.bundle   --assets-dest android/


```


build apk

```
sudo exp build:android

```


Example
```
shutosh@atp:~/Development/AwesomeProject$ sudo  npm install react-native
npm WARN react-google-maps@7.3.0 requires a peer of react@15.5.4 but none is installed. You must install peer dependencies yourself.
npm WARN react-google-maps@7.3.0 requires a peer of react-dom@15.5.4 but none is installed. You must install peer dependencies yourself.
npm WARN react-native-maps@0.21.0 requires a peer of react-native@^0.51 || ^0.52 || ^0.53 || ^0.54 but none is installed. You must install peer dependencies yourself.
npm WARN react-native-web-maps@0.1.0 requires a peer of react-native-web@* but none is installed. You must install peer dependencies yourself.
npm WARN react-prop-types-element-of-type@2.2.0 requires a peer of react@^0.14.6 || ^15.0.0-0 but none is installed. You must install peer dependencies yourself.
npm WARN eslint-plugin-react-native@3.2.1 requires a peer of eslint@^3.17.0 || ^4.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @expo/ngrok-bin-darwin-ia32@2.2.8 (node_modules/@expo/ngrok-bin-darwin-ia32):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @expo/ngrok-bin-darwin-ia32@2.2.8: wanted {"os":"darwin","arch":"ia32"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @expo/ngrok-bin-darwin-x64@2.2.8 (node_modules/@expo/ngrok-bin-darwin-x64):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @expo/ngrok-bin-darwin-x64@2.2.8: wanted {"os":"darwin","arch":"x64"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @expo/ngrok-bin-freebsd-ia32@2.2.8 (node_modules/@expo/ngrok-bin-freebsd-ia32):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @expo/ngrok-bin-freebsd-ia32@2.2.8: wanted {"os":"freebsd","arch":"ia32"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @expo/ngrok-bin-linux-arm@2.2.8 (node_modules/@expo/ngrok-bin-linux-arm):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @expo/ngrok-bin-linux-arm@2.2.8: wanted {"os":"linux","arch":"arm"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @expo/ngrok-bin-freebsd-x64@2.2.8 (node_modules/@expo/ngrok-bin-freebsd-x64):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @expo/ngrok-bin-freebsd-x64@2.2.8: wanted {"os":"freebsd","arch":"x64"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @expo/ngrok-bin-linux-ia32@2.2.8 (node_modules/@expo/ngrok-bin-linux-ia32):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @expo/ngrok-bin-linux-ia32@2.2.8: wanted {"os":"linux","arch":"ia32"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @expo/ngrok-bin-linux-arm64@2.2.8 (node_modules/@expo/ngrok-bin-linux-arm64):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @expo/ngrok-bin-linux-arm64@2.2.8: wanted {"os":"linux","arch":"arm64"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @expo/ngrok-bin-sunos-x64@2.2.8 (node_modules/@expo/ngrok-bin-sunos-x64):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @expo/ngrok-bin-sunos-x64@2.2.8: wanted {"os":"sunos","arch":"x64"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @expo/ngrok-bin-win32-x64@2.2.8-beta.1 (node_modules/@expo/ngrok-bin-win32-x64):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @expo/ngrok-bin-win32-x64@2.2.8-beta.1: wanted {"os":"win32","arch":"x64"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: @expo/ngrok-bin-win32-ia32@2.2.8-beta.1 (node_modules/@expo/ngrok-bin-win32-ia32):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for @expo/ngrok-bin-win32-ia32@2.2.8-beta.1: wanted {"os":"win32","arch":"ia32"} (current: {"os":"linux","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

+ react-native@0.55.4
updated 1 package and audited 30332 packages in 19.337s
found 5 vulnerabilities (2 low, 2 moderate, 1 high)
  run `npm audit fix` to fix them, or `npm audit` for details
ashutosh@atp:~/Development/AwesomeProject$ sudo react-native bundle --platform android --dev false --entry-file App.js 
sudo: react-native: command not found
ashutosh@atp:~/Development/AwesomeProject$ sudo  npm install -g react-native
/usr/local/bin/react-native -> /usr/local/lib/node_modules/react-native/local-cli/wrong-react-native.js
npm WARN react-native@0.56.0 requires a peer of react@16.4.1 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules/react-native/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

+ react-native@0.56.0
added 698 packages from 346 contributors in 30.811s
ashutosh@atp:~/Development/AwesomeProject$ sudo react-native bundle --platform android --dev false --entry-file App.js 
Looks like you installed react-native globally, maybe you meant react-native-cli?
To fix the issue, run:
npm uninstall -g react-native
npm install -g react-native-cli
ashutosh@atp:~/Development/AwesomeProject$ sudo react-native bundle-cli --platform android --dev false --entry-file App.js 
Looks like you installed react-native globally, maybe you meant react-native-cli?
To fix the issue, run:
npm uninstall -g react-native
npm install -g react-native-cli
ashutosh@atp:~/Development/AwesomeProject$ sudo  npm install -g react-native-cli
/usr/local/bin/react-native -> /usr/local/lib/node_modules/react-native-cli/index.js
+ react-native-cli@2.0.1
added 41 packages from 15 contributors in 1.395s
ashutosh@atp:~/Development/AwesomeProject$ sudo react-native bundle-cli --platform android --dev false --entry-file App.js 
Scanning folders for symlinks in /home/ashutosh/Development/AwesomeProject/node_modules (10ms)

  Unrecognized command 'bundle-cli'
  Run react-native --help to see list of all available commands

ashutosh@atp:~/Development/AwesomeProject$ sudo react-native-cli  bundle --platform android --dev false --entry-file App.js 
sudo: react-native-cli: command not found
ashutosh@atp:~/Development/AwesomeProject$ react-native
react-native                 react-native-create-library  
ashutosh@atp:~/Development/AwesomeProject$ sudo react-native bundle --platform android --dev false --entry-file App.js 
Scanning folders for symlinks in /home/ashutosh/Development/AwesomeProject/node_modules (10ms)

error: option '--bundle-output' missing

ashutosh@atp:~/Development/AwesomeProject$ react-native bundle --platform android --dev false --entry-file App.js   --bundle-output android/app/src/main/assets/index.android.bundle   --assets-dest android/app/src/main/res/
Scanning folders for symlinks in /home/ashutosh/Development/AwesomeProject/node_modules (9ms)
fs.js:113
    throw err;
    ^

Error: EACCES: permission denied, open '/home/ashutosh/.babel.json'
    at Object.openSync (fs.js:434:3)
    at Object.writeFileSync (fs.js:1154:35)
    at save (/home/ashutosh/Development/AwesomeProject/node_modules/babel-register/lib/cache.js:48:16)
    at process._tickCallback (internal/process/next_tick.js:61:11)
    at Function.Module.runMain (internal/modules/cjs/loader.js:745:11)
    at startup (internal/bootstrap/node.js:266:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:596:3)
ashutosh@atp:~/Development/AwesomeProject$ sudo react-native bundle --platform android --dev false --entry-file App.js   --bundle-output android/app/src/main/assets/index.android.bundle   --assets-dest android/app/src/main/res/
Scanning folders for symlinks in /home/ashutosh/Development/AwesomeProject/node_modules (10ms)
Scanning folders for symlinks in /home/ashutosh/Development/AwesomeProject/node_modules (9ms)
Loading dependency graph, done.



bundle: Writing bundle output to: android/app/src/main/assets/index.android.bundle

ENOENT: no such file or directory, open 'android/app/src/main/assets/index.android.bundle'

ashutosh@atp:~/Development/AwesomeProject$ 
ashutosh@atp:~/Development/AwesomeProject$ 
ashutosh@atp:~/Development/AwesomeProject$ 
ashutosh@atp:~/Development/AwesomeProject$ sudo react-native bundle --platform android --dev false --entry-file App.js   --bundle-output android/app/src/main/assets/index.android.bundle   --assets-dest android/app/src/main/res/
Scanning folders for symlinks in /home/ashutosh/Development/AwesomeProject/node_modules (9ms)
Scanning folders for symlinks in /home/ashutosh/Development/AwesomeProject/node_modules (8ms)
Loading dependency graph, done.
bundle: Writing bundle output to: android/app/src/main/assets/index.android.bundle

ENOENT: no such file or directory, open 'android/app/src/main/assets/index.android.bundle'

ashutosh@atp:~/Development/AwesomeProject$ ls android/app/src/main/assets/index.android.bundle
ls: cannot access 'android/app/src/main/assets/index.android.bundle': No such file or directory
ashutosh@atp:~/Development/AwesomeProject$ ls android/app/src/main/assets/
ls: cannot access 'android/app/src/main/assets/': No such file or directory
ashutosh@atp:~/Development/AwesomeProject$ ls android/
ashutosh@atp:~/Development/AwesomeProject$ ls android/
ashutosh@atp:~/Development/AwesomeProject$ sudo react-native bundle --platform android --dev false --entry-file App.js   --bundle-output android/index.android.bundle   --assets-dest android/
Scanning folders for symlinks in /home/ashutosh/Development/AwesomeProject/node_modules (10ms)
Scanning folders for symlinks in /home/ashutosh/Development/AwesomeProject/node_modules (11ms)
Loading dependency graph, done.
bundle: Writing bundle output to: android/index.android.bundle
bundle: Done writing bundle output


shutosh@atp:~/Development/AwesomeProject$ sudo exp build:android
13:57:13 [exp] There is a new version of exp available (57.0.0).
You are currently using exp 52.0.3
Run `npm install -g exp` to get the latest version
13:57:31 [exp] Making sure project is set up correctly...
-13:57:53 [exp] Warning: Not using the Expo fork of react-native. See https://docs.expo.io/.
13:57:56 [exp] Your project looks good!
13:57:56 [exp] Checking if current build exists...

13:58:02 [exp] No currently active or previous builds for this project.

? Would you like to upload a keystore or have us generate one for you?
If you don't know what this means, let us handle it! :)
 false
13:58:11 [exp] Unable to find an existing exp instance for this directory, starting a new one...
13:58:17 [exp] Warning: Not using the Expo fork of react-native. See https://docs.expo.io/.
13:58:21 [exp] Starting Metro Bundler on port 19001.
13:58:21 [exp] Metro Bundler ready.
13:58:23 [exp] Error starting tunnel: XDLError: failed to start tunnel
13:58:23 [exp] Publishing to channel 'default'...
13:58:26 [exp] Tunnel connected.
13:58:29 [exp] Warning: Not using the Expo fork of react-native. See https://docs.expo.io/.
13:58:32 [exp] Building iOS bundle
13:58:39 [exp] Building Android bundle
Building JavaScript bundle [====================================================================================================] 100%13:58:39 [exp] Finished building JavaScript bundle in 7269ms.
13:58:45 [exp] Analyzing assets
Building JavaScript bundle [====================================================================================================] 100%13:58:45 [exp] Finished building JavaScript bundle in 5430ms.
13:58:50 [exp] Finished building JavaScript bundle in 5401ms.
13:58:55 [exp] Finished building JavaScript bundle in 4949ms.
13:58:55 [exp] Uploading assets
13:59:02 [exp] Uploading /0.png
13:59:09 [exp] Uploading JavaScript bundles
13:59:23 [exp] Published
13:59:23 [exp] Your URL is

https://exp.host/@atp/nap

13:59:23 [exp] Building...
13:59:29 [exp] Build started, it may take a few minutes to complete.
13:59:29 [exp] You can monitor the build at

 https://expo.io/builds/f3a1c013-df91-453e-832d-5826b3322bb0

|13:59:29 [exp] Waiting for build to complete. You can press Ctrl+C to exit.
/^C
Stopping packager...
-Packager stopped.


```