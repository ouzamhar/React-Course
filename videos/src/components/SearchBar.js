import React from "react";

class SearchBar extends React.Component {
  state = { inputValue: "" };

  onChangeHandler = (event) => {
    this.setState({ inputValue: event.target.value });
    console.log(this.state.inputValue);
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.inputValue);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onSubmitHandler}>
          <div className="field">
            <label>Video Search</label>
            <input
              onChange={this.onChangeHandler}
              value={this.state.inputValue}
              type="text"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
