/*
Description:
Write a function changeTime which increases or decreases given time. Input param is string in HH:MM format and delta is integer value -1 or 1 in minutes. Let see some examples:

changeTime('10:00', 1) //return '10:01'
changeTime('10:00', -1) //return '09:59'
changeTime('23:59', 1) //return '00:00'
changeTime('00:00', -1) //return '23:59'

*/
const changeTime = (input, delta) => {
    let [hours, minutes] = input.split(':'),
        milliseconds = 60 * 1000 * (60 * Number(hours) + Number(minutes) + delta)
    return new Date(milliseconds).toTimeString().substring(0, 5)
}
