---
title: Observation-constrained projections reveal longer-than-expected dry spells
sidebar_label: Overview
---

**Authors:** [Irina Y. Petrova](https://orcid.org/0000-0002-9946-3771), [Diego G. Miralles](https://orcid.org/0000-0001-6186-5751), [Florent Brient](https://orcid.org/0000-0001-8485-4705), [Markus G. Donat](https://orcid.org/0000-0002-0608-7288), [Seung-Ki Min](https://orcid.org/0000-0002-6749-010X), [Yeon-Hee Kim](https://orcid.org/<refference_code>) & [Margot Bador](https://orcid.org/<refference_code>),

**Links:** [Original Paper](https://www.nature.com/articles/s41586-024-07887-y) | [Repository](https://github.com/klawa/EC4CDD_CMIPmodels/tree/v1.4)

---

### Scientific Objective
This study shows that the use of real observational data to constrain model projections using a method called Emergent Constraint (EC) can reduce the uncertanty in projections of a core drought indicator - the Longest Annual Dry spell (LAD). Through the use of EC, the climate coupled models - CMIP5 and CMIP6 - corrected projections reveal that the future increase in LAD will be 42-44% greater, on average, than what the "mid-range" or "high-end". Therefore implying that by the end of the century the global mean land-only LAD could be around 10 days longer than currently expected.

### Datasets 

This study uses 7 different quasi-global (50°S–50°N) daily-precipitation observational datasets to build the emergent constraint, the first six of them collected from [FROGS Database](https://frogs.ipsl.fr/):
1. [GPCP - Global Precipitation Climatology Project](https://www.ncei.noaa.gov/products/global-precipitation-climatology-project)
2. [GPCC - Global Precipitation Climatology Centre](https://psl.noaa.gov/data/gridded/data.gpcc.html)
3. [PERSIANN Climate Data Record (CDR) ](https://www.ncei.noaa.gov/products/climate-data-records/precipitation-persiann)
4. [Global Satellite Mapping of Precipitation (GSMaP) - gauge-corrected](https://sharaku.eorc.jaxa.jp/GSMaP/)
5. [REGEN-AllStation / REGENAllSat](https://zenodo.org/records/4922160)
6. [TRMM–CMORPH](https://climatedataguide.ucar.edu/climate-data/cmorph-cpc-morphing-technique-high-resolution-precipitation-60s-60n)
7. [CPC (NOAA unified gauge-based analysis)](https://psl.noaa.gov/data/gridded/data.cpc.globalprecip.html)

The climate data models used were:
1. [CMIP5 LAD (raw data)](https://climate-modelling.canada.ca/climatemodeldata/climdex/)
2. CMIP6 LAD - request from the corresponding authors

All the data required for reproduction is available at [DATA_4_github - Zenodo](https://zenodo.org/records/11636527)

### Variables
The variable focused in this study is **Longest Annual Dry spell (LAD)**, which is calculated as the maximum annual number of consecutive dry days (CDD), following the definition of the Expert Team on Climate Change Detection and Indices (ETCCDI), where a dry day is defined as a day with total rainfall below 1 mm; the 1 mm threshold is a commonly accepted limit to classify days as dry or wet, and it is routinely used in the global climate-extremes data sets, such as HadEX.

**Precipitation (kg m-2 s-1)** - Raw variable used as criteria to deffine a "dry day" - precipitation < 1mm - and calculate LAD.

**Longest Annual Dry spell (LAD)** - Maximum number of consecutive "dry days" in a year, in which the precipitation did not surpass 1mm, calculated using CLIMPACT software. 

**the historical LAD is not allowed to exceed 300 days to exclude hyper-arid regions.*

Other 15 suplementary variables were also selected to obtain a broader hydro-climatic variable set specifically to explain the divergence they'd already detected:
- Moisture in upper portion of soil column (kg m⁻²) 
- Total soil moisture content (kg m⁻²)
- Surface upward latent heat flux (W m⁻²)
- Surface upward sensible heat flux (W m⁻²)
- Net evaporation (kg m⁻² s⁻¹)
- Leaf area index (dimensionless)
- Surface downwelling shortwave radiation (W m⁻²)
- Relative humidity (%)
- Specific humidity (dimensionless)
- Water vapour path (kg m⁻²)
- Total cloud cover percentage (%)
- Condensed water path (kg m⁻²)
- Convective precipitation (kg m⁻² s⁻¹)
- Geopotential height (m)
- Near-surface air temperature (K)


### Period
- Observational/historical LAD climatology: **1998–2018** (common period of availability across the seven observational datasets).
- CMIP6 historical LAD: **1998–2014** (end of the historical runs).
- CMIP5 present-day LAD: end of historical run blended with the start of RCP8.5 (historical simulations end in 2005).
- Future LAD climatology: **2080–2100**, compared against the historical baseline to compute 21st-century LAD change.




### Methodology

The authors first compiled data from two independent multi-model ensembles, CMIP5 and CMIP6. For each model, historical and future LAD climatologies were calculated using the CLIMPACT software, following the ETCCDI definition of consecutive dry days. The historical LAD climatology of each model (Xi) was then used to compute the corresponding future LAD change (Yi), defined as the difference between the future and historical LAD climatologies for that model.

Xᵢ = mean(LAD_i_hist)

where `LAD_i_hist` is the longest annual dry spell simulated by model *i*, averaged over the historical reference period (1998–2018 for CMIP6; a blended historical/RCP8.5 period for CMIP5).

Yᵢ = X(LAD_i_fut) − Xᵢ

where `LAD_i_fut` is model *i*'s LAD climatology over the future period (2080–2100), under a given emissions scenario (e.g., SSP2-4.5 or SSP5-8.5).


The strength and validity of the relationship between Xi and Yi across the model ensemble was assessed using Spearman's rank correlation coefficient (R). A correlation was considered statistically significant, and therefore suitable for use as an Emergent Constraint (EC), when R ≥ 0.4 and p < 0.05. Under this criterion, a linear regression model was fitted across the ensemble, expressed as Yi = a·Xi + b, describing the future change in LAD (in days) as a function of each model's historical LAD value. The uncorrected, raw ensemble-mean value of Yi across all models was also retained, to serve as a baseline for later comparison against the EC-corrected estimate.

Yᵢ = a × Xᵢ + b

Ȳ = (1/N) × Σ Yᵢ    for i = 1 to N

Observed historical LAD values were independently obtained from seven observational precipitation datasets, six of which were processed using CLIMPACT, with the seventh (the merged TRMM–CMORPH product) derived separately using dedicated Python-based processing. The ensemble mean of these seven observational estimates (Xobs) was calculated and used as the input to the fitted EC regression equation. Substituting Xobs into the EC equation yielded the EC-corrected estimate of future global LAD change. 

X_obs = (1/7) × Σ LAD_k_obs    for k = 1 to 7

where `LAD_k_obs` is the historical LAD climatology derived from the *k*-th observational dataset (k = 1, ..., 7), computed over the same period and domain as Xᵢ.


Finally, the percentage difference between the raw ensemble-mean projection (Yi) and the EC-corrected projection was calculated, representing the magnitude of correction introduced by constraining the model ensemble with observational data.

Δ% = [(Y_corrected − Ȳ) / Ȳ] × 100


### Evaluation

