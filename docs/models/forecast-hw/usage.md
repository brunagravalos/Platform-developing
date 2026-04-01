---
title: How to use
---

## 1. Installation
### Setup Repository
The project repository is available in github at this link. To get started, clone the project and navigate to the directory:
```
git clone repository_url
cd repository_name
```

### Environment Setup

This project uses uv for dependency management.
1. **Install uv** (if not installed):
```
curl -LsSf https://astral.sh/uv/install.sh | sh
```
_Note: Restart your shell to ensure uv is in your PATH._

2. **Create a Local Virtual Environment:**
```
[ -d ".venv" ] || uv venv
```
3. **Init and sync Environment:** 
```
uv init
uv sync
```
4. **Activate venv**
```
source .venv/bin/activate
```

## 2. Feature Selection, Prediction & SHAP computing

The workflow for this project follows a pipeline designed to replicate the data-driven methodology from the associated paper. The process is divided into three distinct stages:

- **Data Loading:** Retrieves the combined climate dataset (containing both predictors and the target variable) for a specific season and region via the ClimateDataset class.

- **Feature Selection (GHGA):** Uses a Guided Hybrid Genetic Algorithm (GHGA) wrapped around a Random Forest (RF) base learner. It minimizes a cost function to select an ensemble of the best feature subsets (predictors).

- **SHAP Computing & Evaluation:** Uses tree-based SHAP explainers to compute feature importance scores across the ensemble of "good" models, outputting predictions, R-squared (R2) scores, and aggregated SHAP values to CSV files.

Full Pipeline Script (testsFS_2022_refactored.py)

This main script executes the entire lifecycle end-to-end. It utilizes Hydra, meaning you can modify its behavior via the command line without changing the source code.

Example SLURM Script for Parallelization:
```
#!/bin/bash
#SBATCH --job-name featsel
#SBATCH --time=01:00:00
#SBATCH --array=0-39

SEASONS=('is_MAM' 'is_JJA' 'is_SON' 'is_DJF')
REGIONS=('is_ceur' 'is_cmed' 'is_eeur' 'is_emea' 'is_emed' 'is_scan' 'is_ukbn' 'is_wceu' 'is_wmed' 'is_wsib')

SEASON_IDX=$((SLURM_ARRAY_TASK_ID / 10))

REGION_IDX=$((SLURM_ARRAY_TASK_ID % 10))

CURRENT_SEASON=${SEASONS[$SEASON_IDX]}
CURRENT_REGION=${REGIONS[$REGION_IDX]}

echo "Running task $SLURM_ARRAY_TASK_ID with season=$CURRENT_SEASON and region=$CURRENT_REGION"

SCRIPT_PATH="/path/to/main_script.py"

export UV_LINK_MODE=copy

uv run --no-sync python3 -u /gpfs/scratch/bsc32/bsc214253/featsel/main/testsFS_2022_refactored.py season=$CURRENT_SEASON region=$CURRENT_REGION
```
Note: This will run using the default inputs defined in conf/config.yaml. Specific file paths must be configured for your environment (see below).


## 3. Configuration
This project uses Hydra for configuration management. This strictly separates the code logic from experimental settings. You should not edit the Python code to change target regions; instead, use the configuration files or CLI overrides.

The main configuration entry point is conf/config.yaml.
### 1. Configuration Parameters

|Parameter |Description |	Example|
| :--- | :--- | :--- |
|`season`|	The meteorological season to forecast.	|`is_JJA`|
|`region`	|The European target region to evaluate.	|`is_wmed`|
|`input_path` |	Absolute path to the input CSV/data file containing predictors and targets.	|`/path/to/data.csv`|
|`output_dir` |	Directory where the output CSVs (SHAP values, predictions, selected features) will be saved.|`/path/to/results/`|


### 2. How to use (CLI Overrides)

Hydra allows you to override any config value directly from the command line.

Run for a specific season and region:

```
uv run python testsFS_2022_refactored.py season='is_DJF' region='is_scan'
```

Run with a custom input path and output directory:

```
uv run python testsFS_2022_refactored.py input_path="/new/path/data.csv" output_dir="./new_results"
```

## 4. Outputs & Visualization

The pipeline automatically generates several CSV files in your designated output_dir. These files capture the ensemble predictions and feature importance:

    - `[label]_FS_goodModels.csv`: Contains a boolean matrix of the features selected by the top-performing models in the GHGA ensemble.

    - `[label]_pred_shap_ensMean.csv`: Contains the ensemble mean predictions (ypred) and the mean SHAP values for each feature across the time series.

    - `[label]_pred_shap_ensStd.csv`: Contains the standard deviation of the predictions and SHAP values, useful for evaluating ensemble uncertainty.

    - `[label]_FI_shap_ens.csv & [label]_FS.csv`: Summarizes the overall Feature Importance (Mean Absolute SHAP) across the dataset, along with the out-of-bag R2 score indicating model performance.

### Analysis Notebooks

To reproduce the figures from the paper, the project provides a notebook.