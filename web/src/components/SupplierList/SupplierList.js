import { Link, routes } from '@redwoodjs/router'

const SupplierList = ({ vendors }) => {
  // Put this somewhere else
  const slug = (d) => {
    return d.replace(/^\s+|\s+$/g, '').toLowerCase().replace(/[^-a-z0-9~\s\.:;+=_]/g, '').replace(/[\s\.:;=+]+/g, '-')
  }

  return (
    <>
      {vendors.split(",").map((d, i, arr) => (<span key={slug(d)}><Link to={routes.supplier({ id: slug(d) }) }>{d}</Link>{arr.length - 1 === i ? " " : ", "}</span>))}
    </>
  )
}

export default SupplierList
