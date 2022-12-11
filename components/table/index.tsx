import { TableRow } from './TableRow'
import { TableHead } from './TableHead'

export const Table = () => {
    return (
        <div className="overflow-x-auto relative">
            <table className="w-full px-8 text-sm text-left bg-gray-100 text-gray-500 ">
                <TableHead />
                <tbody>
                    <TableRow />
                    <TableRow />
                    <TableRow />
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={12} className={'text-center py-2'}>
                            <button className="bg-transparent text-gray-900 text-center text-lg font-semibold capitalize py-2 place-content-center ">
                                load more
                            </button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
