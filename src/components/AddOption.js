import React from "react";

export default class AddOption extends React.Component {
  state = {
    errer: undefined,
  };
  //   constructor(props) {
  //     super(props);
  //     this.handleAddOption = this.handleAddOption.bind(this);
  //   }
  handleAddOption = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = "";
    }

    // this.setState(() => {
    //   return {
    //     error,
    //   };
    // });
  };

  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
