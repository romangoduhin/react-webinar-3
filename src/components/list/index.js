import React from "react";
import PropTypes from 'prop-types';
import Item from "../item";
import {cn as bem} from "@bem-react/classname";
import './style.css';

function List({list, buttonText, onClick}) {
  const cn = bem('List');

  if(!list.length) return <div className={cn('empty')}>Пусто</div>

  return (
    <div className={cn()}>
      {list.map(item =>
        <div key={item.code} className={cn('item')}>
          <Item item={item} buttonText={buttonText} onClick={onClick}/>
        </div>
      )}
    </div>
  )
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
};

export default React.memo(List);