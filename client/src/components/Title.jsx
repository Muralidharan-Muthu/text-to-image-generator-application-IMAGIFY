import React from 'react'

const Title = ({ classNameTitle='',classNameDesc='',title, description }) => {
    return (
        <>
            <h1 className={'text-3xl sm:text-4xl font-semibold mb-2 '+classNameTitle}>{title}</h1>
            <p className={'text-lg text-gray-600 mb-8 '+classNameDesc}>{description}</p>
        </>
    )
}

export default Title