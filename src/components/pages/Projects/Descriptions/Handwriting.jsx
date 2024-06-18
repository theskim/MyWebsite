import Project from "../Project";
import { HandwritingImage } from "../../../../assets/ProjectImages";
import React from "react";

const Handwriting = () => {
  return (
    <Project
      title="Handwriting to Text Converter (CNN + GRU)"
      alt="Handwriting"
      skills="Python • PyTorch • Pandas • CNN + GRU • Deep Learning"
      image={HandwritingImage}
      link="https://youtu.be/ZADPbL7FWgE"
    >
      The project aimed to develop a deep-learning model capable of Optical
      Character Recognition (OCR) to transform handwritten text into digital
      format. This technology has potential applications in various fields
      including education, healthcare, and business. This would not only aid in
      understanding lecture materials but also enhance note-taking across
      different languages.
      <br />
      <br />
      Deep learning was chosen for its ability to process complex image data
      without the need for manual feature engineering. Unlike traditional
      methods, such as Hidden Markov Models, deep learning, particularly
      Recurrent Neural Network (RNN) based architectures, can consider larger
      contextual information making it more effective for the sequential nature
      of handwritten text.
      <br />
      <br />
      Existing technologies like Google Translate and Apple Pencil&apos;s
      handwriting recognition underscore the relevance of OCR. Our research also
      explored advanced techniques combining Convolutional Neural Networks
      (CNNs) and RNNs to enhance feature extraction and sequence processing.
      <br />
      <br />
      We utilized a combination of CNN for initial image processing and Gated
      Recurrent Units (GRUs) for sequence analysis, employing Connectionist
      Temporal Classification (CTC) loss for training the model. This
      architecture was selected to optimize both computational efficiency and
      performance.
      <br />
      <br />
      The IAM Handwriting Database was used to create a balanced training
      dataset to prevent biases related to word length. We ensured a rigorous
      splitting protocol for training, validation, and testing to maintain
      integrity and reliability in model evaluation.
      <br />
      <br />
      A ResNet152-based model served as our baseline to compare improvements.
      Our final model significantly outperformed the baseline (52% vs 29% test
      accuracy), demonstrating the effectiveness of our chosen architecture in
      handling real-world handwritten text.
      <br />
      <br />
      The project not only met but exceeded initial expectations in terms of
      accuracy and application readiness, marking a significant step forward in
      the practical use of OCR technologies in diverse real-world scenarios.
    </Project>
  );
};

export default Handwriting;
