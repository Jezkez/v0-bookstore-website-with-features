'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { ChevronDown, ChevronUp, Filter, X } from 'lucide-react'

interface FilterOption {
  id: string
  label: string
  count?: number
}

interface FilterGroup {
  title: string
  options: FilterOption[]
  expandedByDefault?: boolean
}

interface FilterSidebarProps {
  filters: FilterGroup[]
  onFilterChange?: (groupTitle: string, selectedOptions: string[]) => void
  priceRange?: [number, number]
  onPriceChange?: (min: number, max: number) => void
  onLanguageChange?: (language: string) => void
}

export function FilterSidebar({
  filters,
  onFilterChange,
  priceRange = [0, 100],
  onPriceChange,
  onLanguageChange
}: FilterSidebarProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>(
    filters.reduce((acc, group) => ({
      ...acc,
      [group.title]: group.expandedByDefault ?? true
    }), {})
  )
  const [selected, setSelected] = useState<Record<string, string[]>>({})
  const [minPrice, setMinPrice] = useState(priceRange[0])
  const [maxPrice, setMaxPrice] = useState(priceRange[1])
  const [language, setLanguage] = useState('all')

  const toggleGroup = (title: string) => {
    setExpanded(prev => ({
      ...prev,
      [title]: !prev[title]
    }))
  }

  const toggleOption = (groupTitle: string, optionId: string) => {
    setSelected(prev => {
      const groupSelected = prev[groupTitle] || []
      const updated = groupSelected.includes(optionId)
        ? groupSelected.filter(id => id !== optionId)
        : [...groupSelected, optionId]
      
      onFilterChange?.(groupTitle, updated)
      return {
        ...prev,
        [groupTitle]: updated
      }
    })
  }

  const handlePriceChange = () => {
    onPriceChange?.(minPrice, maxPrice)
  }

  const handleLanguageChange = (value: string) => {
    setLanguage(value)
    onLanguageChange?.(value)
  }

  const clearAllFilters = () => {
    setSelected({})
    setMinPrice(priceRange[0])
    setMaxPrice(priceRange[1])
    setLanguage('all')
  }

  return (
    <div className="w-full md:w-64 space-y-4">
      {/* Header with Clear Button */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5" />
          <h3 className="font-bold">Filters</h3>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={clearAllFilters}
          className="text-xs"
        >
          <X className="w-4 h-4 mr-1" />
          Clear
        </Button>
      </div>

      {/* Price Range */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex gap-2">
            <Input
              type="number"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="w-full text-sm"
            />
            <Input
              type="number"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full text-sm"
            />
          </div>
          <Button
            size="sm"
            variant="outline"
            onClick={handlePriceChange}
            className="w-full text-xs"
          >
            Apply Price
          </Button>
        </CardContent>
      </Card>

      {/* Language */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Language</CardTitle>
        </CardHeader>
        <CardContent>
          <select
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="w-full p-2 border rounded text-sm"
          >
            <option value="all">All Languages</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="ja">Japanese</option>
            <option value="zh">Chinese</option>
          </select>
        </CardContent>
      </Card>

      {/* Filter Groups */}
      {filters.map(group => (
        <Card key={group.title}>
          <CardHeader
            className="pb-3 cursor-pointer flex items-center justify-between"
            onClick={() => toggleGroup(group.title)}
          >
            <CardTitle className="text-base">{group.title}</CardTitle>
            {expanded[group.title] ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </CardHeader>

          {expanded[group.title] && (
            <CardContent className="space-y-2">
              {group.options.map(option => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`${group.title}-${option.id}`}
                    checked={selected[group.title]?.includes(option.id) ?? false}
                    onCheckedChange={() => toggleOption(group.title, option.id)}
                  />
                  <Label
                    htmlFor={`${group.title}-${option.id}`}
                    className="text-sm cursor-pointer flex-1"
                  >
                    {option.label}
                    {option.count && (
                      <span className="text-xs text-muted-foreground ml-2">
                        ({option.count})
                      </span>
                    )}
                  </Label>
                </div>
              ))}
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  )
}
