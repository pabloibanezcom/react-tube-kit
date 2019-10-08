# React Tube Kit

A collection of components and utils for React.

This package is bootstraped using [create-react-app](https://github.com/facebook/create-react-app) and is using [Bootstrap](https://getbootstrap.com) as base.

## Demo

[Demo Page](https://www.mydemo.com)

## Installation

```bash
npm install react-tube-kit --save
```

## Usage

### Styles - Option A: Loading CSS

Add css import to main css/scss in your application (index.css i.e.)

```
@import "~react-tube-kit/dist/css/main.min.css";
```

### Styles - Option B: Loading SCSS

Add scss import main scss in your application (index.scss i.e.)

```
@import "~react-tube-kit/dist/scss/main.scss";
```

This option allows to override default scss variables:

```
// Fonts

$font-primary: 'Circular Airbnb';

// Colors

$body-color: #484848
$primary-color: #e6c300;
$secondary-color: #002c41;
$alternative-color: #00bcd4;
$primary-alt-color: $secondary-color;
$primary-outline-color: $secondary-color;
$secondary-alt-color: $white-color;
$secondary-outline-color: $secondary-color;
$outline-font-color: $secondary-color;

```

Create a scss file contaning the variables to override and import it just before package main one.

```
@import "./_variables-overrides.scss";
@import "~react-tube-kit/dist/scss/main.scss";
```

### Components

Import desired component from package and instantiate it as usual.

```
import { Button } from 'react-tube-kit';

<Button text="Continue" />

```
