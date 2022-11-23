import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames/bind"
import styles from './AccountItems.module.scss'


const cx = classNames.bind(styles)

function AccountItems() {
    return (
        <div className={cx("wrapper")}>
            <img
                className={cx("avatar")}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/083bdd98191f72128eebdbcca718c29f~c5_100x100.jpeg?x-expires=1669363200&x-signature=ffptBNVrt%2F5BOhTr1vKFhwXz8Ms%3D"
                alt="AAA"
            />
            <div className={cx("info")}>
                <p className={cx("name")}>
                    <span>Nguyen Duc Viet</span>
                    <FontAwesomeIcon className={cx('checkicon')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>Nguyen Duc Viet</span>
            </div>

        </div>
    )
}

export default AccountItems