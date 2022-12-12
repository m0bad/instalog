type Props = {
    value: string
    onChange: (value: string) => void
}
export const SearchInput = ({ value, onChange }: Props) => {
    return (
        <form className={'bg-gray-100 pt-6 pb-3 px-4'}>
            <div className="relative">
                <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 text-sm text-table-primary border border-gray-500 rounded-xl bg-gray-100 placeholder-gray-700 focus:outline-none"
                    placeholder="Search name, email or group"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    required
                />
            </div>
        </form>
    )
}
