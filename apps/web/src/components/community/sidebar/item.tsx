interface SidebarItemProps {
  title: string
  items?: string[]
}
const SidebarItem = ({ title, items }: SidebarItemProps) => {
  const ItemList = items?.map((item, idx) => (
    <span className="cursor-pointer text-gray-600 hover:text-black" key={idx}>
      {item}
    </span>
  ))
  return (
    <div className="flex flex-col gap-2 rounded-md bg-white p-4 shadow-sm">
      <h2 className="font-bold">{title}</h2>
      {ItemList}
    </div>
  )
}

export default SidebarItem
