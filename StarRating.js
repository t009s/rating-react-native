import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import PropTypes from 'prop-types'

export default class StarRating extends Component {

  state = {
    value: 0
  }

  onPressStar = (star) => {
    if (this.state.value !== star) {
      this.setState({
        value: star
      }, () => {
        this.props.onPress(this.state.value)
      })
    } else {
      this.setState({
        value: 0
      }, () => {
        this.props.onPress(this.state.value)
      })
    }
  }

  render() {
    const { value } = this.state
    const { starCount, fillColor, color } = this.props
    const arr = []
    for (let i = 0; i < starCount; i++) {
      arr.push(i + 1)
    }
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        {arr.map((star) => {
          return (
            <TouchableOpacity key={star} onPress={() => this.onPressStar(star)}>
              <Icon name={value >= star ? 'star' : 'star-o'} size={50} color={value >= star ? fillColor : color} />
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }
}

StarRating.propTypes = {
  starCount: PropTypes.number,
  fillColor: PropTypes.string,
  color: PropTypes.string
}
StarRating.defaultProps = {
  starCount: 5,
  fillColor: 'yellow',
  color: 'black'
}

// handleStars = (stars) => {
//   this.setState({ stars }, () => { console.log(this.state.stars) });
// }

// <StarRating onPress={this.handleStars} />