/*
Description:
You are a composer who just wrote an awesome piece of music. Now it's time to present it to a band that will perform your piece, but there's a problem! The singers vocal range doesn't stretch as your piece requires, and you have to transpose the whole piece.

#Your task: Given a list of notes (represented as strings) and an interval, output a list of transposed notes in sharp notation.

Input notes may be represented both in flat and sharp notations (more on that below).

For this kata, assume that input is always valid and the song is at least 1 note long.

Assume that interval is an integer between -12 and 12.

#Short intro to musical notation: Transposing a single note means shifting its value by a certain interval.

The notes are as following:

A, A#, B, C, C#, D, D#, E, F, F#, G, G#.
This is using sharp notation, where '#' after a note means that it is one step higher than the note. So A# is one step higher than A.

An alternative to sharp notation is the flat notation:

A, Bb, B, C, Db, D, Eb, E, F, Gb, G, Ab.
The 'b' after a note means that it is one step lower than the note.

#Examples:

['G'] -> 5 steps -> ['C']
['Db'] -> -4 steps -> ['A#']
['E', 'F'] -> 1 step -> ['F', 'F#']
*/
function transpose(song, interval){
  var sharp = 'A,A#,B,C,C#,D,D#,E,F,F#,G,G#'.split(',');
  var flat  = 'A,Bb,B,C,Db,D,Eb,E,F,Gb,G,Ab'.split(',');
  return song.map(note => sharp[(Math.max(flat.indexOf(note), sharp.indexOf(note)) + interval + 12) % 12]);
}
