import { Wrapper as PopperWrapper } from '~/components/Popper'
import HeadlessTippy from '@tippyjs/react/headless'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState, useRef } from 'react'



import classNames from 'classnames/bind'
import styles from './Search.module.scss'

import {
    faCircleXmark,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons'


import * as searchServices from '~/api-services/searchServices'
import AccountItems from '~/components/AccountItems/AccountItems'
import { SearchIcon, } from '~/components/icons'
import { useDebounce } from '~/hooks'

const cx = classNames.bind(styles)

function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)

    const debounced = useDebounce(searchValue, 500)

    const inputRef = useRef()


    useEffect(() => {

        if (!debounced.trim()) {
            setShowResult([])
            return;
        }

        // Call API
        const fetchApi = async () => {
            setLoading(true)
            const result = await searchServices.search(debounced)
            setSearchResult(result)
            setLoading(false)
        }
        fetchApi()

    }, [debounced])

    // END OF Call API


    const handleClear = () => {
        setSearchValue('')
        inputRef.current.focus()
    }

    const handleHideResult = () => {
        setShowResult(false)
    }

    const handelChange = (e) => {
        const searchValue = e.target.value
        if (!searchValue.startsWith('  ')) {
            setSearchValue(searchValue)
        }

        const handleSubmit = () => {

        }


    }
    return (
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={attrs => (
                    <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h5 className={cx('search-title')}>Accounts</h5>

                            {searchResult.map((result) => (
                                <AccountItems key={result.id} data={result} />
                            ))}

                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >

                {/* SEARCH INPUT */}
                <div className={cx("search")}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder='Search accounts and videos'
                        spellCheck={false}
                        onChange={handelChange}
                        onFocus={() => setShowResult(true)}
                    />

                    {searchValue && !loading && (
                        <button
                            className={cx("clear")}
                            onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx("search-btn")} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon width='1.5rem' />
                    </button>
                </div>
                {/* END OF SEARCH INPUT */}

            </HeadlessTippy>
        </div>
    );
}

export default Search;