import React from 'react'

const MemoPage = React.memo((props) => {
    return(
        <div>
            {props?.list?.map((i,j) => (
                <div key={j}>
                    {i?.name?.common}
                </div>
            ))}
        </div>
    )
})

export default MemoPage
