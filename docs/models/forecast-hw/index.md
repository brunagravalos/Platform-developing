---
title: Data-Driven Seasonal Forecasts of European Heatwaves
sidebar_label: Overview
---


**Authors:** Stefano Materia, Martin Jung, Lluís Palma , Amanda Duarte, Ullrich Weber, Margarida
Samso-Cabré, Pere Bancells, Markus G. Donat.

**Links:** [Original Paper](https://www2.cloud.editorialmanager.com/aies/download.aspx?id=308962&guid=de3bcf4e-f431-4562-84bf-00019373e3a8&scheme=1) | [GitHub Repository]( ) | [Datset for download]()  

---




### Scientific Objective

While artificial intelligence has significantly improved short-term weather forecasting, long-range predictions of climate extremes remain a complex challenge. This model addresses that gap by forecasting European heatwaves at seasonal timescales (months in advance) using machine learning techniques.

The model leverages a combination of localized and global predictors—specifically land surface states, ocean temperatures, sea ice concentrations, and atmospheric CO2 levels—to estimate two distinct heatwave indices:

* **Number of Extremely Hot Days (Tx90n):** The total number of days in a season where the maximum temperature exceeds the smoothed 90th percentile of the daily maximum temperature (calculated over a historical reference period).
* **Heatwave Propensity Index (HWP):** A composite index representing a season's overall vulnerability to heatwaves. It integrates the frequency, intensity, and duration of heat events into a single metric.



### Methodology: The Machine Learning Architecture

The model's architecture is designed to sift through different climate data to find the most predictive signals. It achieves this using a two-part system:

1.  **Feature Selection (GHGA):** We utilize a **Guided Hybrid Genetic Algorithm (GHGA)** to select the most relevant predictors. This algorithm uses a genetic algorithm as its global search strategy to avoid premature convergence, while simultaneously performing local search operations to speed up the process. 
2.  **Prediction (Random Forest):** The GHGA is wrapped around a **Random Forest (RF)** regressor, which acts as the base learner. The RF consists of 200 decision trees generated via bootstrap sampling. 


During training, the system seeks to minimize a specific cost function: the Mean Squared Error (MSE) calculated from the samples omitted during the bootstrap process (out-of-bag samples). The GHGA runs separately for the HWP and Tx90n indices. Ultimately, the system selects an ensemble of "best models" whose specific combination of predictors yields the lowest MSE.

### Explainability (XAI)

To ensure our data-driven forecasts are transparent and interpretable, the importance of each predictor is quantified using **SHAP (SHapley Additive exPlanations) values**. 

* **Positive SHAP values** indicate that a specific climate feature (e.g., a regional sea surface temperature anomaly) increases the predicted heatwave index relative to the baseline.
* **Negative SHAP values** indicate a decrease in the prediction.
* **Magnitude** reflects the overall strength of that feature’s influence on the forecast.



### Scope and Experimental Design

The model is trained on ERA5 and ERA5-Land reanalysis datasets spanning from 1950 to 2022. Forecasts are generated for **ten distinct European regions**, grouped according to their shared climate characteristics. 

Each of the ten regions is tested independently across the four main meteorological seasons: 
* Spring (MAM)
* Summer (JJA)
* Autumn (SON)
* Winter (DJF)

This results in **40 parallel experiments**, producing 40 highly specialized models (one for every region-season combination). The data domain and the ten specific European target regions can be seen below:

![Large-scale data domain and locations selected for the local-scale data in the prediction target](/img/forecast-regions.png)
