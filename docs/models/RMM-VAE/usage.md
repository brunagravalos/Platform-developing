---
title: How to use
---

## 1. Installation

### Environment

To run the notebooks, we provide a `.sif` image with Apptainer. The first time you use it, you'll need to mount it and bind it to a local folder.

1. Navigate to the folder containing the `.sif` image (for example, your Downloads folder):

```bash
   cd ~/Downloads
```

2. Run the container, binding your local project folder to `/notebooks` inside the image:

```bash
   apptainer run --bind /home/bgravalo/Descargas/RMM-VAE:/notebooks rmm_env2.sif
```

3. Once the container starts, open the link it prints in your terminal to access the notebook interface.

> **Note:** adjust the paths above (`/home/bgravalo/Descargas/RMM-VAE` and `rmm_env2.sif`) to match where you've saved the project and the image on your own machine.

---

## 2. Configuration

### Configuring paths

Paths and constants used throughout the notebooks are set in a single `config.yaml` file. Before running anything, update this file to match your local folder structure.

```yaml
# config.yaml
paths:
  project_root: '/home/bgravalo/Descargas/RMM-VAE'
  data_path: '/home/bgravalo/Descargas/data_rmm'
  figs_path: '/home/bgravalo/Descargas/RMM-VAE/figures'

constants:
  target_variable_name: 'var167'
  g0: 9.80665
  extended_summer_months: [6, 7, 8]
```

**Field reference:**

| Field | Description |
|---|---|
| `project_root` | Root folder of the project |
| `data_path` | Folder containing the input data |
| `figs_path` | Folder where generated figures will be saved |
| `target_variable_name` | Name of the target variable used in the model |
| `g0` | Gravitational constant (m/s²) |
| `extended_summer_months` | Months considered as "extended summer" (June, July, August) |

> **Note:** make sure the paths in `config.yaml` point to the location in which you saved the folders on your machine before running the notebook. The `config.yml` file is in the source directory of the project.