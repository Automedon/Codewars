/*
Description:
You have a group chat application, but who is online!?

You want to show your users which of their friends are online and available to chat!

Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

The input data has the following structure:

[{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 104
}]
The corresponding output should look as follows:

{
  online: ['David'],
  offline: ['Lucy'],
  away: ['Bob']
}
If for example, no users are online the output should look as follows:

{
  offline: ['Lucy'],
  away: ['Bob']
}
username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.

Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#).
*/
const whosOnline = friends => {
  const online = [];
  const offline = [];
  const away = [];
  friends.map(v =>
    v.status === "online" && v.lastActivity < 11
      ? online.push(v.username)
      : v.status === "offline"
      ? offline.push(v.username)
      : away.push(v.username)
  );
  if (online.length > 0 && offline.length > 0 && away.length > 0)
    return { online, offline, away };
  if (online.length > 0 && away.length > 0) return { online, away };
  if (online.length > 0 && offline.length > 0) return { online, offline };
  if (offline.length > 0 && away.length > 0) return { offline, away };
  return {};
};
