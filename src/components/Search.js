// React imports
import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);  
    this.state = {
      term: "",
    };
  }

  handleOnChange = event => {
    this.setState({
      term: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();

    const { term } = this.state;
    const { searchVideo } = this.props;

    searchVideo(term);
  };

  render() {
    const { term } = this.state;
    return (
      <div className="search">
        <form onSubmit={this.handleOnSubmit}>
          <div className="field">
            <label id="searchLabel" htmlFor="searchTerm">
              Search...
              <input
                id="searchTerm"
                type="text"
                value={term}
                onChange={this.handleOnChange}
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
