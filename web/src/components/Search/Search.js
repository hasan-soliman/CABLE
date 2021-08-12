import { useState } from 'react'
import { navigate, routes } from '@redwoodjs/router'
import { useCombobox } from 'downshift'
import { SearchIcon } from '@heroicons/react/outline'

const Search = ({ items }) => {
  const [inputItems, setInputItems] = useState(items)
  const {
    isOpen,
    selectedItem,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    reset,
  } = useCombobox({
    items: inputItems,
    itemToString: (item) => "",
    onSelectedItemChange: ({selectedItem}) => {
      if (selectedItem && selectedItem.url) {
        navigate(selectedItem.url)
        reset()
      }
    },
    onInputValueChange: ({inputValue}) => {
      setInputItems(items.filter(item => item.value.toLowerCase().indexOf(inputValue.toLowerCase()) > -1))
    },
  })

  return (
    <div className="relative lg:sticky top-0 px-4 py-4 bg-white border-gray-200 z-40" {...getComboboxProps()}>
      <input aria-label="Search" placeholder="Search by cable, landing, country, year ..." {...getInputProps({'aria-labelledby': null})} className={"w-full pl-12 pr-4 py-4 bg-tg-blue-10 focus:bg-tg-blue-10 hover:bg-tg-blue-20 text-tg-blue outline-none placeholder-tg-blue leading-none " + (isOpen ? "rounded-tl-lg rounded-tr-lg rounded-bl-none rounded-br-none" : "rounded-lg")} />
      <ul aria-label="Search results" {...getMenuProps({'aria-labelledby': null})} className={isOpen ? "pb-2 rounded-bl-lg rounded-br-lg bg-tg-blue-10" : ""}>
        {isOpen &&
          inputItems.map((item, index) => (
            <li
              key={item.value}
              className={"px-4 py-2 cursor-pointer text-tg-blue border-t border-tg-blue-30 " + (highlightedIndex === index ? 'bg-tg-blue-20' : 'bg-tg-blue-10')}
              {...getItemProps({item, index})}
            >
              {item.value}
            </li>
          ))
        }
      </ul>
      <SearchIcon className="w-5 h-5 text-tg-blue mt-8 ml-8 inset-x-0 -inset-y-px absolute"/>
    </div>
  )
}

export default Search
