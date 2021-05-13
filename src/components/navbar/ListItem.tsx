import React, { FC } from 'react'

interface IListItemProps {
  displayName?:string
}

const ListItem:FC<IListItemProps> = (props) => {
  const { displayName } = props;
  return (
    <li>
      <a
        href="/"
        aria-label="Our product"
        title="Our product"
        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
      >
        { displayName }
      </a>
  </li>
  )
}

ListItem.defaultProps = {
  displayName:'no name assigned'
}

export default ListItem
