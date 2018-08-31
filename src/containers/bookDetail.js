import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class BookDetail extends Component {

    render() {
        if (!this.props.book) {
            return <div>Select a book to get starteed.</div>;
        }
        return (
            <div className="book-detail col-sm-8">
                {this.props.book.title}
            </div>
        );
    }
}

// Anything returned from the this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the resut should be passed
    // to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookList
    return {
        book: state.activeBook
    };
}


// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps)(BookDetail);
