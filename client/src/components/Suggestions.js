import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import { getSpecific } from '../actions/shoeActions';
import PropTypes from 'prop-types';

class Suggestions extends Component {
    toggle = () => {
        if (this.props.shoe.showSuggestions) {
            return {display:'block'}
        }
        return {display:'none'}
    }

    handleClick = (id) => {
        this.props.getSpecific(id)
    }

    render() {
        const {shoes} = this.props.shoe;
        return(
            <Container style={this.toggle()}>
                <ListGroup className="mx-auto" style={{marginTop: '2rem'}}>
                    {shoes.map(({ display, _id }) => (
                        <ListGroupItem 
                            key={_id} 
                            style={{cursor:"pointer"}} 
                            onClick={this.handleClick.bind(this, _id)}
                            action
                        >{display}</ListGroupItem>
                    ))}
                </ListGroup>
            </Container>
        )
    }
}

Suggestions.propTypes = {
    shoe: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    shoe: state.shoe
})

export default connect(mapStateToProps, { getSpecific })(Suggestions)