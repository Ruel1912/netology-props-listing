import React from 'react'
import { IListingItem } from '../interface'
import { ListingItem } from './ListingItem'

interface ListingProps {
  items: IListingItem[]
}

export const Listing: React.FC<ListingProps> = ({ items = [] }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <ListingItem key={item.listing_id} item={item} />
      ))}
    </div>
  )
}
