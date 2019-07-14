import React, { Component } from 'react';
import { LayoutAnimation, Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './Common/Index';
import * as actions from '../actions/Index'; 

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }
    renderDescription() {
        const { library, expanded } = this.props;
        if (expanded) {
            return (
                <CardSection>
                   <Text style={{ flex: 1, paddingLeft: 15 }} >{library.description}</Text>
                </CardSection>
            );
        }
    }
    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;
        return (
             <TouchableWithoutFeedback 
             onPress={() => this.props.selectLibrary(id)}
             >
                 <View>
                    <CardSection>
                    <Text style={titleStyle} >{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        ); 
    }
}
const styles = {                     
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
 };
const mapStatetoProps = (state, ownProps) => {
    const expanded = state.selectedLabraryId === ownProps.library.id;
    return { expanded };
};

export default connect(mapStatetoProps, actions)(ListItem);
