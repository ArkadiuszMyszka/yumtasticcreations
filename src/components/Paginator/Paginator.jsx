// import React, { useState } from "react";
// import Pagination from "react-paginating";
// import { GlobalPaginatorStyles } from "./Paginator.styled.js";

// const Paginator = ({ totalRecipesCount }) => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const handlePageChange = (page, e) => {
//     e.preventDefault();
//     setCurrentPage(page);
//   };

//   const itemsPerPage = 4;

//   return (
//     <>
//       <GlobalPaginatorStyles />
//       <Pagination
//         total={totalRecipesCount}
//         limit={itemsPerPage}
//         pageCount={Math.ceil(totalRecipesCount / itemsPerPage)}
//         currentPage={currentPage}
//       >
//         {({
//           pages,
//           currentPage,
//           hasNextPage,
//           hasPreviousPage,
//           previousPage,
//           nextPage,
//           totalPages,
//           getPageItemProps,
//         }) => (
//           <div className="pagination">
//             {hasPreviousPage && (
//               <button
//                 {...getPageItemProps({
//                   pageValue: previousPage,
//                   onPageChange: handlePageChange,
//                 })}
//               >
//                 {"<"}
//               </button>
//             )}

//             {pages.map((page, index) => (
//               <button
//                 key={index}
//                 {...getPageItemProps({
//                   pageValue: page,
//                   onPageChange: handlePageChange,
//                 })}
//               >
//                 {page}
//               </button>
//             ))}

//             {hasNextPage && (
//               <button
//                 {...getPageItemProps({
//                   pageValue: nextPage,
//                   onPageChange: handlePageChange,
//                 })}
//               >
//                 {">"}
//               </button>
//             )}
//           </div>
//         )}
//       </Pagination>
//     </>
//   );
// };

// export default Paginator;
// Paginator.jsx

import React, { useState } from "react";
import ReactPaginate from "react-paginate";

import {
  PaginatorContainer,
  PaginatorList,
  PaginatorLink,
  StyledReactPaginate,
} from "./Paginator.styled.js";

const Paginator = ({ totalRecipesCount }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  // Przykładowa wartość, zastąp własną logiką pobierania totalCount
  const itemsPerPage = 4;

  return (
    <PaginatorContainer>
      <StyledReactPaginate>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={Math.ceil(totalRecipesCount / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          disableInitialCallback={true}
          forcePage={currentPage}
          pageLinkClassName="pagination-link"
          previousClassName="pagination-previous"
          nextClassName="pagination-next"
        />
      </StyledReactPaginate>
      <PaginatorList>
        <PaginatorLink
          href="/"
          className="pagination-previous"
          onClick={() => handlePageClick({ selected: currentPage - 1 })}
        >
          {"<"}
        </PaginatorLink>
        {[1, 2, 3, 4].map((pageNumber) => (
          <PaginatorLink
            key={pageNumber}
            href="/"
            isActive={pageNumber - 1 === currentPage}
            onClick={() => handlePageClick({ selected: pageNumber - 1 })}
          >
            {pageNumber}
          </PaginatorLink>
        ))}
        <PaginatorLink
          href="/"
          className="pagination-next"
          onClick={() => handlePageClick({ selected: currentPage + 1 })}
        >
          {">"}
        </PaginatorLink>
      </PaginatorList>
    </PaginatorContainer>
  );
};

export default Paginator;
