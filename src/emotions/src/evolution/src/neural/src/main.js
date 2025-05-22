import { EmotionEngine } from './emotions/engine.js';
import { UIEvolution } from './evolution/core.js';
import { NeuralTracker } from './neural/tracker.js';

class VelyntSystem {
  constructor() {
    this.emotionEngine = new EmotionEngine();
    this.uiEvolution = new UIEvolution();
    this.tracker = new NeuralTracker();
  }

  async initialize() {
    await this.emotionEngine.loadModels();
    await this.tracker.initialize();
    
    this.uiEvolution.startEvolutionCycle();
    this.emotionEngine.startAnalysis();
    
    document.addEventListener('emotion-change', (e) => {
      this.handleEmotionUpdate(e.detail);
    });
  }

  handleEmotionUpdate(emotion) {
    console.log('Detected emotion:', emotion);
    document.documentElement.style.setProperty('--primary-color', 
      this.getEmotionColor(emotion));
  }

  getEmotionColor(emotion) {
    const colors = {
      happy: '#4CAF50',
      sad: '#2196F3',
      angry: '#F44336',
      surprised: '#FFC107',
      neutral: '#9E9E9E'
    };
    return colors[emotion] || '#FFFFFF';
  }
}

// Initialize system
const system = new VelyntSystem();
system.initialize().catch(console.error);
