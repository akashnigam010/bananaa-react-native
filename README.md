1.) Load resources - android packager

- mkdir android/app/src/main/assets (create if not exists - In project directory)
- react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
- react-native run-android