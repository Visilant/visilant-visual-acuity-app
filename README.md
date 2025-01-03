## Prerequisites

- Node 18
- Watchman
- Java 11
- Android SDK (comes with Android Studio)

## Installation

Note: this guide is tailored for Macs. If you use something else, check Expo's installation guide for [Windows or Linux](https://docs.expo.dev/guides/local-app-development/#prerequisites).

### Node.js

The most flexible solution is to install `nvm` and use `nvm install --lts` to install Node 18.

`nvm` installation instructions [can be found here](https://github.com/nvm-sh/nvm#installing-and-updating).

### Watchman

Install Watchman using a tool such as Homebrew:

`brew install watchman`

### Java 11

Install the OpenJDK distribution called Azul Zulu using Homebrew.

```
brew tap homebrew/cask-versions && brew install --cask zulu11
```

### JAVA_HOME

After installing Java, add the JAVA_HOME environment variable to your shell's config file.

On new MacOS's, where ZSH is the default shell, you can create a `.zshrc` in your home library or amend your existing `~/.zshrc`:

`export JAVA_HOME=/Library/Java/JavaVirtualMachines/zulu-11.jdk/Contents/Home`

Restart your terminal or `source ~./zshrc` to apply the changes.

When issuing the command `java --version`, you should see something like this:

```
openjdk 11.0.21 2023-10-17 LTS
OpenJDK Runtime Environment Zulu11.68+17-CA (build 11.0.21+9-LTS)
OpenJDK 64-Bit Server VM Zulu11.68+17-CA (build 11.0.21+9-LTS, mixed mode)
```

### Android Studio

Follow Expo's instructions on

- installing and setting up Android Studio and SDK
- installing a virtual device for your simulator

https://docs.expo.dev/workflow/android-studio-emulator/

Note: if Android Studio is complaining about low heap size, you can hit OK to accept the recommended value.

## Development

Install dependencies:

`yarn`

You can open the app in the Android emulator (which is our target system for the time being) by running:

`yarn android`

### Debugging

1. You can use the built-in element inspector in both the Android and iOS emulators by pressing CMD+M.
2. For a better view into the React component hierarchy and state, you can use the standalone app `react-devtools`.

You can simply install and run the app by using `npx react-devtools`.

When React DevTools is connected, the Element Inspector will enter a collapsed mode, and instead use DevTools as the primary UI. In this mode, clicking on something in the simulator will navigate to the relevant component in DevTools.

You can select "Hide Element Inspector" in the same menu to exit this mode.

### Platform-specific `localhost` values

In order to use platform specific localhost values use `USE_LOCALHOST`, and AppConfig will replace it to `localhost` and `10.0.2.2`

```dotenv
EXPO_PUBLIC_API_BASE_URL=USE_LOCALHOST:3000/api
EXPO_PUBLIC_AUTH_API_BASE_URL=USE_LOCALHOST:3001/mock-auth
```

### Testing

Unlike websites or webapps, the testing of React Native screens and components are not straightforward. For example, `testing-library/react-native` won't be able to reproduce native elements such as `Pressable` or `View`.

You can still fire events and look around the code, but only in limited ways. For example, since the CSS is not translated into native styles, it's impossible to `expect` something `toBeVisible()`.

However, there are a few helpers and strategies that can help you.

#### Naming

Normally, we write tests per file. Use the <original-file-name>.test.ts(x) pattern in your test file's name. Place it in the original folder next to the original file.

#### Components

Since all you can test is a skeleton of your components, it's useful to focus on hooks (more on them below), logic, and state changes.

Also, if you haven't used @testing-library yet, familiarize yourself with [the basics](https://testing-library.com/docs/) and [FAQ](https://testing-library.com/docs/dom-testing-library/faq). The main takeaway: tests should use the components the way they're intended to be used.

For example, even though you could chuck a test-id on the TextInput component and find it based on that, it's better to find it by its placeholder text - something an actual user would see.

```
const Input = () => {
  const [value, setValue] = useState('')
  return <TextInput value={value} onChangeText={setValue} placeholder="Write something" />
}

test('Should apply the value when changing text', () => {
  render(<Input />);
  const input = screen.getByPlaceholderText('Write something');
  fireEvent.changeText(input, '123');
  expect(input.props.value).toBe('123');
});
```

#### Hooks

You can render and re-render hooks with the `renderHook` function.

```
const { rerender } = await renderHook(() => useAccelerationBasedOrientation())

await act(async () => {
  await rerender(undefined)
})
```

You can use spies and mocks on the hook's dependencies to observe what the hook does and what it returns.

#### Snapshots

If you write a component in the src/components folder, it's meant to be reusable (like a text input or checkbox). _snapshot tests_ can give you an added layer of security as they guard against unintended changes in the component you're designing.

`expect(input).toMatchSnapshot()`

To purposefully update snapshots, run Jest with the `-u` flag.

#### Screens

"Screen" means an entry in our router, found in `src/screens`. It's a self-contained "place" inside the application. Testing this with the above methods is possible (and there's an example in `src/screens/Onboarding`), but probably only useful if there is logic to test in the screen itself.

To test whole screens, you can pass in mocked `navigation` and `route` objects:

```
import { mockedNavigation } from '@jest/mocks/navigation'

...

render(<Onboarding navigation={mockedNavigation} route={{ key: '', name: 'Onboarding' }} />)
```

#### test-utils

The src/jest/test-utils directory contains our test setup file, mocks, and test utilities.

It exports a custom `render()` function which wraps your code with the necessary providers. It also re-exports `fireEvent` and `screen`.

`render()` should be used to render a piece of code, and `screen` can be used to query it:

```
render(<Greeting name="Julia" />)

const greeting = screen.getByText('Hello, Julia')
```

Finally, `expect` (which is a Jest global and shouldn't be imported) should be used to write assertions:

`expect(greeting).toBeOnTheScreen()`

## Building for Android

1. Make sure to add these commands to your shell profile (eg. ~/.zshrc)

```
export ANDROID_HOME=“/Users/yourusername/Library/Android/sdk”
export PATH=$PATH:/Users/yourusername/Library/Android/sdk
export JAVA_HOME=`/usr/libexec/java_home -v 11`
export ANDROID_HOME="/Users/yourusername/Library/Android/sdk"
```

2. Install Bundletool:

`brew install bundletool`

3. Create keystore:

For newer builds have to have a keystore, because that's the only way deep linking can be validated.

`keytool -genkey -v -keystore release.keystore -alias android -keyalg RSA -keysize 2048 -validity 10000`

You can get the signature for the cert file hosted on the domain by running:

`keytool -list -keystore release.keystore`

You just have to grab the fingerprint from `Certificate fingerprint (SHA-256)`

4. Run the build script

`yarn build:prod`

If you want to perform the steps to build an APK manually, here are the steps:

You should also add `NODE_ENV=production` before the script so it builds with the development server as the environment.

1. Create a prebuild:

`npx expo prebuild`

If this step fails on the yarn install step, you can add the `--no-install` option and install manually beforehand.

2. Create the main build (for the Play Store):

`npx react-native build-android --mode=release`

3. If needed, extract the APK from the build:

`bundletool build-apks --bundle=./android/app/build/outputs/bundle/release/app-release.aab --output=./android/app/build/outputs/apk/release/app-release.apks --mode=universal`

For deep linking:
`bundletool build-apks --bundle=./android/app/build/outputs/bundle/release/app-release.aab --output=./android/app/build/outputs/apk/release/app-release.apks --mode=universal --ks=./release.keystore --ks-key-alias=android`

4. `unzip ./android/app/build/outputs/apk/release/app-release.apks -d ./android/app/build/outputs/apk/release/`
