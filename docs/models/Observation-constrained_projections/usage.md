---
title: How to use
---

## 1. Installation

### 1.1 Setup repository

The project repository is available in GitHub at this [link](https://github.com/klawa/EC4CDD_CMIPmodels/tree/v1.4). To get started, clone the project and navigate to the directory:
```
git clone https://github.com/klawa/EC4CDD_CMIPmodels.git
cd EC4CDD_CMIPmodels
```

### 1.2 Setup data

In this project the data source is in a separate link that needs to be accessed and downloaded through this [link](https://zenodo.org/records/11636527)

### 1.3 Environment Setup

This project uses `uv` for dependency management, configured via `pyproject.toml` and `uv.lock`.

**Core dependencies** (see `pyproject.toml` for the authoritative list):
- `xarray` — NetCDF/climatology data handling
- `numpy` — array operations
- `pandas` — tabular data (model stats, correlation tables)
- `scipy` — statistical tests (Anderson–Darling, KDE)
- `matplotlib` — all figure plotting
- `cartopy` — map projections


#### 1.3.1 IF VENV
This project uses `uv` for dependency management, configured via `pyproject.toml` and `uv.lock`.

1. **Install uv** (if not installed):
```bash
   curl -LsSf https://astral.sh/uv/install.sh | sh
```
   > **Note**: Restart your shell to ensure uv is in your PATH.

2. **Create a Local Virtual Environment:**
```
[ -d ".venv" ] || uv venv
```

3. **Init and sync Environment:** 

```bash
uv init
uv sync
```
   This reads `pyproject.toml` and `uv.lock`, creates `.venv` automatically if it doesn't exist, and installs the exact locked dependency versions.

3. **Activate the environment:**

```bash
   source .venv/bin/activate
```
   

#### 1.3.2 IF CONTAINER

## 2. Pipelines

### 2.1 Raw data visualization

This first analysis aims to visualyse and understand how observational data and models predictions CMIP5 and CMIP6 behave without the Emergent Constraint correction. 

**(a)**
- All observational data datasets are combined through nesting into a an array of dimensions (file, lat, lon)
- All LAD observations means are calculated to each latitude and longitude combination over the file dimension

**(b)**
- CMIP6 models past and future data for scenario SSP2-4.5 are compared to obtain the LAD improvement over the period for all latitude and longitude combinations

**(c)**
-  CMIP6 models past and future data for scenario SSP5-8.5 are compared to obtain the LAD improvement over the period for all latitude and longitude combinations

**(d)**
- 

*All model data is obtained by nesting the multiple files in the model folder usinf get_file fnction in useful_functions.py*
*The LAD difference is calculated by comparing past ad futures data through model name indexation so the name structure is a key factor for this pipeline to work*

### 2.2 Emergent Constraints (EC)

### 2.3 EC-corrected regional LAD projections

### 2.4 Link to physical mechanisms in CMIP6 models

---

## 3. Configuration

1. Any configuration management package ?
2. How is it configured ?
3. How the configuration yaml was built/composed ?

### 3.1 Key Attributes

1. What are the key config atributes ? (seed, percentile, numb of epochs, learning rate ...)


### 3.2 Detailed Configuration

1. list of variables (source + variable code)
2. list of time ranges (start - finish)
3. Specific strategies
4. Paths
5. Hyperparameters

---
