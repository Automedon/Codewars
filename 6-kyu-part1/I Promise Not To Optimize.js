/*
Hide Kata Description
This kata is inspired by @Voile's anti-optimizer kata, so you might want to do that one first. In that kata, you task yourself to be as inefficient as possible, and delay returning the result of a function for at least 11 seconds (to fit into Codewars' 12-second timeout limit).

After you successfully implement your antiOptimize function, the second phase of your evil plot kicks into gear, and you deploy anti-optimized code everywhere in your production server. But the higher-ups are catching on! -- they demand that functions return their result as quickly as possible, or else you risk being fired.

You wallow in despair, unable to bring your dream of inefficiency to reality, but finally realize there's a way you can keep everything woefully inneficient, while still immediately returning values from functions -- Promises!

So now your task is to write the function antiOptimizeAsync, which takes a single parameter task (a function), and immediately returns a Promise that only resolves to the return value of task() at least 11 seconds (and at most 12 seconds) after antiOptimizeAsync is called.

As with Voile's kata, task will always be an arbitrary function that might run for any duration between 0 to 10 seconds.
*/

async function antiOptimizeAsync(task) {
    const promise = await new Promise((resolve) => setTimeout(resolve, 2000))
    return task()
}
