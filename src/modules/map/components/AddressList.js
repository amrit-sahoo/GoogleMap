import React from 'react';
import { Text, View, FlatList  } from 'react-native';
import { Icon } from 'native-base';
import { setCuurentLocation } from '../actions';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';

class AddresList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItem = (item) => {
    return (
      <TouchableOpacity onPress={() => this.props.setCuurentLocation(item.position)}>
        <View style={{ paddingHorizontal: 10, paddingVertical: 15, flexDirection: 'row', alignItems: 'center' }}>
          <Icon name='ios-location-outline' size={25} color='rgba(0,0,0,0.4)' />
          <Text numberOfLines={1} style={{ fontSize: 18, marginLeft: 20 }}>
            {item.poi.name}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    if (this.props.locations && this.props.locations.length) {
      return(
        <View style={{ flex: 1 }}>
          <FlatList
            keyExtractor={item => item}
            data={this.props.locations}
            ItemSeparatorComponent={() => <View style={{ height: 1, width: '100%', backgroundColor: '#ddd' }} />}
            renderItem={itemData => this.renderItem(itemData.item) }
          />
        </View>
      )
    }
    return null;
  }
}

const mapStateToProps = (state) => ({
  locations: state.locations.data,
})

const mapDispatchToProps = (dispatch) => ({
  setCuurentLocation: (loc) => dispatch(setCuurentLocation(loc))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddresList);