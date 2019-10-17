/*
Description:
The business has been suffering for years under the watch of Homie the Clown. Every time there is a push to production it requires 500 hands-on deck, a massive manual process, and the fire department is on stand-by along with Fire Marshall Bill the king of manual configuration management. He is called a Fire Marshall because production pushes often burst into flames and rollbacks are a hazard.

The business demands change and as such has hired a new leader who wants to convert it all to DevOps…..there is a new Sheriff in town.

The Sheriff's first order of business is to build a DevOps team. He likes Microservices, Cloud, Open-Source, and wants to push to production 9500 times per day without even pressing a button, beautiful seamless immutable infrastructure properly baked in the Continuous Delivery oven is the goal.

The only problem is Homie the Clown along with Legacy Pete are grandfathered in and union, they started out in the era of green screens and punch cards and are set in their ways. They are not paid by an outcome but instead are measured by the amount of infrastructure under management and total staff headcount.

The Sheriff has hired a new team of DevOps Engineers. They advocate Open Source, Cloud, and never doing a manual task more than one time. They believe Operations to be a first class citizen with Development and are preparing to shake things up within the company.

Since Legacy is not going away, yet, the Sheriff's job is to get everyone to cooperate so DevOps and the Cloud will be standard. The New Kids on the Block have just started work and are looking to build common services with Legacy Pete and Homie the Clown.

Every Time the NKOTB propose a DevOps pattern…… 

Homie stands up and says "Homie don't Play that!"

IE: 

NKOTB Say -> "We need Cloud now!"

Homie Say -> "Cloud! Homie dont play that!"

NKOTB Say -> "We need Automation now!"

Homie Say -> "Automation! Homie dont play that!"

NKOTB Say -> "We need Microservices now!"

Homie Say -> "Microservices! Homie dont play that!"
Task

You will receive a two-dimensional array with strings made of the NKOTB’s requirements. Each Array contains a domain of DevOps patterns that each of the 5 NKOTB are asking for.

The requirements array will ALWAYS have five sub-arrays structured like this:

requirements[0] = monitoring
requirements[1] = automation
requirements[2] = deployment
requirements[3] = cloud
requirements[4] = microservices

Each sub-array will always contain strings in the same format

The strings will always be in the following format(case insensitive):

"We need Microservices now!"

Your job is to create the response from Homie the Clown following the pattern above. 

Then return the responses in an array.

"Microservices! Homie dont play that!"
The first word of the response is always Capitalized and all other letters are lowercase regardless of how you recieve them, the rest of the sentence is always in the format Homie dont play that!. Strings should be returned in the same order.

In addition to the responses create a count of each domain and return it as the last element of the return array in the following format.

'6 monitoring objections, 4 automation, 6 deployment pipeline, 6 cloud, and 3 microservices.'
*/
function nkotbVsHomie(requirements) {
  let r = requirements.map(v => v.length);
  let a = [].concat(
    ...requirements.map(v => v.map(x => x.split` `[2].toLowerCase()))
  );
  let str1 = `${r[0]} monitoring objections, ${r[1]} automation, ${
    r[2]
  } deployment pipeline, ${r[3]} cloud, and ${r[4]} microservices.`;
  return a
    .map(
      v =>
        v.slice(0, 1).toUpperCase() +
        v.slice(1).toLowerCase() +
        "! Homie dont play that!"
    )
    .concat(str1);
}
