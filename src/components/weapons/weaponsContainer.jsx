import React, { useState, useEffect } from 'react';
import WeaponsBase from './weaponsBase';
import { Canvas } from '@react-three/fiber';
import ReactPaginate from 'react-paginate';
// import { useNavigate } from 'react-router-dom';
import './weapons.css'
function WeaponsContainer({ data }) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  // const navigate = useNavigate();

    useEffect(() => {
        setCurrentPage(0);
    }, [data]);
  const getWeaponsForPage = () => {
    const startIndex = currentPage * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;
    endIndex = endIndex > data?.length ? data?.length : endIndex;
    // console.log(data,data.slice(startIndex, endIndex))
    if (data) return data.slice(startIndex, endIndex); else return []
  };
  
  // handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleWeaponClick = (item) => () => {
    console.log('Clicked!', item.id);
    // navigate('/weapon/'+item.id);

  };
  return (
   <div  style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', height: '800px'}}>
      {getWeaponsForPage().map((item) => (
         <div style={{ flex: '0 0 calc(50% - 10px)', margin: '5px', position: 'relative' }}>
         <div onClick={handleWeaponClick(item)} className="weapon-title" style={{ position: 'absolute', zIndex: '1'}}>
           {item?.name}

         </div>
         <Canvas key={item.id}>
           <WeaponsBase glbFile={'glb/' + item.modelUrl + '.glb'} />
         </Canvas>
       </div>
    
      ))}
      <ReactPaginate
        breakClassName={'item break-me '}
        breakLabel={'...'}
        disabledClassName={'disabled-page'}
        nextClassName={"item next "}
        pageClassName={'item pagination-page '}
        previousClassName={"item previous"}
        pageCount={Math.ceil(data.length ? data.length :0 / itemsPerPage)}
        nextLabel=">"
        previousLabel="<"
        marginPagesDisplayed={2}
        pageRangeDisplayed={4}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'item active'}
      />
    </div>
  );
}

export default WeaponsContainer;
