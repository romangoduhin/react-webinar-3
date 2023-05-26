import {memo} from 'react';
import propTypes from 'prop-types';
import PropTypes from 'prop-types';
import {numberFormat} from "../../utils";
import {cn as bem} from "@bem-react/classname";
import './style.css';
import {Link} from "react-router-dom";
import {useLanguage} from "../../hooks";

function ItemBasket(props) {
  const {t} = useLanguage()

  const cn = bem('ItemBasket');

  const callbacks = {
    onRemove: () => props.onRemove(props.item._id)
  };

  return (
    <div className={cn()}>
      <div className={cn('title')}>
        <Link to={`/product/${props.item._id}`} className={cn('link')}>{props.item.title}</Link>
      </div>
      <div className={cn('right')}>
        <div className={cn('cell')}>{numberFormat(props.item.price)} ₽</div>
        <div className={cn('cell')}>{`${numberFormat(props.item.amount || 0)} ${t('Pieces')}`}</div>
        <div className={cn('cell')}>
          <button onClick={callbacks.onRemove}>{t('Delete')}</button>
        </div>
      </div>
    </div>
  )
}

ItemBasket.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    price: PropTypes.number,
    amount: PropTypes.number
  }).isRequired,
  onRemove: propTypes.func,
}

ItemBasket.defaultProps = {
  onRemove: () => {
  },
}

export default memo(ItemBasket);
