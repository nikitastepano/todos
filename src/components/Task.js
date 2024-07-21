import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNowStrict } from 'date-fns';

export class Task extends React.Component {
  render() {
    const {
      todo: { label, completed, id, hidden, date },
      setComplitedTask,
      deleteItem,
    } = this.props;

    return (
      <li className={`${completed ? 'completed' : ''} ${hidden ? 'hidden' : ''}`}>
        <div className="view">
          <input onChange={() => setComplitedTask(id)} id={id} className="toggle" type="checkbox" />
          <label htmlFor={id}>
            <span className="description">{label}</span>
            <span className="created">created {formatDistanceToNowStrict(date)} ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button onClick={() => deleteItem(id)} className="icon icon-destroy"></button>
        </div>
      </li>
    );
  }
}

Task.propTypes = {
  todo: PropTypes.shape({
    label: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    hidden: PropTypes.bool.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  }),
  setComplitedTask: PropTypes.func,
  deleteItem: PropTypes.func,
};

Task.defaultProps = {
  todo: [],
  setComplitedTask: () => {},
  deleteItem: () => {},
};
