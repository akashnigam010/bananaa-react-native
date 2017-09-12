1.) Unable to load script from assets index.android.bundle on windows - Android device issue

-	I've encountered the same issue while following the React Native tutorial (developing on Linux and targeting Android).
	This issue helped me resolve the problem in following steps.
	(in project directory) mkdir android/app/src/main/assets
	- react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
	- react-native run-android