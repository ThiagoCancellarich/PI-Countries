
const Paginado = ({currentPage, setCurrentPage, max, setPageNum, pageNum}) =>{
    const pageNumbers= [];
    
    const nextPage = () => {
        setPageNum(parseInt(pageNum) + 1)
        setCurrentPage(parseInt(currentPage)+ 1)        
    }
    const previusPage = () => {
        setPageNum(parseInt(pageNum) - 1)
        setCurrentPage(parseInt(currentPage) - 1)        
    }


      return (
      <div>   
         
        <button disabled={currentPage <= 1 } onClick={previusPage}>◀️</button>
        <span name="page"  value={pageNum}>{pageNum}</span> <span>de {max}</span>
        <button disabled={currentPage === Math.ceil(max) } onClick={nextPage}>▶️</button>
        
       
       
         
        </div>
        
    )
}

export default Paginado;