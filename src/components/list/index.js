import React from "react";
import PropTypes from 'prop-types';
import Item from "../item";
import {cn as bem} from "@bem-react/classname";
import './style.css';

function List({list, onAddItem}) {
  const cn = bem('List');

  return (
    <div className={cn()}>{
      list.map(item =>
        <div key={item.code} className={cn('item')}>
          <Item item={item} onAdd={onAddItem}/>
        </div>
      )}
    </div>
  )
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  onAddItem: PropTypes.func,
};

List.defaultProps = {
  onAddItem: () => {},
};

export default React.memo(List);
