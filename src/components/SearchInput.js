import React from 'react';

class SearchInput extends React.Component{
    state ={term :''};

    onFormSubmit = (event)=>{
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
            <div className="ui segment">
                <div className="ui form">
                    <form onSubmit={this.onFormSubmit} className="field">
                        <label>Image Search</label>
                        <input 
                            type="text"
                            value={this.state.term}
                            onInput={(e) => this.setState({term: e.target.value})}/>
                    </form>
                </div>
            </div>
        );
    }
}


export default SearchInput;