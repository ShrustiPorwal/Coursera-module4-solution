/*
Solution of assignment 4:

Expected output:

Hello Shrusti
Good Bye Chintal
Good Bye Chirush
Good Bye Shruchi
Hello Pratap
Hello Kumari
Hello Chinzi
Hello Khushi
Hello Porwal
Good Bye Jain
*/

(function() {
    var names = ["Shrusti", "John", "Chintal", "Chirush", "Pratap", "Kumari", "Chinzi", "Khushi", "Porwal", "Jain"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
