import React, { Component } from 'react';
import Button from '../Button';

export default class Todo extends Component {
  render() {
    const {
      description,
      onDelete,
      onEdit,
    } = this.props;
    return (
      <div className="row col-7 border-dashed padding-small">
        <span className="col-6 col padding-small">
          {description}
        </span>
        <Button
          type="button"
          text="X"
          onClick={onDelete}
          className="col-3 col btn-danger btn-small"
        />
        <Button
          type="button"
          text="Edit"
          onClick={onEdit}
          className="col-3 col btn-small"
        />
      </div>
    );
  }
}
