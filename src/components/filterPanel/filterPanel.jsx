import Button from "../../ui/button/Button";
import { Input } from "../../ui/input/Input";
import { Option, Select } from "../../ui/select/select";

export const FilterPanel = ({
    categories, 
    category,
    minInput, 
    maxInput, 
    setMinInput, 
    setMaxInput,
    updateParam, 
    handlePriceApply, 
    handleReset,
}) => {

return (
<div className='filterBlock'>
        <div className="categories">
          <Select
            className={'select_default'}
            value={category || ''}
            onChange={e => updateParam('category', e.target.value)}
          >
          <Option value="">All categories</Option>
          {categories?.data?.map(cat => (
          <Option key={cat._id} value={cat._id}>
          {cat.name}
          </Option>
        ))}
        </Select>
        </div>
        <div className="priceFilter">
          <Input
            className={'input_default price'}
            type="number"
            placeholder="Price from"
            value={minInput}
            onChange={e => setMinInput(e.target.value)}
          />
          <Input
            className={'input_default price'}
            type="number"
            placeholder="Price to"
            value={maxInput}
            onChange={e => setMaxInput(e.target.value)}
          />
          <Button 
          className={'default'}
          onClick={handlePriceApply}>
            Apply
          </Button>
        </div>

         <Button 
         className={'default red'}
         onClick={handleReset}>
          Reset filters
          </Button>
      </div>
    )
}

      