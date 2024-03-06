
import { useState } from 'react'

import colors from '../../styles/utilities/colors.module.scss';
import { ReactComponent as ArrowUpIcon } from '../../assets/arrow-up.svg';

function Upvote() {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      <div>
        <button onClick={() => setIsSelected(!isSelected)}> <ArrowUpIcon fill={isSelected ? colors.selected : colors.default }/> </button>
      </div>
    </>
  )
}

export default Upvote
