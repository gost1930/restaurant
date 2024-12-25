import React from 'react'

interface OptionProps {
    label: string;
    value: string;
    id?: string;
}
const Option : React.FC<OptionProps> = ({value , id , label}) => {
  return (
    <option value={value} id={id}>{label}</option>
  )
}

export default Option
