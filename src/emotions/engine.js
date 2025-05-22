import * as faceapi from 'face-api.js';

export class EmotionEngine {
  constructor() {
    this.currentEmotion = 'neutral';
  }

  async loadModels() {
    await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
    await faceapi.loadFaceExpressionModel('/models');
  }

  async startAnalysis() {
    const video = document.getElementById('emotion-feed');
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      video.srcObject = stream;
      await video.play();
      this.analyzeFrame(video);
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  }

  async analyzeFrame(video) {
    const canvas = faceapi.createCanvasFromMedia(video);
    document.body.append(canvas);
    
    const processFrame = async () => {
      const detections = await faceapi.detectAllFaces(
        video, 
        new faceapi.TinyFaceDetectorOptions()
      ).withFaceExpressions();

      if(detections[0]) {
        this.currentEmotion = this.getDominantEmotion(detections[0].expressions);
        document.dispatchEvent(new CustomEvent('emotion-change', {
          detail: this.currentEmotion
        }));
      }
      requestAnimationFrame(processFrame);
    };
    processFrame();
  }

  getDominantEmotion(expressions) {
    return Object.entries(expressions).reduce((a, b) => a[1] > b[1] ? a : b)[0];
  }
}
