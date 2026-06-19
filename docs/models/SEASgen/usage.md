---
title: How to use
---

## 1. Installation
### Setup Repository
The project repository is available in GitLab at this [link](https://gitlab.earth.bsc.es/es/seasgen). To get started, clone the project and navigate to the directory:
```
git clone https://gitlab.earth.bsc.es/es/seasgen.git
cd seasgen
```

### Environment Setup

Inside the repository, you can use uv to do the installation of the necessary dependecies. To do so, execute the following commands from terminal:


```
# install uv (if not already installed)
command -v uv &> /dev/null || curl -LsSf https://astral.sh/uv/install.sh | sh
# create a .venv local virtual environment (if it doesn't exist)
[ -d ".venv" ] || uv venv
# install the repo dependencies
uv sync
# activate venv so that `python` uses the project's venv instead of system python
source .venv/bin/activate

```

Alternatively, it can be installed using pip:

```
pip install .[all]
```

## 2. Configuration
- Explain how to link it with the data preprocessing bit (esmValTool), specially how to configure the paths.
- EXplain the files to modify
- Explain the different config files available, what they do which paths they use

## 3. Run experiments

- Explain how to run.
- EXplain the output that will be generated

## 4. Plots and analysis

- Or explain here the ouput better.

