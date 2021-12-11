import { Fragment } from 'react'

function HeaderColumns (props) {
    return (
        <Fragment>
            <th className='border border-gray-300 bg-slate-400'>Fragment</th>
            <th className='border border-gray-300 bg-slate-400'>component</th>
        </Fragment>
    )
}

export default HeaderColumns