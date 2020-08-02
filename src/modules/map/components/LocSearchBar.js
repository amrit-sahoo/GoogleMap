import React from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity, Keyboard } from 'react-native';
import { Header, Item, Input, Icon } from 'native-base';
import { getLocations, clearLocations } from '../actions';
import AddressList from './AddressList';


class LocSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.state = {
      value: '',
      isInputFocus: false
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      if (this.state.value.trim().length > 0) {
        this.getRelatedAdresses();
      }
    }

    if (this.state.isInputFocus && !this.state.value.length) {
      this.props.clearLocations();
    }
  }

  getRelatedAdresses = () => {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.props.getLocations(this.state.value);
    }, 20);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }


  render() {
    return(
      <View>
        <Header searchBar rounded>
          <Item>
            { this.state.isInputFocus ? (
              <TouchableOpacity onPress={() => {
                Keyboard.dismiss()
              }}>
                <Icon name="ios-arrow-back" />
              </TouchableOpacity>
            )
              :
              <Icon name="ios-search" />
            } 
            <Input
              editable
              onFocus={() => this.setState({ isInputFocus: true })}
              onBlur={() => this.setState({ isInputFocus: false })}
              placeholder="Search here"
              onChangeText={text => this.setState({ value: text })}
              value={this.state.value}
            />
          </Item>
        </Header>
        {
          this.state.isInputFocus && (
            <View style={{ height: '100%' }}>
              <AddressList />
            </View>
          )
        }
        
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getLocations: (params) => dispatch(getLocations(params)),
  clearLocations: () => dispatch(clearLocations())
});

export default connect(null, mapDispatchToProps)(LocSearchBar);