import { TableHeadersProps } from './index'
import { PropsWithChildren } from 'react'

type Props<ObjectType> = {
    object: ObjectType & { id: string }
    headers: TableHeadersProps<ObjectType>
}

export const TableRow = <ObjectType,>(
    props: PropsWithChildren<Props<ObjectType>>
) => {
    const { object, headers } = props

    const renderByType = (header: TableHeadersProps<ObjectType>[number]) => {
        const path = header.key.toString()
        const value = path.split('.').reduce((acc: ObjectType, key) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return acc[key]
        }, object)

        switch (header.type) {
            case 'avatar':
                return (
                    <td key={object.id} className="py-4 px-8 flex items-center">
                        <>
                            <Avatar letter={(value as string)[0]} />
                            {value}
                        </>
                    </td>
                )
            case 'date':
                return (
                    <td key={header.key.toString()} className={'px-6 py-4'}>
                        {formatDate(new Date(value as string))}
                    </td>
                )
            default:
                return (
                    <td key={header.key.toString()} className={'px-6 py-4'}>
                        {value as string}
                    </td>
                )
        }
    }

    return (
        <tr className="bg-white text-table-primary">
            {headers.map((header) => renderByType(header))}
            <td className="py-4 px-6">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 float-right"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </td>
        </tr>
    )
}

const Avatar = ({ letter }: { letter: string }) => {
    const classN = `flex items-center justify-center w-6 h-6 mr-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`
    return (
        <div className={classN}>
            <span className="text-white font-semibold">{letter}</span>
        </div>
    )
}

const formatDate = (date: Date) => {
    return date.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    })
}
