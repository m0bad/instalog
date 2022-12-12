import React from 'react'
import type { NextPage } from 'next'
import useSWRInfinite from 'swr/infinite'
import { Table, TableHeadersProps } from '../components/table'
import { SearchInput } from '../components/input/Search/SearchInput'
import { Event } from '@prisma/client'
import { useDebounce } from '../hooks/useDebounce'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const PAGE_SIZE = 10

const EVENTS_HEADERS = [
    { key: 'actor.name', label: 'Actor', type: 'avatar' },
    { key: 'action.name', label: 'Action', type: 'text' },
    { key: 'occurred_at', label: 'Date', type: 'date' },
]

const Home: NextPage = () => {
    // TODO: refactor this logic to a custom hook on the future
    const [searchTerm, setSearchTerm] = React.useState('')
    const debouncedSearchTerm = useDebounce(searchTerm, 500)
    const { data, error, size, setSize, isValidating } = useSWRInfinite(
        (page: number, previousPageData) =>
            previousPageData
                ? `api/events?page_size=${PAGE_SIZE}&cursor=${previousPageData.nextCursor}&search_term=${debouncedSearchTerm}`
                : `api/events?page_size=${PAGE_SIZE}&search_term=${debouncedSearchTerm}`,
        fetcher
    )

    const isLoadingInitialData = !data && !error
    const isLoadingMore =
        isLoadingInitialData ||
        (size > 0 && data && typeof data[size - 1] === 'undefined')
    const isRefreshing = isValidating && data && data.length === size

    const events = data ? data.map((i) => i.items).flat() : []

    return (
        <div className={'flex justify-center my-24'}>
            <main
                className={
                    'place-items-center bg-white border-2 rounded-xl w-10/12'
                }
            >
                <SearchInput value={searchTerm} onChange={setSearchTerm} />
                {/*{TODO}*/}
                {/*{isEmpty && We need to handle this}*/}
                <Table
                    paginationParams={{
                        isLoadingMore,
                        isRefreshing,
                        setSize,
                        size,
                    }}
                    headers={EVENTS_HEADERS as TableHeadersProps<Event>}
                    objects={events}
                />
            </main>
        </div>
    )
}

export default Home
