# Node Coronavirus
### This module is a wrapper of ExpDev07's coronavirus-tracker-api

## Getting Started

Install the package
```
npm install node-coronavirus
```

Import the package
```
const coronavirus = require('node-coronavirus');
```


## Examples

```
coronavirus.getLatest()
    .then(res => console.log(res));
```

```
coronavirus.getSources()
    .then(res => console.log(res));
```

```
coronavirus.getLocationById(0)
    .then(res => console.log(res));
```

```
coronavirus.getLocationByCountryCode("US")
    .then(res => console.log(res));
```

