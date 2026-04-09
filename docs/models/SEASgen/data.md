---
title: Data
---

### ERA5 data

This data needs to be downloaded from Copernicus Climate Datastore (https://cds.climate.copernicus.eu/). You first will need to create an account. It is recomendable that you save your credentials with the API key you can find by clicking in >Your profile and them scrolling down to API Key. TO do so, go to your terminal and execute the following commands:

```
nano ~/.cdsapirc
```
and copy the follwing there:
```
url: https://cds.climate.copernicus.eu/api
key: PUT-YOUR-API-KEY-HERE
```
Then, press control+O, enter, and control+X.

You will need the tool era5cli to do the download. You can install it via the following command:

```
pip install era5cli
```

Then, we will download the data in a temporal directory:

```
mkdir -p ~/era5_staging
cd ~/era5_staging

era5cli monthly --variables 2m_temperature sea_surface_temperature total_precipitation geopotential --startyear 1950 --endyear 2022 --format netcdf
```

Next you need to create a very concrete folder structure so `native6` will know where to find your data. You can create a directory for each variable needed in this project with the following commands, that also moves the data downloaded to the corredponding path.

```
# Define your master data directory (update this path as you wish)
mkdir esmvaltool_data
cd esmvaltool_data

# Create the exact CMIP6-style native tree
mkdir -p Tier3/ERA5/1/mon/tas
mkdir -p Tier3/ERA5/1/mon/tos
mkdir -p Tier3/ERA5/1/mon/pr
mkdir -p Tier3/ERA5/1/mon/zg

# Move the downloaded files from staging into their strict folders
mv ~/era5_staging/*2m_temperature*.nc Tier3/ERA5/1/mon/tas/
mv ~/era5_staging/*sea_surface_temperature*.nc Tier3/ERA5/1/mon/tos/
mv ~/era5_staging/*total_precipitation*.nc Tier3/ERA5/1/mon/pr/
mv ~/era5_staging/*geopotential*.nc Tier3/ERA5/1/mon/zg/
```


Now, install esmvaltool following the steps in the following guide: https://docs.esmvaltool.org/en/latest/quickstart/installation.html.

conda install -c conda-forge esmvalcore

### Author registration
ESMValTool uses strict provenance tracking to ensure recipe authors receive proper credit. Because this recipe uses a custom author tag (`palma_lluis`), your local ESMValTool installation will crash if it does not recognize the name.

Before running the recipe, you must add the author to your local reference configuration:

1. Open your terminal and find your ESMValTool installation path:
   `nano $(dirname $(which esmvaltool))/../lib/python3.*/site-packages/esmvaltool/config-references.yml`
2. Search for the `authors:` section.
3. Add this exact block to the alphabetical list:
  palma_lluis:
    name: Palma, Lluis
    institute: BSC, Spain
4. Save the file. You can now run the recipe!

### Clean data
Run the `clean.py` script. (Suggestion: You can use esmvaltool environment to run the script as it already has python and other tools configuired.)
**Note:** you will need to change the path to the directory in which you have saved the data, in this example that would be `esmvaltool_data`.


### Change paths
Open `config-user.yml` and change the following paths:

output_dir: **path/to/destination/directory**
auxiliary_data_dir: **path/to/auxiliary/directory**

`rootpath`:
  - `native6`: **here you need to specify the path in which you downloaded the data, in our exemple that would be path/to/esmvaltool_data**

