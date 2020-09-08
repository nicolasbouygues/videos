import React from 'react'

class SearchBar extends React.Component {
    state = {term : '', searcher: 'youtube'};

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term, this.state.searcher)
    };

    onCheckboxSelected = (event) => {
        this.setState({searcher: event.target.value})
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} action="" className="ui form">
                    <div className="field">
                    <label htmlFor="">Video Search</label>
                    <input 
                    type="text" 
                    value={this.state.term}
                    onChange={this.onInputChange}
                    />
                        <select name="" id="video_select" onChange={this.onCheckboxSelected}>
                            <option value="youtube">YouTube</option>
                            <option value="dailymotion">Dailymotion</option>
                        </select>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar