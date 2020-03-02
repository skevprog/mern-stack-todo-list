import React, { Component } from 'react';
import Button from '../Button';

export default class Todo extends Component {
  render() {
    const {
      description,
      onDelete,
    } = this.props;
    return (
      <div className="row col-9 md-4 border-dashed padding-small flex-edges margin-bottom-small">
        <span className="col-8 col padding-small">
          {description}
        </span>
        <Button
          type="button"
          text="X"
          onClick={onDelete}
          className="col-3 col btn-danger btn-small"
        />
      </div>
    );
  }
}
