---
title: How to use
---

## 1. Installation

### Setup Repository
The project repository is hosted on GitLab at [this link](https://gitlab.earth.bsc.es/es/seasgen). To get started, clone the project and navigate into the directory:

```bash
git clone [https://gitlab.earth.bsc.es/es/seasgen.git](https://gitlab.earth.bsc.es/es/seasgen.git)
cd seasgen
```

### Environment Setup
You can set up your environment using `uv` (recommended for faster dependency resolution) or standard `pip`. 

**Option A: Using `uv` (Recommended)**
Execute the following commands in your terminal:
```bash
# Install uv (if not already installed)
command -v uv &> /dev/null || curl -LsSf [https://astral.sh/uv/install.sh](https://astral.sh/uv/install.sh) | sh

# Create a .venv local virtual environment (if it doesn't exist)
[ -d ".venv" ] || uv venv

# Install the repository dependencies
uv sync

# Activate the virtual environment
source .venv/bin/activate
```

**Option B: Using `pip`**
```bash
pip install .[all]
```

---

## 2. Configuration

Experiment parameters, datasets, and model architectures are controlled via YAML configuration files (e.g., `configs/your_experiment.yml`). There is a specific file, `paths.yml`, dedicated to configuring the different paths required. This way, to replicate an experiment, you only need to modify this file. `seasgen` relies on preprocessed climate data saved as Zarr stores. In [Data section](./data.md) there is a guide regarding how to obtain this datasets by using ESMValTool. You must link the output directories of your ESMValTool pipelines to the path variables at the `paths.yml` file.

### Variables to Modify

* **`global_cmip6_inputs_conf` / `targets_conf`:** Absolute paths to the CMIP6 training data (e.g., `.../inputs.zarr`).
* **`global_era5_inputs_conf` / `targets_conf`:** Absolute paths to the ERA5 observational data for testing/validation.
* **`outputs_dir`:** The directory where your trained models, logs, and plots will be saved.
* **`preprocessed_data_dir`:** The directory used for staging temporary or intermediate dataset files.

### Understanding the Config Blocks
Beyond the file paths, the YAML experiment files dictate the exact nature of the study:
* **Datasets (`dataset_cmip6_train`, `dataset_era5`, etc.):** Defines the variables used (`tas`, `pr`, `tos`), spatial domains (latitude/longitude bounds), the specific months targeted, and which climate model members are included.
* **Model (`model`):** Defines the neural network architecture (e.g., `vitcVAE`), embedding dimensions, input shapes, and residual blocks.
* **Trainer (`trainer`):** Sets hyperparameters including `batch_size`, learning rate (`lr`), `epochs`, loss terms, and dropout scheduling.
* **Verification (`verification`):** Specifies the statistical metrics computed against the ERA5 baseline during the testing phase.

---

## 3. Run Experiments

Training and validation are executed using the `run_experiment.py` script. 

**Single GPU / CPU:**
By default, experiments run on a single processing unit.
```bash
python run_experiment.py --conf_file=configs/YOUR_YAML_FILE.yml --nprocs=1
```

**Multi-GPU (Distributed Training):**
For distributed training, configure the `--nprocs` parameter to match the number of GPUs available on your single HPC node.
```bash
python run_experiment.py --conf_file=configs/YOUR_YAML_FILE.yml --nprocs=4
```

---

## 4. Plots and Analysis

Once the script completes the training and testing phases, `seasgen` automatically generates evaluation outputs. All results are saved in the `outputs_dir` specified in your YAML file.

Inside your output directory, you will find:
* **Model Checkpoints:** Saved `.pt` files of your trained models (e.g., `best_model.pt`, `final_model.pt`).
* **Loss Curves:** PNG images (e.g., `loss_curves_0.png`) showing the training and validation loss progression over your epochs.
* **Forecast Outputs:** `.nc` (NetCDF) files containing the generated hindcasts (`hcst`) alongside the matching observations (`obs`).
* **Verification Maps:** Geographic map plots displaying your specified verification metrics (like correlation or ROC scores) evaluated over the test periods.


