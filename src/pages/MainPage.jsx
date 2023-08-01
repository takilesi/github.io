
import React, { useContext } from 'react'
import { AppContext } from '../context/folio_context';

function Desktop() {
    let { folio, port } = useContext(AppContext);

  return (
    <div>
        Main Page
    </div>
  )
}

export default Desktop