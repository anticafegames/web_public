import InputIcon, { iProps as iInputProps, iInputRef } from '.'

export const numberFilter = (eventKey: 'onkeypress' | 'onchange' | 'onblur', event: any, ref: iInputRef): boolean => {

    const value = (event as React.ChangeEvent<HTMLInputElement>).target.value

    switch (eventKey) {

        case 'onkeypress':
            return /\d/.test((event as React.KeyboardEvent<HTMLInputElement>).key)

        case 'onchange':

            if (!/^\d*$/.test(value)) {
                const minValue = ref.props.min || (ref.props.inputAttributes && ref.props.inputAttributes.min)
                ref.onChange(minValue ? minValue.toString() : '')
                return false
            }
            
            break;

        case 'onblur':

            const minValue = ref.props.min || (ref.props.inputAttributes && ref.props.inputAttributes.min)
            const maxValue = ref.props.max || (ref.props.inputAttributes && ref.props.inputAttributes.max)

            if (minValue && value < minValue) {
                ref.onChange(minValue.toString())
                return false
            }

            if (maxValue && value > maxValue) {
                ref.onChange(maxValue.toString())
                return false
            }

            break;
    }

    return true
}

export const filters = {
    number: numberFilter
}

export default (props: iInputProps) => {

    if (props.CustomFilter) {
        return props.CustomFilter
    }

    switch (props.type) {
        case 'number':
            return filters.number

        default:
            return undefined

    }
}