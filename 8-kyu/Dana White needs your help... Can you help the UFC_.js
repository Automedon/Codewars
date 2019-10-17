/*
Ring Ring... Ring Ring...

You: "Hello?"

Dana: "Hey! It's Dana White, President of the UFC! I've got an emergency... Can you help?"

You: "What?! Me?! I'm just an awesome developer, I know nothing about MMA.."

Dana: "It's Bruce Buffer, our ring announcer, he's caught a bad case of flu and can't attend tonight's main event. It's such short notice that we can't find another annoucer, so can you write some code that will do the annoucing for us?"

You: "Shiiiiiit! I guess so?!"

Dana: "Awesome! I will email you the brief"

Click...

Email From: dana@ufc.com

Subject: Annoucer Brief

Hey,

Thanks again for helping!

Please can you write a function that creates a fighter. This function will be our template for all the fighters fighting on tonight's card.

Each fighter has 4 key details: their name, weight, fighting style, and corner. These will be passed as arguments to the function.

You will need to create a 'profile' function within the fighter function that can be called. This will return a string that announces the fighter's corner, their name, their fighting style, then their weight.

For example: In the blue corner! We have Conor McGregor, a fighter specializing in striking, weighing in at 155lbs!

We are counting on you!

Thanks,

Dana White UFC President
*/
function fighter (name, weight, fightingStyle, corner) {
   return `In the ${corner} corner! We have ${name}, a fighter specializing in ${fightingStyle}, weighing in at ${weight}lbs!` 
}
