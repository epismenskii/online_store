import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"


export const useProductFilters = () => {

    const [ searchParams, setSearchParams] = useSearchParams()

    const search = searchParams.get('search') || ''
      const category = searchParams.get('category') || undefined
      const minPrice = searchParams.get('minPrice') || undefined
      const maxPrice = searchParams.get('maxPrice') || undefined

      const [ searchInput, setSearchInput ] = useState(search)
      const [minInput, setMinInput] = useState(minPrice || '')
      const [maxInput, setMaxInput] = useState(maxPrice || '')

      const updateParam = (key, value) => {
          setSearchParams(prev => {
            const next = new URLSearchParams(prev)
            if (value) {
              next.set(key, value)
            } else {
              next.delete(key)
            }
            return next
          })
        }

        useEffect(() => {
    if (searchInput === '' && searchParams.get('search')) {
      updateParam('search', '')
    }
  }, [searchInput])

    const handleSearch = () => updateParam('search', searchInput)
  
    const handlePriceApply = () => {
      setSearchParams(prev => {
        const next = new URLSearchParams(prev)
        minInput ? next.set('minPrice', minInput) : next.delete('minPrice')
        maxInput ? next.set('maxPrice', maxInput) : next.delete('maxPrice')
        return next
      })
    }
  
    const handleReset = () => {
      setSearchParams({})
      setSearchInput('')
      setMinInput('')
      setMaxInput('')
    }

    return {
        search, 
        category, 
        minPrice, 
        maxPrice, 
        searchInput,
        setSearchInput,
        minInput,
        setMinInput,
        maxInput, 
        setMaxInput,
        updateParam,
        handleSearch,
        handlePriceApply,
        handleReset
    }   
}