import React, { Component } from 'react';
import './styles.css';
import Button from '../Button';

export default class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      animate: false,
    };
  }

  // Avoid unnecessary renders
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.animate !== this.state.animate) {
      return true;
    }
    return false;
  }

  handleAnimation = () => {
    const { onDelete, uniqueKey, status } = this.props;
    onDelete(uniqueKey);
    if (status) {
      this.setState({
        animate: true,
      });
    }
  }

  render() {
    const { animate } = this.state;
    const {
      description,
    } = this.props;
    return (
      <div className={`row col-7 md-4 border-dashed padding-small flex-edges margin-bottom-small ${animate ? 'delete' : ''}`}>
        <span className="col-8 col padding-small">
          {description}
        </span>
        <Button
          type="button"
          text="X"
          onClick={this.handleAnimation}
          className="col-3 col btn-danger btn-small"
        />
      </div>
    );
  }
}
