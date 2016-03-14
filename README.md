## SearchTunes 1.0.1 - Derived from [ProtoSound project] (https://www.github.com/parkpants/protosound)

----
### Installation Instructions:
* Open Chrome browser & Click the options button in the top right corner of the window
* Click through to "Developer Tools" -> "Extensions"
* On "Extensions" page check "Developer Mode"
* Click "Load Unpacked Extension..."
* Select directory of extension folder

----
### Troubleshooting:
* If you have any problems running the extension, reload it through the extensions menu. Close the browser and then open it back up.
* In some cases, you must expressly go to https://www.google.com before using the extension.

----
### Purpose:
* This chrome extension queries Spotify based on the user's Google search terms and plays a 30 second clip of a song.
* To use, after installation, use Google search within the Chrome Browser.
* After searching, click the SearchTunes icon at the top right of the window.

----
### Version 1.0.1 Changelog
* Moved jquery libraries to a separate js file instead of embedding it directly into searchTunes.js
* Added error message to inform user of a match not being found
* Tightened search to include more terms
* 'ACTUALLY' fixed split function using RegEx
* General clean up

----
### Future Release WishList
* Put everything in an extension popup
* Make some features user configurable