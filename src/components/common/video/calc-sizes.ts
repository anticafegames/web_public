import { iScreenSize } from '../../../code/context/window-params-context'
import { iProps } from './styled'

const proportion = 1.6
const heightTopNav = 64

export default ({ screenSize, length, index, width: widthProp, height: heightProp }: iProps) => {

    if (widthProp || heightProp) {
        return returnSizes(widthProp!, heightProp!)
    }

    let width: number
    let height: number
    let margin: number
    let countInRow: number

    if (screenSize.width <= 1400) {

        margin = 0

        if (screenSize.orientation == 'portrait') {

            switch (length) {

                case 5:

                    if (index == 3) {
                        countInRow = 1
                        width = screenSize.width
                    } else {
                        countInRow = 2
                        width = screenSize.width / 2
                    }
                    break

                case 4:

                    if (index == 1 || index == 4) {
                        countInRow = 1
                        width = screenSize.width
                    } else {
                        countInRow = 2
                        width = screenSize.width / 2
                    }
                    break

                case 3:
                case 2:
                case 1:
                    countInRow = 1
                    width = screenSize.width
                    break

                default:
                    countInRow = 2
                    width = screenSize.width / 2
                    break

            }

        } else {

            switch (length) {

                case 5:

                    if (index == 5 || index == 4) {
                        countInRow = 2
                        width = screenSize.width / 2
                    } else {
                        countInRow = 1
                        width = screenSize.width
                    }
                    break

                case 4:
                case 3:
                case 2:
                case 1:

                    countInRow = 2
                    width = screenSize.width / 2
                    break

                case 7:
                case 8:

                    countInRow = 4
                    width = screenSize.width / 4
                    break

                default:
                    countInRow = 3
                    width = screenSize.width / 3
                    break;

            }
        }

    } else {

        margin = 5

        switch (length) {

            case 7:
            case 8:
                countInRow = 4
                width = (screenSize.width / countInRow) - (countInRow * (margin * 2))
                break

            default:
                countInRow = 3
                width = (screenSize.width / countInRow) - (countInRow * (margin * 2))

        }
    }

    height = width / proportion
    const corectedSizes = correctSizes(screenSize, width, height, length, margin, countInRow)

    return returnSizes(corectedSizes.width, corectedSizes.height, margin)
}

const correctSizes = (screenSize: iScreenSize, width: number, height: number, length: number, margin: number, countInRow: number) => {

    const widthScreen = screenSize.width
    const heightScreen = screenSize.height

    const countInColumn = length / countInRow

    const fitWidth = () => widthScreen >= ((width + margin * 2) * countInRow)
    const fitHeigth = () => heightScreen - heightTopNav >= ((height + margin * 2) * countInColumn)

    while (!fitWidth() || !fitHeigth()) {

        width = width - 10
        height = width / proportion
    }

    return { width, height }
}

const returnSizes = (width: string | number, height: string | number, margin?: number) => {

    const widthPostfix = width && typeof width === 'number' ? 'px;' : ';'
    const heightPostfix = height && typeof height === 'number' ? 'px;' : ';'

    const widthStyle = width ? `width: ${width}${widthPostfix}` : ''
    const heightStyle = height ? `height: ${height}${heightPostfix}` : ''

    const marginStyle = margin ? `margin: ${margin}px;` : ''

    return widthStyle + heightStyle + marginStyle
}

const getWidthDesctopVideoContainer = ({ screenSize, length, index, width }: any) => {

    if (width) {
        return `width: ${screenSize.width};`
    }

    if (screenSize.width <= 1400) {

        if (screenSize.orientation == 'portrait') {

            switch (length) {

                case 5:

                    if (index == 3) {
                        return `width: ${screenSize.width}px;`
                    }
                    break

                case 4:

                    if (index == 1 || index == 4) {
                        return `width: ${screenSize.width}px;`
                    }
                    break

                case 3:
                case 2:
                case 1:
                    return `width: ${screenSize.width}px;`


            }

            return `width: ${screenSize.width / 2}px;`

        } else {

            switch (length) {

                case 5:

                    if (index == 5 || index == 4) {
                        return `width: ${screenSize.width / 2}px;`
                    }

                    break

                case 4:
                case 3:
                case 2:
                case 1:

                    return `width: ${screenSize.width / 2}px;`

                case 7:
                case 8:

                    return `width: ${screenSize.width / 4}px;`


            }

            return `width: ${screenSize.width / 3}px;`

        }
    }

    switch (length) {

        case 7:
        case 8:
            return `width: ${(screenSize.width - 440) / 4}px;`

        default:
            return `width: ${(screenSize.width - 440) / 3}px;`
    }
}

const getHeightDesctopVideoContainer = ({ screenSize, length, index, height }: any) => {

    if (height) {
        return `height: ${height};`
    }

    if (screenSize.width <= 1400) {

        if (screenSize.orientation == 'portrait') {

            switch (length) {

                case 7:
                case 8:
                    return `height: ${screenSize.height / 4}px;`

                default:
                    return `height: ${screenSize.height / 3}px;`

            }

        } else {

            switch (length) {

                case 1:
                case 2:
                    return `height: ${screenSize.height}px;`

                default:
                    return `height: ${screenSize.height / 2}px;`

            }
        }
    }

    switch (length) {

        case 7:
        case 8:
            return `height: ${(screenSize.width - 440) / 4 / 1.33}px;`

        default:
            return `height: ${(screenSize.width - 440) / 3 / 1.33}px;`
    }
}