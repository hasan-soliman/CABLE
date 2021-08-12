import { useState, useEffect } from 'react'
import { useParams } from '@redwoodjs/router'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { ClipboardCopyIcon } from '@heroicons/react/outline'

const ResultsHeader = ({ name }) => {
  const params = useParams()
  const [copy, setCopy] = useState({ value: window.location.href, copied: false })

  useEffect(() => {
    setCopy({ ...copy, copied: false })
  }, [params])

  const copyLink = () => {
    setCopy({ ...copy, copied: true })
    ga('send', 'event', 'Copy', 'Copied', copy.value)
  }

  return (
    <div className="my-4">
      <h2>{name}</h2>
      <CopyToClipboard text={copy.value}
        onCopy={() => copyLink()}>
        <span className={"text-sm inline-block leading-4 " + (copy.copied ? "text-gray-500 hover:text-gray-500 cursor-default" : "text-tg-blue hover:text-tg-blue-darker cursor-pointer")}><ClipboardCopyIcon className="w-4 h-4 mr-1 float-left" /> { copy.copied ? "Copied" : "Copy link" }</span>
      </CopyToClipboard>

    </div>
  )
}

export default ResultsHeader
