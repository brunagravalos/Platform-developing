---
title: How to use
---

CRAI (Climate Reconstruction AI) can be executed either via the Command Line Interface (CLI) or directly within a Python script. The workflow is divided into two main phases: Training a model on your data, and Evaluating (infilling) missing values using that trained model.

## Installation and setup

Ensure your environment has the required dependencies (PyTorch, xarray, dask, etc.). The easiest way to get started is by creating an Anaconda environment:
Bash

For standard use:
```
conda env create -f environment.yml
```
Or, if you are training on GPUs:
```
conda env create -f environment-cuda.yml
conda activate crai
pip install .
```

## Data preparation

CRAI expects your NetCDF (.nc) climate datasets to be organized into specific sub-directories based on what phase you are running:
- `data/` and `val/` directories are used during training.
- `test/` directory is used during evaluation.

Masks: Missing values are defined by mask files (1 for valid data, 0 for missing data). These must match the dimensions of your climate datasets. If you do not provide explicit mask files, CRAI can automatically extract them from the NaN values in your climate dataset.
Running the Software

You can trigger CRAI from the terminal or from within a Python script.

For training:

    - CLI: 
    ```
    crai-train [options]
    ```

    - Python: 
    ```
    from climatereconstructionai import train; 
    train()
    ```

For evaluation (Infilling):

    - CLI: 
    ```
    crai-evaluate [options]
    ```

   -  Python: 
   ```
   from climatereconstructionai import evaluate; 
   evaluate()
   ```

Because CRAI has many configuration options, typing them all in the terminal can be tedious. You can save all your parameters in a standard text file and load them at runtime using the `-f` or `--load-from-file` flag (e.g., `crai-train -f my_config.txt`).


mkdir -p ~/.cache/torch/hub/checkpoints/
wget https://download.pytorch.org/models/vgg16-397923af.pth -O ~/.cache/torch/hub/checkpoints/vgg16-397923af.pth


## Configuration guide

To help you configure your runs, the CLI arguments are broken down into logical categories below.

### 1. File paths

TO configure where lives the data, and where are the results saved:

    `--data-root-dir`: The main folder containing your data/, val/, and test/ folders.

    `--mask-dir`: Directory containing your explicit mask datasets.

    `--data-names` / `--mask-names`: Comma-separated lists of your NetCDF filenames.

    `--log-dir` / `--snapshot-dir`: Where TensorBoard logs and intermediate snapshot images are saved during training.

    `--evaluation-dirs`: (Evaluation only) Where the final infilled NetCDF files will be saved.

### 2. Hardware and performance

To configure how the computer should execute the task:

    `--device`: Choose between cuda (GPU) or cpu.

    `--multi-gpus`: Add this flag to distribute training across multiple available GPUs.

    `--batch-size`: Number of samples processed before the model updates (adjust based on your GPU memory).

    `--n-threads`: Number of CPU workers for loading data.

    `--lazy-load`: Crucial for massive datasets; loads data into memory only when needed rather than all at once.

### 3. Model architecture

How is the U-Net structured?

    `--encoding-layers` / `--pooling-layers`: Defines the depth of the neural network.

    `--conv-factor`: Sets the number of channels in the deepest layer of the network.

    `--attention`: Add this flag to enable the attention module, helping the model focus on specific spatial features.

    `--disable-skip-layers`: Removes skip connections in the U-Net (usually not recommended, but available for testing).

### 4. Training hyperparameters

How does the model learn?

    `--max-iter`: The maximum number of training steps.

    `--lr`: The learning rate (how aggressively the model updates its weights).

    `--loss-criterion`: Choose the mathematical function used to calculate errors (e.g., Mean Absolute Error of the hole region).

    `--early-stopping-patience`: Stops training automatically if the validation loss hasn't improved after this many checks, preventing overfitting.

    `--normalize-data`: Normalizes your input climate data to a mean of 0 and standard deviation of 1 before passing it to the network.

### 5. Evaluation and output

How should the final predictions be handled?

    `--model-dir` / `--model-names`: (Evaluation only) Points the software to the specific trained models you want to use for infilling.

    `--min-bounds` / `--max-bounds`: Forces the AI's output to stay within realistic physical limits (e.g., setting a max bound of 100 for a percentage index).

    `--partitions` / `--maxmem`: (Evaluation only) If your dataset is too large to evaluate at once, these options split the data along the time coordinate to prevent out-of-memory crashes.

    `--plot-results`: Automatically generates image plots of the reconstructed time indices for quick visual inspection.

## Infilling process

To help you understand the evaluation (infilling) process, CRAI includes a pre-configured demo. This example infills missing monthly global temperature anomalies from the HadCRUT4 dataset for two specific historical dates: September 1877 and August 1893.

Before running the demo, ensure you have installed climatereconstructionAI as detailed in the Installation section.

Directory Structure

Navigate to the demo folder in your repository. It contains:

    demo_args.txt: A text file containing all the pre-configured input arguments.

    outputs/: An empty directory where your final reconstructed files will be saved.

    images/: A directory containing pre-generated visual comparisons.

    ../data/test/: Contains the input climate dataset (tas_hadcrut_187709_189308.nc), which has a spatial resolution of 2.5º×5º (lat×lon).

Executing the Demo

Because the paths inside demo_args.txt are relative, you must run these commands from inside the demo directory.

Via CLI:
Bash

crai-evaluate --load-from-file demo_args.txt

Via Python:
Python

from climatereconstructionai import evaluate
evaluate("demo_args.txt")

Understanding the Outputs

Once the evaluation is complete, CRAI will generate 5 NetCDF (.nc) files and 1 PNG image inside the outputs/ folder. Here is exactly what each file represents:

    demo_gt.nc (Ground Truth): The original, raw dataset fed into the software.

    demo_mask.nc (The Masks): A binary file showing exactly where the missing values are located (0 for missing, 1 for valid).

    demo_image.nc (The Input): The demo_gt.nc dataset after the missing value masks have been applied (this is what the AI actually "sees").

    demo_output.nc (The Raw AI Output): The pure prediction from the neural network. This file contains AI-generated values for every grid point, overwriting even the valid historical data.

    demo_infilled.nc (The Final Product): The successfully reconstructed dataset. This is a hybrid file: it keeps the original valid measurements from demo_gt.nc and only uses the AI's predictions to fill in the missing holes.

    demo_infilled.1_0.png: A visual plot of the first timestep of your newly infilled dataset.

Visualization

You can visually verify the success of the AI infilling by comparing the original demo_gt.nc with the newly created demo_infilled.nc (for example, looking at the September 1877 timestep) to see how the U-Net seamlessly bridged the gaps in the historical data.