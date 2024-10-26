import React from 'react'
import PropTypes from 'prop-types'

type Mods = Record<string, boolean | string>


export const classNames = (cls: string, mods: Mods, additional: string[]): string => {
    return [cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([cls, value]) => Boolean(value))
            .map(([cls, value]) => cls)].join(' ')

}
