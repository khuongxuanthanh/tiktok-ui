
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/68539fa0a7334eba095bcd494efa88be~c5_100x100.jpeg?x-expires=1675573200&x-signature=z4KSC6BiuwL4WRCw%2Fva7OcluAm4%3D" alt="Gia Huy" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Khuong Gia Huy</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>khuonggiahuy</span>
            </div>

        </div>
     );
}

export default AccountItem;