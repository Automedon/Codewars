function getName(args) {
  if (args.length == 0) {
    return arguments.callee.caller.name + ".";
  }
  return arguments.callee.caller.name + " " + args[0];
}

function Adam() {
  return getName(arguments);
}
function has() {
  return getName(arguments);
}
function a() {
  return getName(arguments);
}
function dog() {
  return getName(arguments);
}
function The() {
  return getName(arguments);
}
function name() {
  return getName(arguments);
}
function of() {
  return getName(arguments);
}
function the() {
  return getName(arguments);
}
function is() {
  return getName(arguments);
}
function also() {
  return getName(arguments);
}
