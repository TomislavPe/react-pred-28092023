import { useState } from 'react'

const withCount = Component => () => {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prev => prev + 1)
    }

    return (
        <Component count={count} increment={increment} />
    )
}

export default withCount