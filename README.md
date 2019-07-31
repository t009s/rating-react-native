# Rating React Native (rating-react-native)

This is a package for implementing simple star rating on components easily with functionality.

## Installation

Use the package manager npm to install rating-react-native.

```bash
npm install rating-react-native --save
```

## Usage

```python
import React, { Component } from 'react'
import StarRating from 'rating-react-native'

export default class App extends Component {
  
  state = {
    stars: 0,
  }

  handleStars = (stars) => {
    this.setState({ stars })    //get the rating
  }

  render() {
    return (
      <StarRating onPress={this.handleStars} />
    )
  }
}
```

## Props

| Property | Default | Description |
| --- | --- | --- |
| starCount | `5` | rendering number of stars |
| fillColor | `yellow` | color of filled stars or selected stars |
| color | `black` | color of unfilled stars or unselected stars |

## License
[MIT]