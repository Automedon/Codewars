/*
In music, if you double (or halve) the pitch of any note you will get to the same note again.

"Concert A" is fixed at 440 Hz, and every other note is defined based on that. 880 Hz is also an A, as is 1760 Hz, as is 220 Hz.

There are 12 notes in Western music: A, A#, B, C, C#, D, D#, E, F, F#, G, G#. You are given a preloaded dictionary with these 12 notes and one of the pitches that creates that note (starting at Concert A).

Now, given a pitch (in Hz), return the corresponding note. (All inputs will be valid notes).

getNote(440) = A
getNote(220) = A
getNote(880) = A
For reference, the notes dictionary looks like this:

const notesDictionary = {
440: "A",
466.16: "A#",
493.88: "B",
523.25: "C",
554.37: "C#", 
587.33: "D", 
622.25: "D#", 
659.25: "E", 
698.46: "F", 
739.99: "F#", 
783.99: "G", 
830.61: "G#"
}
Musicians: all pitches based on equal tempermanent, taken from here.
*/
function getNote(pitch) {
  while (pitch < 440) pitch *= 2;
  while (pitch > 830.61) pitch /= 2;
  return notesDictionary[pitch];
}
