import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


interface CategoryFilterProps {
  onCategory: (category: string) => void
}

const CategoryFilter = ({ onCategory }: CategoryFilterProps) => {
  const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology', 'politics','all'];
  return (
    <div className='flex justify-center items-center gap-2'>
      <h3 className='font-bold text-lg mb-2 shrink-0' >Filter by Category </h3>
      <Select 
        onValueChange={(value)=> onCategory(value === 'all' ? '' : value)}
      >
        <SelectTrigger className="w-[180px] capitalize">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          {
            categories.map((category)=> (
              <SelectItem key={category} value={category} >{category}</SelectItem>
            ))
          }
          
        </SelectContent>
      </Select>
    </div>
  )
}

export default CategoryFilter