/*
In a genetic algorithm, a population is a collection of candidates that may evolve toward a better solution.

We determine how close a chromosome is to a ideal solution by calculating its fitness.

You are given two parameters, the population containing all individuals and a function fitness that determines how close to the solution a chromosome is.

Your task is to return a collection containing an object with the chromosome and the calculated fitness.

[
  { chromosome: c, fitness: f },
  { chromosome: c, fitness: f },
  ...
]
Note: In C# you have a pre-loaded class ChromosomeWrap and you should return a collection of it instead.

public class ChromosomeWrap
{
    public string Chromosome { get; set; }
    public double Fitness { get; set; }
}
Note: In Python you have a pre-loaded namedtuple ChromosomeWrap and you should return a collection of it instead.

ChromosomeWrap = namedtuple("ChromosomeWrap", ["chromosome", "fitness"])
Note: In PHP you have to return an array of associative arrays instead:

// E.g.
array(
  array("chromosome" => $c, "fitness" => $f),
  array("chromosome" => $c, "fitness" => $f),
  // ... 
  array("chromosome" => $c, "fitness" => $f)
);
*/
const mapPopulationFit = (population, fitness) => {
  return population.map(v => {
    return { chromosome: v, fitness: fitness(v) };
  });
};
