import React from 'react';
import Button from '../Button';

export default function TodoForm({
  onChange,
  onSubmit,
  inputValue,
  inputPlaceholder,
}) {
  return (
    <form onSubmit={onSubmit} className="row flex-center margin-bottom-large">
      <input
        type="text"
        onChange={onChange}
        value={inputValue}
        placeholder={inputPlaceholder}
        className="col-6 md-4"
      />
      <Button
        type="submit"
        text="Add"
        disabled={!inputValue}
        className="margin-left-small col-2 md-1"
      />
    </form>
  );
}
