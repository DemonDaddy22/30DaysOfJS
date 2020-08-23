# 30 DAYS OF JS &nbsp;💻

'Cause why not? I really like JavaScript and the power that it possesses amazes me. Each day, I'll be doing a JS (Vanilla JS) exercise from [Wes Sob's](https://github.com/wesbos/JavaScript30) JavaScript30 Challenge.

- *Day 01* - **Drum Kit &nbsp;🎵**: Plays a unique sound whenever a certain key is pressed. The key things which can be learned from this exercise are the use of ```data-key``` and eventListener type ```transitionend``` which is useful to remove class(es) from an element after its transition(s) end, rather than removing the specific class(es) in a ```setTimeout``` function with the time being equal to time duration of transition.

- *Day 02* - **CSS & JS Clock &nbsp;🕓**: A clock created using CSS and JS as the name clearly suggests. The key things which can be learned from this exercise are the use of ```transform-origin```, which can be used to transform an element about the ends of X axis, or for that matter, about any point, rather than the center point (which is the default case), and how to maintain continuity of clock hands (something which I did on my own), which can otherwise cause the clock hands to rewind back to start position after completion of a rotation.

- *Day 03* - **CSS Var &nbsp;🎨**: Change certain CSS properties on changing input values. The key thing which can be learned from this exercise is the use of variables in CSS, which not only allow you to reuse them throughout your document conveniently, but can also be manipulated easily using JS.

- *Day 04* - **Array Cardio 1 &nbsp;💪**: Going over different array methods. It's good to know what all actions we can perform on an array, and how they can be used to manipulate the array. Methods like map and reduce can be used effectively in various situations to get the desired results with minimal effort and code.

- *Day 05* - **Flex Panels Image Gallery &nbsp;🌆**: Full screen vertical image gallery with animations. The key things which can be learned here are the use of ```display: flex```, ```align-items``` and ```justify-content```, to perfectly align your content on a webpage, one can even make use of flexbox(es) inside another flexbox for horizontal and vertical alignment of elements, and how simple transitions can add so much more to the UX of a webpage. Rather than using the predefined animation paths (like linear, ease-in-out, etc), try creating custom cubic-bezier paths to achieve fun and unique transitions and the best way to try this is using the browser console.

- *Day 06* - **Type Ahead &nbsp;🔍**: Search box which searches through a list of objects. The key things which can be learned here are the use of inbuilt ```fetch()``` function for getting API response and ```regex``` to search the input string pattern inside a string. Also, a bit of styling gives a modern and appealing look to the otherwise boring input field.

- *Day 07* - **Array Cardio 2 &nbsp;💪**: Went over few more important array functions.

- *Day 08* - **HTML Canvas &nbsp; 🖌**: Window sized canvas over which one can draw multi-coloured strokes. The key things which can be learned from this exercise are the creation of ```canvas```, which is basically used for drawing graphics, and how one can use JS to do endless things on and with canvas.

- *Day 09* - **Dev Tools Tricks &nbsp;⛏**: Covered some essential console methods which can prove useful for debugging and logging values.

- *Day 10* - **Check Multiple Checkboxes &nbsp;☑**: Check box list with the functionality to check multiple boxes at once by holding down shift key. The main thing which can be learned here from this exercise is how to write the logic to select multiple select boxes in one go. Modifications to the logic, can result in more precise selections.

- *Day 11* - **Custom Video Player &nbsp;⏯**: Custom styled video player with functionalies like pause/play, volume increase/decrease, playback-speed increase/decrease, expand player, skip 10s ahead/behind. The key things which can be learned here are styling the video controls for a video player and achieving their respective functionalities using JS. Also, I learned that order of declaration of eventListeners matters, because certain events won't be fired if their order of attachment is incorrect.

- *Day 12* - **Konami Code Sequence &nbsp;👽**: Tracing a key sequence to trigger a certain event. This type of feature has been used in Mario and many other websites, which isn't explicitly mentioned anywhere, but results in a certain surprise. It can be achieved by maintaining an array of key inputs, and checking if the pattern to match is contained at the last of the array.

- *Day 13* - **Slide On Scroll &nbsp;📜**: Slide-in images on scrolling. This is one of the most commonly used features in modern websites wherein text and images are made to slide-in whenever we scroll them into view. This exercise taught me how to implement the same easily using JS. All you need to do is calculate the height of object at which it should slide-in and add the corresponding class, and whenever you've scrolled past the object, you can simply remove this class. Removing the class is optional, as this will ensure the slide-in effect happens everytime and not just the first time.

- *Day 14* - **Objects & Arrays &nbsp;🌀**: Copying references and actual values in objects and arrays. The key things which can be learned from this exercise are how copying arrays and objects to other variables happens. Simply pointing a variable to another variable holding up an object, would mean that the new variable will also point to the same object rather than creating a new one. This can be overcome by making a shallow copy of an object, but in same cases, we would require a deep copy to avoid any nested references to the previous object.

- *Day 15* - **LocalStorage & Event Delegation &nbsp;🏪**: A persistent items list which is connected to browser's localStorage. The key things which can be learned here are the browser's ```localStorage```, which can help in achieving persistence at client-side and event delegation, which is basically looking for elements which will be present on the page at the time of adding an event listener. Also, I went ahead and tried to mimic the frosty glass background style for the form.

- *Day 16* - **Mouse Move Effect &nbsp;🖱**: Changing position of text shadow on changing mouse position. The key things which can be learned here are how to use the offset values to track the position of mouse and checking whether the event to which the event listener is added is not the same as the target element because that can reset the offset values, causing an issue in the intended functionality.

- *Day 17* - **Sort Without Aricles &nbsp;↕**: Sorting a list of band names without considering the articles preceding the band names.

- *Day 18* - **Tally String Times &nbsp;🕒**: Extracting time from DOM, converting it to numbers and then finding out the sum total time. The result is then formatted to HH:MM:SS format.

- *Day 19* - **Native Speech Recognition &nbsp;🗣**: Making use of browser's native speech recogniser to recognise speech and update DOM with the words spoken. The key thing which can be learned from this exercise is the use of ```SpeechRecognition``` to recognise user's speech. It's best to log the output generated by Speech Recogniser, as it is a nested object, and the meaningful speech (or transcript) needs to be extracted from within the output object. This concept can be extended to ask for weather or quote, roll a dice or toss a coin, etc.

- *Day 20* - **Speedometer and Compass &nbsp;↖**: Made use of geolocation to get speed and direction of device and create a Speedometer + Compass. It works better on a Mac as there's an option to simulate the location of device, not actually moving yourself, in order to constantly update speed and location, which isn't possible on other OS devices.

- *Day 21* - **Webcam Fun &nbsp;📹**: A webcam with video injected to a canvas, with the functionalities to apply various filters and even take photos and download. The key things which can be learned here are how to get video stream from webcam and plug it into the video element. Also, the frames of the video can be mapped onto a canvas, which can be updated after a short interval to give an illusion of live video itself, also, how we can take data from canvas and create download functionality for the photo taken. We can play around with the pixel values of the canvas, to create fun filters. 