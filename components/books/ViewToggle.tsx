'use client'

import { ButtonGroup } from '@/components/ui/button-group'
import { LayoutGrid, List, Squares2X2 } from 'lucide-react'

interface ViewToggleProps {
  currentView: 'grid' | 'list' | 'tile'
  onViewChange: (view: 'grid' | 'list' | 'tile') => void
}

export function ViewToggle({ currentView, onViewChange }: ViewToggleProps) {
  return (
    <ButtonGroup>
      <button
        onClick={() => onViewChange('grid')}
        className={`p-2 rounded transition-colors ${
          currentView === 'grid'
            ? 'bg-primary text-primary-foreground'
            : 'hover:bg-secondary'
        }`}
        title="Grid View"
        aria-label="Grid View"
      >
        <LayoutGrid className="w-5 h-5" />
      </button>
      <button
        onClick={() => onViewChange('list')}
        className={`p-2 rounded transition-colors ${
          currentView === 'list'
            ? 'bg-primary text-primary-foreground'
            : 'hover:bg-secondary'
        }`}
        title="List View"
        aria-label="List View"
      >
        <List className="w-5 h-5" />
      </button>
      <button
        onClick={() => onViewChange('tile')}
        className={`p-2 rounded transition-colors ${
          currentView === 'tile'
            ? 'bg-primary text-primary-foreground'
            : 'hover:bg-secondary'
        }`}
        title="Tile View"
        aria-label="Tile View"
      >
        <Squares2X2 className="w-5 h-5" />
      </button>
    </ButtonGroup>
  )
}
