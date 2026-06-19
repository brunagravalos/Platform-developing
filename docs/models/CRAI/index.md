---
title: CRAI (Climate Reconstruction AI)
sidebar_label: Overview
---


**Authors:** [Étienne Plésiat](https://orcid.org/0000-0003-2725-9998), [Robert J. H. Dunn](orcid.org/0000-0003-2469-5989), [Markus Donat](https://orcid.org/0000-0002-0608-7288), [Christopher Kadow](https://orcid.org/0000-0001-6537-3690).

**Links:** [Original Paper](https://www.nature.com/articles/s41467-024-53464-2) | [GitHub Repository](https://github.com/FREVA-CLINT/climatereconstructionAI) | [Datset for download]()  

---

### Scientific Objective
To correctly assess and predict climate extremes in the upcoming years, it is important to examine historical datasets  of those. However, existing historical datasets derived from weather station observations are limited by missing data, particularly before the mid-20th century. Historically, these spatial gaps have been filled using traditional statistical interpolation methods, such as Inverse Distance Weighting (IDW) or Kriging. Unfortunately, these conventional methods struggle when data is scarce, often producing overly smoothed maps that fail to capture historical climate extreme events.  

The primary objective of this work is to uuse artificial intelligence to reconstruct a complete, gap-free observational record of European climate extremes (specifically warm and cold days and nights) spanning from 1901 to 2018. By leveraging transfer learning from complete Earth System Models, this AI-driven approach aims to surpass conventional statistical techniques to obtain accurate spatial trends and historical extreme events. Ultimately, providing this high-resolution, reconstructed dataset to the climate community will improve the characterization of climate extremes.

### Dataset and variables

### Methodology
The reconstruction is powered by CRAI (Climate Reconstruction AI), a deep-learning algorithm based on a U-Net architecture equipped with partial convolutional layers. Partial convolutions are explicitly chosen because they are highly suited for inpainting large, irregular regions of missing data.

    - *Transfer learning pipeline*: Because the target dataset (HadEX-CAM) has too many gaps to train on, CRAI is trained using the complete CMIP6 simulations. Masks representing historical missing data patterns from HadEX-CAM are overlaid onto the CMIP6 data to create artificial gaps.

    - *Training mechanics*: The neural network takes the masked maps and the missing value masks as inputs, propagating them through encoding and decoding layers. A mean-absolute-error loss function evaluates the reconstructed regions against the original, complete CMIP6 data. A rescaled sigmoid function ensures the final output values remain strictly between 0% and 100%.

    - *Ensemble generation*: To improve predictive accuracy and quantify uncertainty, 20 separate models with identical hyperparameters are trained for each extreme index. The final reconstruction is the average of these 20 predictions.


### Evaluation 

### Plots and analysis

