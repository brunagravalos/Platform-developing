---
title: Quantifying atmospheric and land drivers of hot temperature extremes 
sidebar_label: Overview
---

This repository (link) contains the implementation of the Explainable Artificial Intelligence (XAI) framework developed in the study: "Quantifying atmospheric and land drivers of hot temperature extremes through explainable Artificial Intelligence".  

### Scientific Objective

Different physical drivers play a central role in modulating the intensity and frequency of summer temperature extremes, yet quantifying their individual contributions remains a complex challenge. This project provides a diagnostic framework designed to disentangle the respective influences of three distinct components on boreal-summer heat extremes:  

    - Large-scale Atmospheric Circulation: (e.g., Geopotential height, Sea Level Pressure).
    - Land-Surface Conditions: (Soil moisture anomalies).
    - Anthropogenic Forcing: (Atmospheric CO2​ concentrations).

### Methodology

The framework relies on a Hybrid Deep Learning approach that combines data from ERA5 (atmosphere) and ERA5-Land (local conditions). The model treats extreme event detection as a binary classification task, where an "extreme" is defined as a daily maximum temperature exceeding the 90th percentile of the climatological distribution.  

The model architecture, referred to as the **CombinedModel**, consists of two parallel branches:  
    - **ConvNeXt (CNN)**: Processes spatial atmospheric fields (Geopotential at 500hPa/200hPa and MSLP) to capture synoptic-scale patterns. 
    - **Multi-Layer Perceptron (MLP)**: Processes local scalar variables (soil moisture at 3 depths and seasonal CO2​).  

### Explainability (XAI)

To move beyond black-box prediction, the framework employs SHapley Additive exPlanations (SHAP). Specifically, it uses GradientExplainer to attribute the model's predictions to specific input features. This allows for the quantification of:  
    - **Driver Dominance**: Determining whether an extreme event was driven primarily by atmospheric blocking or amplified by land-drying feedbacks.
    - **Spatial Patterns**: Identifying which specific geographical regions of the atmospheric fields contributed most to the event.   
    - **Long-term Trends**: Isolating the signal of anthropogenic forcing via CO2​ relevance.  

### Scope

The pipeline is configured to analyze six specific locations across Europe and North Africa, selected to represent different land-atmosphere coupling regimes (from water-limited to energy-limited):  
    - **Córdoba (Spain)**
    - **Marrakech (Morocco)**
    - **Lyon (France)**
    - **Belgrade (Serbia)**
    - **Hannover (Germany)**
    - **Stockholm (Sweden)**

