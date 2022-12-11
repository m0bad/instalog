import { TableRow } from './TableRow'
import { TableHead } from './TableHead'
import { PropsWithChildren } from 'react'

export type TableHeadersProps<ObjectType> = {
    key: keyof ObjectType
    label: string
    type: 'text' | 'action' | 'date' | 'avatar'
}[]

type Props<ObjectType> = {
    paginationParams: {
        isLoadingMore?: boolean
        isReachingEnd?: boolean
        isRefreshing?: boolean
        size: number
        setSize: (size: number) => any
    }
    objects: ObjectType[]
    headers: TableHeadersProps<ObjectType>
}

export function Table<ObjetType extends { id: string }>(
    props: PropsWithChildren<Props<ObjetType>>
) {
    const { isLoadingMore, isReachingEnd, setSize, size } =
        props.paginationParams
    return (
        <div className="overflow-x-auto relative">
            <table className="w-full px-8 text-sm text-left bg-gray-100 text-gray-500 ">
                <TableHead headers={props.headers} />
                <tbody>
                    {props.objects.map((object, index) => (
                        <TableRow
                            key={index}
                            object={object}
                            headers={props.headers}
                        />
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={12} className={'text-center py-2'}>
                            <button
                                disabled={isLoadingMore || isReachingEnd}
                                onClick={() => setSize(size + 1)}
                                className="bg-transparent text-gray-900 text-center text-lg font-semibold capitalize py-2 place-content-center "
                            >
                                {isLoadingMore
                                    ? 'loading...'
                                    : isReachingEnd
                                    ? 'no more events'
                                    : 'load more'}
                            </button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
