import Genetic from 'genetic-js';

export class UIEvolution {
  constructor() {
    this.genetic = Genetic.create();
    this.configure();
  }

  configure() {
    this.genetic.optimize = Genetic.Optimize.Maximize;
    this.genetic.select1 = Genetic.Select1.Tournament2;
    this.genetic.select2 = Genetic.Select2.FittestRandom;
    
    this.genetic.seed = () => ({
      color: [Math.random(), Math.random(), Math.random()],
      layout: Math.random(),
      animation: Math.random()
    });

    this.genetic.mutate = (dna) => ({
      color: dna.color.map(c => this.mutateGene(c)),
      layout: this.mutateGene(dna.layout),
      animation: this.mutateGene(dna.animation)
    });

    this.genetic.fitness = dna => dna.engagement * dna.emotionMatch;
    
    this.genetic.notification = (pop, generation, stats) => {
      console.log(`Generation ${generation} - Best Fitness: ${stats.maximum}`);
    };
  }

  startEvolutionCycle() {
    this.genetic.evolve({
      iterations: 100,
      size: 50,
      crossover: 0.3,
      mutation: 0.2
    });
  }

  mutateGene(value) {
    return Math.max(0, Math.min(1, value + (Math.random() * 0.1 - 0.05)));
  }
}
