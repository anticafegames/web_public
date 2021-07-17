import React, { Component, Fragment } from 'react'

//@ts-ignore
import  { Scrollbars } from 'react-custom-scrollbars'

import { List, AutoSizer, CellMeasurerCache, ListProps } from 'react-virtualized'
import 'react-virtualized/styles.css'


export interface iListVirtualizedProps {

    items: any[]
    rowRenderer: (props: any) => any
    rowCount: number
    overscanRowCount: number
    cache: CellMeasurerCache
}

class ListVirtualized extends Component<iListVirtualizedProps> {

    cache: CellMeasurerCache

    _mostRecentWidth: number
    _resizeAllFlag: boolean

    list: any
    scroll: any

    constructor(props: iListVirtualizedProps) {
        super(props)

        this.cache = this.props.cache
        this._mostRecentWidth = 0
        this._resizeAllFlag = false
        this.list = null

        this._resizeAll = this._resizeAll.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        if (
            this._resizeAllFlag
        ) {
            this._resizeAllFlag = false
            this.cache.clearAll()
        } else if (this.props.items && (this.props.items !== prevProps.items)) {
            const index = prevProps.items.length
            this.cache.clear(index, 0)
        }
    }

    handleScroll = (e: any) => {
        this.list.Grid._onScroll(e)
    }

    componentDidMount = () => {
        this.list.Grid._scrollingContainer = this.scroll.view
    }

    _resizeAll() {
        this._resizeAllFlag = false
        this.cache.clearAll()
    }

    render() {
        return (
            <AutoSizer>

                {({ height, width }) => {

                    if (this._mostRecentWidth && this._mostRecentWidth !== width) {
                        this._resizeAllFlag = true
                        setTimeout(this._resizeAll, 0)
                    }

                    this._mostRecentWidth = width

                    return (
                        <Scrollbars
                            ref={node => this.scroll = node}
                            onScroll={this.handleScroll}
                            style={{ height, width }}
                            autoHide
                            autoHideDuration={200}
                        >
                            <List
                                {...this.props}
                                style={{ overflowX: 'visible', overflowY: 'visible' }}
                                ref={node => this.list = node}
                                height={height}
                                width={width}
                                rowCount={this.props.rowCount}
                                rowHeight={this.cache.rowHeight}
                            />
                        </Scrollbars>
                    )
                }}

            </AutoSizer>
        )
    }
}

export default ListVirtualized