/*
Description:
Background
If you visit London and travel on the Tube, you might hear the announcer say, "Mind the gap!"

Usually this is to do with the gap between the train and the platform. Recently, another type of gap has started to appear on the overground trains. Train thieves have been stealing entire carriages from trains, leaving a gap in the sequence of carriage numbers. You have been asked to write software to detect the problem.

Task
You must implement a function that receives the sequence of carriages as a string of carriage letters and returns the number of missing carriages. The train carriages are initially lettered from 'A' onwards with no gaps. Several carriages may be missing, but the remaining carriages are in their original sequence order. The highest-lettered carriage can never be missing (because that is where the engine is). The number of carriages in a train can vary from 1 to 26 (i.e. 'A' to 'Z').

Examples
countMissingCarriages("ABC") should return 0 because all carriages are present.
countMissingCarriages("ABD") should return 1 because carriage C is missing.
countMissingCarriages("BCF") should return 3 because carriages A, D, and E are missing.
*/

const countMissingCarriages = s => s.slice(-1).charCodeAt() - s.length - 64;
