---
title: WRF-Hydro Learning Notes
date: 2024-07-10
categories:
  - model
---

# WRF-Hydro Learning Notes

This note corresponds to the study material: The NCAR WRF-Hydro® Modeling System Technical Description, Version 5.2

## 1. Introduction

This document is a description of the physical parameterizations, numerical implementation, coding conventions, and software architecture of the NCAR (National Center for Atmospheric Research) Weather Research and Forecasting model (WRF) hydrological modeling system (WRF-Hydro).

WRF-Hydro is not a single model, but a model architecture that facilitates coupling multiple optional hydrological process representation methods together.

### 1.1 Brief History

WRF-Hydro provides a way to couple hydrological model components with atmospheric models and other Earth system modeling frameworks. Written in Fortran 90. The original version called Noah-distributed, containing a distributed, three-dimensional, variable-saturation land surface and groundwater model, 2003...

### 1.2 Model Description

WRF-Hydro is designed to enable improved simulation of land surface hydrology and energy states and fluxes at a fairly high spatial resolution (typically 1 km or less) using a variety of physics-based and conceptual approaches.

The main physical options of WRF-Hydro include:

- 1D (vertical) land surface parameterization
- Surface overland flow
- Variable saturation flow
- Channel routing
- Reservoir routing
- Conceptual/empirical baseflow

Currently, WRF-Hydro supports Noah and Noah-MP land surface models. The required climate forcing variables for the model...

## 2. Model Code and Configuration Description

### 2.1 Brief Code Overview

The hydro.namelist file is used to configure different modules.

### 2.2 Driver Level Description

WRF-Hydro can be called by other models (e.g., WRF) or run independently...

WRF-Hydro requires the NetCDF library.

### 2.3 Parallelization Strategy

WRF-Hydro's parallelization uses geographic domain decomposition and halo array passing structure similar to the WRF model. Information is passed between different processors using the MPI protocol.

### 2.4 Directory Structures

The top-level directory of the code is trunk/NDHMS...