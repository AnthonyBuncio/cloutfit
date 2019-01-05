import React, { Component } from 'react';
import { 
    Form,
    InputGroup,
    InputGroupAddon,
    Input,
    Button
} from 'reactstrap'
import { connect } from 'react-redux';
import { getShoes } from '../actions/shoeActions';

class Search extends Component {
    state = {
        name: ''
    };

    componentDidMount() {
        this.props.getShoes()
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value.toLowerCase() })
    };

    onSubmit = (e) => {
        e.preventDefault();

        const searchTerm = {
            name: this.state.name
        }

        this.props.getShoes(searchTerm)
        
        e.target.reset()
    };

    render() {
        console.log('every state change of search bar =', this.state.name)
        return(
            <div>
                <Form onSubmit={this.onSubmit}>
                    <InputGroup size="sm" className="mx-auto input-group" style={{marginBottom: '1rem'}}>
                        <Input type="text" name="name" placeholder="Enter shoe.." onChange={this.onChange}/>
                        <InputGroupAddon addonType="append">
                            <Button >Search</Button>
                        </InputGroupAddon>
                    </InputGroup>    
                </Form>
            </div>    
        )
    }
}

const mapStateToProps = state => ({
    shoe: state.shoe
})

export default connect(mapStateToProps, { getShoes })(Search)