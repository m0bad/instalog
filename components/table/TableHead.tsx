import { PropsWithChildren } from 'react'
import { TableHeadersProps } from './index'

type Props<ObjectType> = {
    headers: TableHeadersProps<ObjectType>
}

export const TableHead = <ObjectType,>(
    props: PropsWithChildren<Props<ObjectType>>
) => {
    return (
        <thead className="text-md text-gray-900 bg-gray-100 uppercase">
            <tr>
                {props.headers.map((header, index) => (
                    <th
                        key={header.key.toString()}
                        className={`px-${index == 0 ? '8' : '6'} py-3`}
                    >
                        {header.label}
                    </th>
                ))}
            </tr>
        </thead>
    )
}
