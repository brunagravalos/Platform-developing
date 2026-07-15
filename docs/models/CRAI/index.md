---
title: CRAI (Climate Reconstruction AI)
sidebar_label: Overview
---


**Authors:** [Étienne Plésiat](https://orcid.org/0000-0003-2725-9998), [Robert J. H. Dunn](https://orcid.org/0000-0003-2469-5989), [Markus Donat](https://orcid.org/0000-0002-0608-7288), [Christopher Kadow](https://orcid.org/0000-0001-6537-3690).

**Links:** [Original Paper](https://www.nature.com/articles/s41467-024-53464-2) | [Code Repository](https://github.com/FREVA-CLINT/climatereconstructionAI) | [Data repository](https://zenodo.org/records/13891336)

---

### Scientific Objective
To correctly assess and predict climate extremes in the upcoming years, it is important to examine historical datasets  of those. However, existing historical datasets derived from weather station observations are limited by missing data, particularly before the mid-20th century. Historically, these spatial gaps have been filled using traditional statistical interpolation methods, such as Inverse Distance Weighting (IDW) or Kriging. Unfortunately, these conventional methods struggle when data is scarce, often producing overly smoothed maps that fail to capture historical climate extreme events.  

The primary objective of this work is to use artificial intelligence to reconstruct a complete observational record of European climate extremes (specifically warm and cold days and nights) spanning from 1901 to 2018. By leveraging transfer learning from complete Earth System Models, this AI-driven approach aims to surpass conventional statistical techniques to obtain accurate spatial trends and historical extreme events. Ultimately, providing this high-resolution, reconstructed dataset to the climate community will improve the characterization of climate extremes.

### Dataset and variables
This model uses observational data from the **HadEX-CAM** dataset and historical climate simulations from the **CMIP6** archive. For evaluation and cross-validation, it also uses reanalysis data from **ERA5** and the **20th Century Reanalysis Version 3 (20CRv3)**.

The **HadEX-CAM** dataset is a non-interpolated, intermediate version of the global **HadEX3** dataset. It provides monthly observational data derived from weather station readings between 1901 and 2018. To train the artificial intelligence model to fill in historical gaps, it uses 45 historical forcing simulations from 8 Earth System Models within the **CMIP6** archive. 

Specifically, the model reconstructs four temperature-based extreme indices (ETCCDI indices):
* **TX90p**: Percentage of days when the daily maximum temperature is > 90th percentile (warm days).
* **TX10p**: Percentage of days when the daily maximum temperature is < 10th percentile (cool days).
* **TN90p**: Percentage of days when the daily minimum temperature is > 90th percentile (warm nights).
* **TN10p**: Percentage of days when the daily minimum temperature is < 10th percentile (cool nights).

The selected spatial domain for this study is the **European continent**, chosen due to its relatively dense historical measurements compared to other regions. Within this domain, specific regional trends and historical events are analyzed for **Northern Europe (NEU)**, **Western and Central Europe (WCE)**, and the **Mediterranean (MED)**.

### Methodology
The reconstruction is powered by CRAI (Climate Reconstruction AI), a deep-learning algorithm based on a U-Net architecture equipped with partial convolutional layers. Partial convolutions are chosen because they are suited for the task of filling regions of missing data.

    - *Transfer learning pipeline*: Because the target dataset (HadEX-CAM) has too many gaps to train on, CRAI is trained using the complete CMIP6 simulations. Masks representing historical missing data patterns from HadEX-CAM are overlaid onto the CMIP6 data to create artificial gaps.

    - *Training mechanics*: The neural network takes the masked maps and the missing value masks as inputs, propagating them through encoding and decoding layers. A mean-absolute-error loss function evaluates the reconstructed regions against the original, complete CMIP6 data. A rescaled sigmoid function ensures the final output values remain between 0% and 100%.

    - *Ensemble generation*: To improve predictive accuracy and quantify uncertainty, 20 separate models with the same hyperparameters are trained for each extreme index. The final reconstruction is the average of these 20 predictions.


### Evaluation 

The evaluation process produces an infilled climate dataset. More concretely, each evaluation process produces the `outputs` folder, which has the following content:
- `demo_gt.nc`: NetCDF corresponding to the original dataset.
- `demo_mask.nc`: mask corresponding to the missing values.
- `demo_image.nc`: original dataset with the mask of missing values applied.
- `demo_output.nc`: dataset where valid and missing values are being infilled.
- `demo_infilled.nc`: original dataset with the missing values replaced by the values from `demo_output.nc`.
- `demo_infilled.1_0.png`: plot of the first timestep of `demo_infilled.nc`.


