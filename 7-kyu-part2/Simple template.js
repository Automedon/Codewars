/*
Description:
Implement function createTemplate which takes string with tags wrapped in {{brackets}} as input and returns closure, which can fill string with data (flat object, where keys are tag names).

let personTmpl = createTemplate("{{name}} likes {{animalType}}");
personTmpl({ name: "John", animalType: "dogs" }); // John likes dogs
or in Clojure:

((template "{{name}} likes {{animalType}}") {:name "John" :animalType "dogs"}) ;; John likes dogs
or Python:

template = create_template("{{name}} likes {{animalType}}")
template(name="John", animalType="dogs") # John likes dogs
or Ruby:

template = Template.new("{{name}} likes {{animal_type}}")
template.render(name: "John", animal_type: "dogs")
When key doesn't exist in the map, put there empty string.
*/
const createTemplate = template => {
  return vars => template.replace(/{{(\w+)}}/g, (m, v) => vars[v] || "");
};
