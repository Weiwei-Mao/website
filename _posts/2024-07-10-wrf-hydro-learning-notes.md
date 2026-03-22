---
title: "WRF-Hydro Model Learning Notes"
date: 2024-07-10
categories: blog
tags:
  - hydrological modeling
  - WRF-Hydro
  - learning notes
---

This post contains my learning notes on the WRF-Hydro modeling system, based on "The NCAR WRF-Hydro® Modeling System Technical Description, Version 5.2".

<!--more-->

# WRF-Hydro Learning Notes

## 1. Introduction

WRF-Hydro is not a single model but a modeling framework that couples various optional hydrological process representations together. It's written in Fortran 90.

### 1.1 Brief History

The WRF-Hydro system provides a way to couple hydrological model components with atmospheric models and other Earth system modeling architectures.

Originally called Noah-distributed (2003), it included:
- A distributed, 3D variably saturated surface and subsurface model
- Integration of terrain routing, channel and reservoir routing functions into the 1D Noah land surface model

The early model approach was described in Gochis and Chen (2003), where:
- The land surface model solved at coarse grids
- Terrain routing solved at fine grids
- Integrated through subgrid disaggregation-aggregation

### 1.2 Model Description

WRF-Hydro was developed to facilitate coupling of land surface water, groundwater, and channel water processes with atmospheric models.

**Key Features:**
- Switch-activated modules
- Coupling technology between climate models and hydrological models
- Can run bidirectionally coupled or standalone

**Physical Options:**
- 1D (vertical) land surface parameterization
- Surface overland flow routing
- Variably saturated subsurface flow
- Channel routing
- Reservoir operations
- Conceptual/empirical baseflow

**Currently Supported Land Surface Models:**
- Noah
- Noah-MP

## 2. Model Code and Configuration

### 2.1 Brief Code Overview

The `hydro.namelist` file is used to switch between different modules.

### 2.2 Driver Level Description

WRF-Hydro can be:
- Called by other models (e.g., WRF)
- Run standalone

Each new coupling requires basic setup and usually has a new folder. For example, code for coupling with WRF is in the `WRF_cpl/` folder.

### 2.3 Parallelization Strategy

WRF-Hydro uses a similar geographic domain decomposition and halo array passing structure as the WRF model. Communication between processors is handled by the MPI protocol.

### 2.4 Directory Structure

The top-level directory is `trunk/NDHMS`. Key directories include:

| Directory | Description |
|-----------|-------------|
| `arc/` | Macro files for compilation configuration |
| `CPL/` | Coupling interfaces for different models |
| `Land_models/` | Noah and Noah-MP land surface model drivers |
| `Routing/` | WRF-Hydro routing process modules |
| `template/` | Example namelist files and parameter tables |

## 3. Model Physics Description

### 3.1 Physics Overview

The model sequence is:

1. **Initialization**: Read static terrain data
2. **Forcing**: Read forcing data or receive from coupled model
3. **Land Surface**: Execute grid-column land surface model
4. **Disaggregation**: Decompose to high-resolution routing grids
5. **Subsurface Routing**: Execute if activated
6. **Surface Routing**: Execute if activated
7. **Base Flow**: Execute conceptual base flow model if activated
8. **Channel Routing**: Execute channel and reservoir routing
9. **Aggregation**: Aggregate results back to land surface grid
10. **Output**: Write results or return to coupled model

### 3.2 Land Model Description

**Noah Land Surface Model:**
- Community 1D land surface model
- Simulates soil moisture, soil temperature, snow depth, energy fluxes
- Four soil layers (0.1, 0.3, 0.6, and 1m)
- Originally developed at Oregon State University

## Key Components

### Subsurface Lateral Flow
- Calculated before overland flow routing
- Based on Wigmosta et al. (1994) methodology
- Quasi-3D flow including terrain effects

### Overland Flow
- Fully unsteady diffusion wave approach
- Based on Julien et al. (1995) CASC2D
- Considers backwater effects and reverse slope flow

### Channel and Reservoir Routing
- One-way process from land to channels
- Simple level pool routing for lakes and reservoirs

## System Requirements

- Developed for Linux
- Can be moved to VM or container
- Requires netCDF library
- Computationally intensive
- Small study areas (16 km²) can run on PC

## References

- Gochis, D., & Chen, F. (2003)
- Wigmosta, M. S., et al. (1994)
- Julien, P. Y., et al. (1995)
- Cosby, B. J., et al. (1984)

---

*These notes are based on the WRF-Hydro v5.2 Technical Documentation. For the most up-to-date information, please refer to the official NCAR documentation.*
