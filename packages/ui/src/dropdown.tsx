'use client';
import { DropdownProps } from '@lvc/shared/types';
import { useState } from 'react';
import Button from './button';
import { RiArrowDropDownLine } from 'react-icons/ri';
const Dropdown = ({
  items,
  size = 'md',
  setValue,
  value,
  className
}: DropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleSelect = (item: string | number) => {
    setValue(item);
    setIsDropdownOpen(false);
  };

  const SIZE: Record<typeof size, string> = {
    xs: 'px-2 py-1 text-xs font-medium',
    sm: 'px-3 py-1 text-sm font-medium',
    md: 'px-4 py-2 text-base font-semibold',
    lg: 'px-5 py-2 text-lg font-semibold',
    xl: 'px-6 py-3 text-xl font-bold'
  };

  const ItemList = items?.map(({ itemTitle, itemValue }, key) => (
    <div
      className={`${SIZE[size]} ${itemValue == value ? 'text-primary' : 'text-black'} whitespace-nowrap border-b border-gray-300 duration-200 hover:bg-gray-100`}
      key={key}
      onClick={() => handleSelect(itemValue)}>
      {itemTitle}
    </div>
  ));
  return (
    <div className={`${className} relative z-50 w-fit`}>
      <Button onClick={toggleDropdown}>
        {items?.find((item) => item.itemValue == value)?.itemTitle}
        <RiArrowDropDownLine size="1.5rem" />
      </Button>
      {isDropdownOpen && (
        <div className="absolute left-0 top-[110%] border border-b-0 bg-inherit bg-white">
          {ItemList}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
