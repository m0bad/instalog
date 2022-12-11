export const TableHead = () => {
    return (
        <thead className="text-md text-gray-900 bg-gray-100 uppercase">
            <tr>
                <th scope="col" className="py-3 px-8">
                    Product name
                </th>
                <th scope="col" className="py-3 px-6">
                    Color
                </th>
                <th scope="col" className="py-3 px-6">
                    Category
                </th>
                <th scope="col" className="py-3 px-6">
                    Price
                </th>
                <th scope="col" className="py-3 px-6">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
    )
}
