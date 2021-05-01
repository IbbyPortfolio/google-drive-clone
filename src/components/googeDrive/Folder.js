import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

export default function Folder({ folder }) {
   return (
      <Link>
         <FontAwesomeIcon icon={faFolder} className='mr-2' />
         {Folder.name}
      </Link>
   );
}
