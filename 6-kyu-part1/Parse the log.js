/*
Description:
You're a support engineer and you have to write a regex that captures the following information from our log files:

the date
the log level (ERROR, INFO or DEBUG),
the user
the main function
the sub function
the logged message
You asked your supervisor about the rules defining all the logs. He told you that: the sub function may or may not be here, if no sub-function return undefined, the log level can only be one of the 3 presented, the logged message contains any kind of character, all fields are separated by arbitrary spaces (but at least one). Unfortunately he's not exactly sure about the rest, "use your common sense, there is not trick" he said.

The regex should not match if the log doesn't follow above rules.

Examples
Matching logs
<DATE> <LOG LEVEL> [<USER>:<FUNCTION>(:<SUBFUNCTION>)] <MESSAGE>
2003-07-08 16:49:45,896 ERROR [user1:mainfunction:subfunction] We have a problem
2003-07-08 16:49:46,896 INFO [user1:mainfunction] We don't have a problem
Wrong logs
Invalid log level

2003-07-08 16:49:45,896 CRITICAL [user1:mainfunction:subfunction] We have a problem  
Invalid timestamp (no seconds/minutes)

2003-07-08 16:45,896 ERROR [user1:mainfunction:subfunction] We have a problem  
Invalid username (contains spaces)

2003-07-08 16:45:13,896 ERROR [best user ever:mainfunction:subfunction] We have a problem  
*/
var logparser = /^(\d{4}-\d\d-\d\d \d\d:\d\d:\d\d,\d\d\d)\s+(INFO|ERROR|DEBUG)\s+\[(\w+\d):(\w+):?(\w+)?\]\s+(.*)$/
