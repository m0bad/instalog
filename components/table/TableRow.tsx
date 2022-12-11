export const TableRow = () => {
    return (
        <tr className="bg-white text-table-primary">
            <td className="py-4 px-8 flex items-center">
                <Avatar letter={'M'} />
                Sliver
            </td>
            <td className="py-4 px-6">Sliver</td>
            <td className="py-4 px-6">Laptop</td>
            <td className="py-4 px-6">$2999</td>
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
