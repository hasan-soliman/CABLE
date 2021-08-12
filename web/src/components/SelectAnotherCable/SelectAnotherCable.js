import { useState, useEffect } from 'react'
import { navigate, routes, useParams } from '@redwoodjs/router'
import { useContext } from 'react'
import { useCombobox } from 'downshift'
import { PlusCircleIcon } from '@heroicons/react/outline'
import { ResultsContext } from 'src/contexts/ResultsContext'

const SelectAnotherCable = ({ items, type }) => {
  const [state, dispatch] = useContext(ResultsContext)
  const [inputItems, setInputItems] = useState(items)
  const { id, ids } = useParams()
  const slugs = ids ? ids.split(",") : [id]

  const selectionFilter = (d) => {
    return !slugs.includes(d.url.split("/").pop())
  }

  const typeDisplayName = (d) => {
    switch(d) {
      case "submarine-cable": return "Cable"
      case "country": return "Country"
      case "landing-point": return "Landing"
      case "ready-for-service": return "RFS Year"
      case "status": return "Status"
      case "supplier": return "Supplier"
      default: return ""
    }
  }

  useEffect(() => {
    slugs && setInputItems(items.filter(d => selectionFilter(d)))
  }, [id, ids])

  const {
    isOpen,
    selectedItem,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    openMenu,
    reset,
  } = useCombobox({
    items: inputItems,
    itemToString: (item) => "",
    onSelectedItemChange: ({selectedItem}) => {
      if (selectedItem && selectedItem.url) {
        // navigate(routes.submarineCables({ ids:state.submarineCables.keys().concat(selectedItem.url.split("/").pop()).join(",") }))
        navigate(routes.multiselect({ id:type, ids:state.selection.keys().concat(selectedItem.url.split("/").pop()).join(",") }))
        reset()
      }
    },
    onInputValueChange: ({inputValue}) => {
      setInputItems(items.filter(d => selectionFilter(d)).filter(d => d.value.toLowerCase().indexOf(inputValue.toLowerCase()) > -1))
    },
  })

  return (
    <div className="float-right w-3/5 -mr-2 relative text-tg-blue" {...getComboboxProps()}>
      <input aria-label={"Select Another " + typeDisplayName(type)} placeholder={"Select Another " + typeDisplayName(type)} {...getInputProps({'aria-labelledby': null, onFocus: () => !isOpen && openMenu() })} className={"cursor-pointer focus:cursor-text w-full px-4 pl-9 py-1.5 hover:bg-tg-blue-20 bg-tg-blue-10 focus:bg-tg-blue-10 text-xs text-tg-blue outline-none placeholder-tg-blue font-bold leading-5 " + (isOpen ? "rounded-tl rounded-tr rounded-bl-none rounded-br-none" : "rounded")} />
      <ul aria-label="Cable list" {...getMenuProps({'aria-labelledby': null})} className={isOpen ? "absolute w-full pb-1.5 rounded-bl rounded-br bg-tg-blue-10" : ""}>
        {isOpen &&
          inputItems.map((item, index) => (
            <li
              key={item.value}
              className={"px-4 py-1.5 cursor-pointer text-xs text-tg-blue border-t border-tg-blue-30 " + (highlightedIndex === index ? 'bg-tg-blue-20' : 'bg-tg-blue-10')}
              {...getItemProps({item, index})}
            >
              {item.value.replace("Connected to ", "")}
            </li>
          ))
        }
      </ul>
      <PlusCircleIcon className="w-5 h-5 ml-0.5 absolute left-2 top-1.5"/>
    </div>
  )
}

export default SelectAnotherCable
