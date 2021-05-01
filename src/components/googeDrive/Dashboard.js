import React from 'react';
import Navbar from './Navbar';
import { Container } from 'react-bootstrap';
import AddFolderButton from './AddFolderButton';
import { useFolder } from '../../hooks/useFolder';
import Folder from './Folder';
import { useParams, useLocation } from 'react-router';
import FolderBreadcrumbs from './FolderBreadcrumbs';

export default function Dashboard() {
   const { folderId } = useParams();
   const { state = {} } = useLocation();
   const { folder, childFolders } = useFolder(folderId, state.folder);

   console.log('childFolders', childFolders);
   console.log('folder', folder);

   return (
      <>
         <Navbar />
         <Container fluid>
            <div className='d-flex align-items-center'>
               <FolderBreadcrumbs currentFolder={folder} />
               <AddFolderButton currentFolder={folder} />
            </div>
            {childFolders.length > 0 && (
               <div className='d-flex flex-wrap'>
                  {childFolders.map((childFolder) => (
                     <div
                        key={childFolder.id}
                        style={{ maxWidth: '250px' }}
                        className='p-2'
                     >
                        <Folder folder={childFolder}></Folder>
                     </div>
                  ))}
               </div>
            )}
         </Container>
      </>
   );
}
