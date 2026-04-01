---
title: Data
---

### 1. Data Description

The study utilizes a combination of atmospheric reanalysis data, land-surface data, and observational CO2 measurements. These inputs are categorized into **large-scale** (atmospheric circulation) and **local-scale** (site-specific land variables) data.

#### 1.1 Large-Scale Atmospheric Data (ERA5)

The data used is from **ERA5** (Soci et al., 2024), the fifth-generation atmospheric reanalysis from the European Center for Medium-Range Weather Forecasts (ECMWF). ERA5 provides globally complete, gridded data from 1940 to the present. Despite inherent uncertainties across datasets, the long-term availability and spatial completeness of reanalyses make them ideal for studying climate trends, variability, and extreme events (Donat et al., 2014).

For this study, daily atmospheric circulation fields are used to represent the large-scale state of the atmosphere. The specific variables selected are:

* **Geopotential at 500 hPa** 
* **Geopotential at 200 hPa**
* **Sea Level Pressure**

#### 1.2 Local-Scale Land Surface Data (ERA5-Land)

For land-surface variables, the **ERA5-Land** dataset is employed. With a 9 km horizontal resolution, it offers a superior representation of land-surface processes compared to standard ERA5 (Muñoz-Sabater et al., 2021). The used following daily variables:

* **Maximum 2-meter Temperature:** Used to define the target events (hot extremes).
* **Soil Moisture:** Used as predictors, taken at three distinct depth levels (swvl1, swvl2, and swvl3). 

#### 1.3 Climate Signal (CO2)

To account for the long-term trend of climate change, seasonal atmospheric  concentrations are included. The measurements used are from the **NOAA Mauna Loa Observatory** in Hawaii. These concentrations are calculated as a seasonal mean, providing a constant value for each summer to represent the background climate signal.

---

### 2. Input Variables and File Structure

The data is organized into two distinct categories: **large-scale data** (single files covering the entire domain) and **local-scale data** (separate files for each specific site).

| Variable Type | File Name | Description |
| --- | --- | --- |
| **Large-Scale** | `file_g500` | Geopotential Height at 500 hPa anomalies (predictor). |
| **Large-Scale** | `file_g200` | Geopotential Height at 200 hPa anomalies (predictor). |
| **Large-Scale** | `file_psl` | Mean Sea Level Pressure anomalies (predictor). |
| **Climate Signal** | `file_CO2` | Daily  data, used for climate signal adjustment and detrending. |
| **Local-Scale** | `file_local_scale` | Site-specific ERA5-Land files containing local soil variables and binary extreme event labels (e.g., `90p_cordoba`). |

---

### 3. Dataset Reproducibility (Data Pipeline)

While the original raw data was sourced from the ECMWF and NOAA, the specific dataset used in this project was processed within the Barcelona Supercomputing Center (BSC) infrastructure. The processing pipeline is as follows:

1. **Source:** Raw data was retrieved from the **esarchive** (BSC's internal data archive).
2. **Preprocessing:** Data was processed using the custom notebooks provided in the source code (`prepare_inputs_models` > `custom_datasets.py`). This stage handles the extraction and formatting of variables described above.
3. **Restructuring:** The processed data was restructured and converted into the **Zarr** format for efficient storage and access, using the `utils.py` script.

**Summary of flow:**

> Copernicus/NOAA > esarchive > processing notebooks > `utils.py` > Final Zarr Dataset

---

### 4. How to Obtain the Dataset

The final, preprocessed dataset is hosted on **Zenodo** to ensure reproducibility. To reproduce the paper's results:

1. **Download** the dataset from the Zenodo repository.
2. **Decompress** the data using and save in the desired directory.
3. **Configure:** Provide the path of the extracted data as the `base_folder` parameter in the `paths` configuration file. The dataloader is designed to recognize the internal Zarr structure automatically.

Alternatively, it is possible to dowload it using the following command lines from terminal:

```
# Navigate to the desired directory in which you will want to store the data
cd path/to/dir

# Download the data (~13 GB total)
wget https://zenodo.org/records/16921670/files/Tropical_Pacific_SSTA_LIM.nc

# Return to repository root
cd ../..

# Verify files
ls -lh data/raw/
```
### Zarr Internal Structure

For users interested in the file hierarchy, the Zarr store is structured as follows:

```text
climate_data_new.zarr/
└── era5/
|   ├── g500/
|   ├── g200/
|   └── psl/
└── aux/
|   └── CO2/
└── era5land/
    ├── site_01/
    └── percentage_1 (e.g., 90p)/
        └── site (e.g., cordoba)/
```
